import { loadIMAScript } from './../lib/utils'
import pkg from './../package.json'
import type { ChezaDataStore } from '@mistweaverco/cheza.js'
import type { google, ChezaIMADataStore, ChezaIMAOpts } from './../types'
import { addAdsManagerEventListeners } from './addAdsManagerEventListeners'
import { prefillDataStore } from './prefillDataStore'
import { createHTML } from './createHTML'
import { Logger, type SimpleLogger } from './Logger'
import '../styles/ima.scss'

class ChezaIMAPlugin {
  public static Version = pkg.version
  public static Name = 'ChezaIMAPlugin'
  public static Opts: ChezaIMAOpts = {}
  public google: typeof google | undefined
  private readonly _dataStore: ChezaIMADataStore
  private _chezaDataStore: ChezaDataStore | undefined
  logger: SimpleLogger

  constructor () {
    this._chezaDataStore = undefined
    this._dataStore = prefillDataStore()
    this.logger = Logger(false)
  }

  private _getGoogle (): typeof google {
    if (this._dataStore.google === undefined) {
      throw new Error('Google IMA SDK not loaded')
    } else {
      return this._dataStore.google
    }
  }

  private readonly _onAdsManagerLoaded = (event: google.ima.AdsManagerLoadedEvent): void => {
    const g = this._getGoogle()
    const videoElement = this._chezaDataStore?.videoElement as HTMLVideoElement
    const viewMode = this._dataStore.google?.ima.ViewMode.NORMAL as google.ima.ViewMode
    const adsRenderingSettings = new g.ima.AdsRenderingSettings()
    adsRenderingSettings.loadVideoTimeout = this._dataStore.opts?.loadVideoTimeout ?? -1
    adsRenderingSettings.uiElements = []
    this._dataStore.adsManager = event.getAdsManager(videoElement, adsRenderingSettings)
    window.addEventListener('resize', () => {
      // 📌 Should be null if fullscreen is not active
      // See: https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenElement
      if (document.fullscreenElement === null) {
        this._dataStore.adsManager?.resize(videoElement.clientWidth, videoElement.clientHeight, viewMode)
      }
    })
    addAdsManagerEventListeners(this._dataStore)
  }

  private readonly _onAdError = (event: google.ima.AdErrorEvent): void => {
    this.logger.error('_onAdError', event.getError())
    if (this._dataStore.adsManager !== undefined) {
      this._dataStore.adsManager.destroy()
    }
  }

  private _getViewMode (): google.ima.ViewMode {
    if (document.fullscreenElement === this._chezaDataStore?.rootElement) {
      return this._dataStore.google?.ima.ViewMode.FULLSCREEN as google.ima.ViewMode
    } else {
      return this._dataStore.google?.ima.ViewMode.NORMAL as google.ima.ViewMode
    }
  }

  private readonly _startAds = (event: Event): void => {
    if (this._dataStore.adsLoaded) {
      return
    }
    this._dataStore.adsLoaded = true
    // 📌 This works wonders and prevents the nasty play was interrupted
    // error message from appearing ..
    event.preventDefault()
    // 📌 Check if we need to load the video videoElement
    // in some circumstances via videoElement.load()
    // before we initialize the AdsManager
    this._dataStore.adDisplayContainer?.initialize()

    const width = this._chezaDataStore?.videoElement.offsetWidth ?? 0
    const height = this._chezaDataStore?.videoElement.offsetHeight ?? 0
    try {
      const viewMode = this._getViewMode()
      this._dataStore.adsManager?.init(width, height, viewMode)
      this._dataStore.adsManager?.start()
    } catch (adError: unknown) {
      this.logger.error('AdsManager could not be started')
      void this._chezaDataStore?.videoElement.play()
    }

    const dataStore = this._chezaDataStore as ChezaDataStore
    const videoElement = dataStore.videoElement
    const playButton = dataStore.controlsBottom.querySelector('.button-play') as HTMLButtonElement
    const progressContainer = dataStore.progressContainer
    videoElement.removeEventListener('play', this._startAds)
    videoElement.removeEventListener('click', this._startAds)
    playButton.removeEventListener('click', this._startAds)
    progressContainer.removeEventListener('click', this._startAds)
  }

