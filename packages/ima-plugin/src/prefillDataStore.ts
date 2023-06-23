import type { ChezaIMADataStore } from '../types'

export const prefillDataStore = (): ChezaIMADataStore => {
  const root = document.createElement('div')
  const adContainer = document.createElement('div')
  const controlsTop = document.createElement('div')
  const controlsBottom = document.createElement('div')
  const loadingSpinner = document.createElement('div')
  return {
    defaultUIElement: undefined,
    videoElement: undefined,
    imaVideoElement: undefined,
    totalAds: 0,
    adPosition: 0,
    adsManager: undefined,
    adsLoader: undefined,
    adDisplayContainer: undefined,
    rootElement: undefined,
    adsInitialized: false,
    google: undefined,
    adsLoaded: false,
    opts: {},
    ui: {
      root,
      overlay: document.createElement('div'),
      adContainer,
      controlsTop,
      controlsBottom,
      loadingSpinner
    }
  }
}
