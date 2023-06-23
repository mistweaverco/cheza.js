import { fetchData } from './../lib/utils'
import pkg from './../package.json'
import type { ChezaDataStore } from '@mistweaverco/cheza.js'
import type { ChezaRecommendationDataStore, ChezaRecommendationOpts } from './../types'
import { prefillDataStore } from './prefillDataStore'
import { addEventListeners } from './addEventListeners'
import { createHTML } from './createHTML'
import { Logger, type SimpleLogger } from './Logger'
import { fillData } from './fillHTML'
import { ticker } from './ticker'
import '../styles/recommendation.scss'

class ChezaRecommendationPlugin {
  public static Version = pkg.version
  public static Name = 'ChezaRecommendationPlugin'
  private readonly _dataStore: ChezaRecommendationDataStore
  private _remainingRevolerplayTime: number
  logger: SimpleLogger

  constructor () {
    this._dataStore = prefillDataStore()
    this._remainingRevolerplayTime = 0
    this.logger = Logger(false)
  }

  private _fetchDataCallback (): void {
    fillData(this._dataStore)
    addEventListeners(this._dataStore, this)
  }

  startRevolverplayCountdown (): void {
    const progressSvgCircle = this._dataStore.ui.content.querySelector(
      '[data-role="recommendation-plugin-progress-value"]'
    ) as HTMLElement

    const revolverplayTicker = (): void => {
      ticker(this._dataStore.opts.countdownDuration, this._remainingRevolerplayTime, progressSvgCircle)
      this._remainingRevolerplayTime--
      if (this._remainingRevolerplayTime <= 0) {
        this._dataStore.opts.onCountdownOver?.(this._dataStore.data?.[0])
        this.reset()
      }
    }

    if (this._dataStore.intervalTicker === null) {
      this._dataStore.intervalTicker = setInterval(revolverplayTicker, 1000)
    }
  }

  clearRevolverplayTimer (): void {
    if (this._dataStore.intervalTicker !== null) {
      clearInterval(this._dataStore.intervalTicker)
      this._dataStore.intervalTicker = null
    }
  }

  reset (): void {
    this._dataStore.data = undefined
    this.clearRevolverplayTimer()
    this._remainingRevolerplayTime = this._dataStore.opts.countdownDuration
    this._dataStore.ui.root.classList.add('hidden')
  }

  add (chezaDataStore: ChezaDataStore, opts: ChezaRecommendationOpts): void {
    this._dataStore.opts = opts
    this._dataStore.opts.countdownDuration = opts?.countdownDuration ?? 10
    this._dataStore.opts.countdownPauseLabel = opts?.countdownPauseLabel ?? 'Pause'
    this._dataStore.opts.nextVideoLabel = opts?.nextVideoLabel ?? 'Next Video'
    this._remainingRevolerplayTime = this._dataStore.opts.countdownDuration
    this.logger = Logger(opts?.debug)
    this._dataStore.videoElement = chezaDataStore.videoElement
    this._dataStore.rootElement = chezaDataStore.rootElement
    this._dataStore.defaultUIElement = chezaDataStore.uiRoot
    createHTML(this._dataStore)
    const videoElement = this._dataStore.videoElement
    videoElement.addEventListener('play', () => {
      if (this._dataStore.data !== undefined) return
      const recommendationDataURL = videoElement.dataset.recommendationDataUrl as string
      if (recommendationDataURL === '') {
        this.logger.error('No recommendation data URL provided')
        return
      }
      fetchData(recommendationDataURL).then((data) => {
        if (opts.dataTransformer !== undefined) {
          this._dataStore.data = opts.dataTransformer(data)
        } else {
          this._dataStore.data = data
        }
        this._fetchDataCallback()
      }).catch((err) => {
        this.logger.error(err)
      })
    })
  }

  remove (_: ChezaDataStore): void {
    this._dataStore.ui.root.remove()
  }
}

export { ChezaRecommendationPlugin }
