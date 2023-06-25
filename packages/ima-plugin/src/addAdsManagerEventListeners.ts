import { type google, type ChezaIMADataStore, type ChezaIMAOpts } from './../types'
import { eventDispatcher } from './eventDispatcher'
import { ChezaIMAEvent } from './ChezaIMAEvent'
import Handlebars from 'handlebars'

let adLabelTimeTemplate: HandlebarsTemplateDelegate | undefined
let adLabelNTimeTemplate: HandlebarsTemplateDelegate | undefined

const _getAdLabelNTime = (dataStore: ChezaIMADataStore): string => {
  const opts = dataStore.opts as ChezaIMAOpts
  let adLabelTime = 'Ad {{adPosition}} of {{totalAds}} ends in {{secondsRemaining}}'
  if (opts.adLabelNTime !== undefined) {
    adLabelTime = opts.adLabelNTime
  }
  if (adLabelNTimeTemplate === undefined) {
    adLabelNTimeTemplate = Handlebars.compile(adLabelTime)
  }
  const remainingTime = dataStore.adsManager?.getRemainingTime()
  const secondsRemaining = remainingTime !== undefined ? Math.round(remainingTime) : 0
  const { adPosition, totalAds } = dataStore
  return adLabelNTimeTemplate({
    secondsRemaining,
    adPosition,
    totalAds
  })
}

const _getAdLabelTime = (dataStore: ChezaIMADataStore): string => {
  const opts = dataStore.opts as ChezaIMAOpts
  let adLabelTime = 'Ad ends in {{secondsRemaining}} seconds'
  if (opts.adLabelTime !== undefined) {
    adLabelTime = opts.adLabelTime
  }
  if (adLabelTimeTemplate === undefined) {
    adLabelTimeTemplate = Handlebars.compile(adLabelTime)
  }
  const remainingTime = dataStore.adsManager?.getRemainingTime()
  const secondsRemaining = remainingTime !== undefined ? Math.round(remainingTime) : 0
  return adLabelTimeTemplate({ secondsRemaining })
}

const getButtonByName = (name: string, dataStore: ChezaIMADataStore): HTMLButtonElement => {
  return dataStore.ui.controlsBottom.querySelector(`.button-${name}`) as HTMLButtonElement
}