  private readonly _requestAds = (): void => {
    const g = this._getGoogle()
    const dataStore = this._chezaDataStore as ChezaDataStore
    const videoElement = dataStore.videoElement
    const adsRequest = new g.ima.AdsRequest()
    const adTagUrl = videoElement.getAttribute('data-ima-ad-tag-url') ?? ''
    adsRequest.adTagUrl = adTagUrl

    if (this._dataStore.opts?.omidAccessModeRules !== undefined) {
      adsRequest.omidAccessModeRules = this._dataStore.opts.omidAccessModeRules
    }

    adsRequest.linearAdSlotWidth = videoElement.clientWidth
    adsRequest.linearAdSlotHeight = videoElement.clientHeight
    adsRequest.nonLinearAdSlotWidth = videoElement.clientWidth
    adsRequest.nonLinearAdSlotHeight = videoElement.clientHeight / 3

    this._dataStore.adsLoader?.requestAds(adsRequest)
  }

  private readonly _bindIMAVideoElementToDataStore = (): void => {
    const adContainer = this._dataStore.ui.adContainer
    const imaVideoElement = adContainer.querySelector('video') ?? adContainer.querySelector('lima-video')
    this._dataStore.imaVideoElement = imaVideoElement as HTMLVideoElement
  }

  private readonly _onVideoEnded = (): void => {
    this._dataStore.adsLoader?.contentComplete()
    this._dataStore.adsLoaded = false
    // 📌 we need to re-request ads after the video ends
    // so we can play the next video with ads
    // probably think of a better way to do this
    this._requestAds()
    const dataStore = this._chezaDataStore as ChezaDataStore
    const videoElement = dataStore.videoElement
    videoElement.addEventListener('play', this._startAds)
  }

  private readonly _loadIMAScriptCallback = (): void => {
    const g = this._getGoogle()
    const dataStore = this._chezaDataStore as ChezaDataStore
    const videoElement = dataStore.videoElement
    const playButton = dataStore.controlsBottom.querySelector('.button-play') as HTMLButtonElement
    const progressContainer = dataStore.progressContainer
    // 📌 This is a hack to prevent IMA from replacing the videoElement on iOS
    g.ima.settings.setDisableCustomPlaybackForIOS10Plus(true)
    g.ima.settings.setNumRedirects(this._dataStore.opts?.maxRedirects ?? 5)
    if (this._dataStore.opts?.locale !== undefined) {
      g.ima.settings.setLocale(this._dataStore.opts.locale)
    }
    if (this._dataStore.opts?.ppid !== undefined) {
      g.ima.settings.setPpid(this._dataStore.opts.ppid)
    }

    this._dataStore.adDisplayContainer = new g.ima.AdDisplayContainer(this._dataStore.ui.adContainer, videoElement)
    this._dataStore.adsLoader = new g.ima.AdsLoader(this._dataStore.adDisplayContainer)

    this._bindIMAVideoElementToDataStore()

    this._dataStore.adsLoader.addEventListener(g.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this._onAdsManagerLoaded, false)
    this._dataStore.adsLoader.addEventListener(g.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError, false)

    videoElement.addEventListener('ended', this._onVideoEnded, false)

    this._requestAds()

    // 📌 We need intercept the user's click on these elements
    // and load the ads before we play the video
    // This is just a hack to get around autoplay restrictions
    // and we remove them in the next step
    videoElement.addEventListener('click', this._startAds, false)
    playButton.addEventListener('click', this._startAds, false)
    progressContainer.addEventListener('click', this._startAds, false)
  }

  getDataStore (): ChezaIMADataStore {
    return this._dataStore
  }

  add (chezaDataStore: ChezaDataStore, opts?: ChezaIMAOpts): void {
    this._dataStore.opts = opts
    this.logger = Logger(opts?.debug)
    this._dataStore.videoElement = chezaDataStore.videoElement
    this._chezaDataStore = chezaDataStore
    this._dataStore.rootElement = chezaDataStore.rootElement
    this._dataStore.defaultUIElement = chezaDataStore.uiRoot
    createHTML(this._dataStore)
    loadIMAScript(opts?.debug).then((google) => {
      this._dataStore.google = google
      this._loadIMAScriptCallback()
    }).catch((err) => {
      this.logger.error(err)
    })
  }

  remove (_: ChezaDataStore): void {
    this._dataStore.ui.root.remove()
  }
}

export { ChezaIMAPlugin }
