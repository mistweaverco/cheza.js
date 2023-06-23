import type { ChezaRecommendationDataStore } from '../types'

export const prefillDataStore = (): ChezaRecommendationDataStore => {
  const root = document.createElement('div')
  const content = document.createElement('div')
  return {
    defaultUIElement: undefined,
    videoElement: undefined,
    rootElement: undefined,
    intervalTicker: null,
    opts: {},
    ui: {
      root,
      content
    }
  }
}