export const addAdsManagerEventListeners = (dataStore: ChezaIMADataStore): void => {
  const g = dataStore.google as typeof google
  const am = dataStore.adsManager as google.ima.AdsManager
  const contentVideo = dataStore.videoElement as HTMLVideoElement
  const ev = eventDispatcher(contentVideo)

  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement === dataStore.rootElement) {
      getButtonByName('enter-fullscreen', dataStore).classList.add('hidden')
      getButtonByName('exit-fullscreen', dataStore).classList.remove('hidden')
      am.resize(contentVideo.clientWidth, contentVideo.clientHeight, g.ima.ViewMode.FULLSCREEN)
    } else {
      getButtonByName('enter-fullscreen', dataStore).classList.remove('hidden')
      getButtonByName('exit-fullscreen', dataStore).classList.add('hidden')
      am.resize(contentVideo.clientWidth, contentVideo.clientHeight, g.ima.ViewMode.NORMAL)
    }
  })

  // @ts-expect-error - IMA SDK types are incomplete
  am.addEventListener(g.ima.AdErrorEvent.Type.AD_ERROR, (adErrorEvent: any) => {
    const error = adErrorEvent.getError()
    console.error('Ad error: ', error.getMessage())
    ev.dispatch(ChezaIMAEvent.AD_ERROR, error.getMessage())
  })

  am.addEventListener(g.ima.AdEvent.Type.AD_CAN_PLAY, () => {
    dataStore.ui.loadingSpinner.classList.add('hidden')
  })

  am.addEventListener(g.ima.AdEvent.Type.AD_BUFFERING, () => {
    dataStore.ui.loadingSpinner.classList.remove('hidden')
  })

  am.addEventListener(g.ima.AdEvent.Type.AD_METADATA, () => {
    ev.dispatch(ChezaIMAEvent.AD_METADATA)
  })

  am.addEventListener(g.ima.AdEvent.Type.AD_PROGRESS, () => {
    const d = dataStore.ui.controlsBottom.querySelector('.time-label') as HTMLDivElement
    let adLabelTime = ''
    if (dataStore.totalAds > 1) {
      adLabelTime = _getAdLabelNTime(dataStore)
    } else {
      adLabelTime = _getAdLabelTime(dataStore)
    }
    d.innerHTML = adLabelTime
    ev.dispatch(ChezaIMAEvent.AD_PROGRESS)
  })

  am.addEventListener(g.ima.AdEvent.Type.CLICK, () => {
    ev.dispatch(ChezaIMAEvent.AD_CLICK)
  })

  am.addEventListener(g.ima.AdEvent.Type.COMPLETE, () => {
    dataStore.ui.root.classList.add('hidden')
    ev.dispatch(ChezaIMAEvent.AD_COMPLETE)
  })

  am.addEventListener(g.ima.AdEvent.Type.SKIPPED, () => {
    dataStore.ui.root.classList.add('hidden')
    ev.dispatch(ChezaIMAEvent.AD_SKIPPED)
  })

  am.addEventListener(g.ima.AdEvent.Type.FIRST_QUARTILE, () => {
    ev.dispatch(ChezaIMAEvent.AD_FIRST_QUARTILE)
  })

  am.addEventListener(g.ima.AdEvent.Type.MIDPOINT, () => {
    ev.dispatch(ChezaIMAEvent.AD_MIDPOINT)
  })

  am.addEventListener(g.ima.AdEvent.Type.PAUSED, () => {
    getButtonByName('play', dataStore).classList.remove('hidden')
    getButtonByName('pause', dataStore).classList.add('hidden')
    ev.dispatch(ChezaIMAEvent.AD_PAUSED, am.getRemainingTime())
  })

  am.addEventListener(g.ima.AdEvent.Type.RESUMED, () => {
    getButtonByName('play', dataStore).classList.add('hidden')
    getButtonByName('pause', dataStore).classList.remove('hidden')
    ev.dispatch(ChezaIMAEvent.AD_RESUMED, am.getRemainingTime())
  })

  am.addEventListener(g.ima.AdEvent.Type.STARTED, (adEvent: any) => {
    dataStore.ui.root.classList.remove('hidden')
    getButtonByName('play', dataStore).classList.add('hidden')
    getButtonByName('pause', dataStore).classList.remove('hidden')

    const contentVideo = dataStore.videoElement as HTMLVideoElement
    if (contentVideo.muted) {
      dataStore.adsManager?.setVolume(0)
      getButtonByName('volume', dataStore).classList.add('hidden')
      getButtonByName('muted', dataStore).classList.remove('hidden')
    } else {
      dataStore.adsManager?.setVolume(1)
      getButtonByName('volume', dataStore).classList.remove('hidden')
      getButtonByName('muted', dataStore).classList.add('hidden')
    }

    const adInfo = adEvent.getAd().getAdPodInfo()
    dataStore.adPosition = adInfo.getAdPosition()
    dataStore.totalAds = adInfo.getTotalAds()

    ev.dispatch(ChezaIMAEvent.AD_STARTED, am.getRemainingTime())
  })

  am.addEventListener(g.ima.AdEvent.Type.THIRD_QUARTILE, () => {
    ev.dispatch(ChezaIMAEvent.AD_THIRD_QUARTILE)
  })

  am.addEventListener(g.ima.AdEvent.Type.VOLUME_CHANGED, () => {
    const imaVideo = dataStore.imaVideoElement as HTMLVideoElement
    if (imaVideo.muted) {
      getButtonByName('volume', dataStore).classList.add('hidden')
      getButtonByName('muted', dataStore).classList.remove('hidden')
    } else {
      getButtonByName('volume', dataStore).classList.remove('hidden')
      getButtonByName('muted', dataStore).classList.add('hidden')
    }
    ev.dispatch(ChezaIMAEvent.AD_VOLUME_CHANGED, am.getVolume())
  })

  am.addEventListener(g.ima.AdEvent.Type.VOLUME_MUTED, () => {
    getButtonByName('volume', dataStore).classList.add('hidden')
    getButtonByName('muted', dataStore).classList.remove('hidden')
    ev.dispatch(ChezaIMAEvent.AD_VOLUME_MUTED)
  })

  am.addEventListener(g.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, () => {
    dataStore.videoElement?.pause()
  })

  am.addEventListener(g.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, () => {
    void dataStore.videoElement?.play()
  })
}
