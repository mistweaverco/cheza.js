import type { ChezaDataStore } from '../types'

export const prefillDataStore = (videoElement: HTMLVideoElement): ChezaDataStore => {
  const rootElement = document.createElement('div')
  return {
    rootElement,
    videoElement
  }
}
