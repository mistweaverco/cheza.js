import type { ChezaDataStore } from '../types'

export const prefillDataStore = (videoElement: HTMLVideoElement): ChezaDataStore => {
  const rootElement = document.createElement('div')
  const progressContainer = document.createElement('div')
  const progress = document.createElement('div')
  const controlsTop = document.createElement('div')
  const controlsBottom = document.createElement('div')
  const videoContainer = document.createElement('div')
  const loadingSpinner = document.createElement('div')
  const activePlugins = new Map()
  return {
    rootElement,
    videoElement,
    progressContainer,
    progress,
    controlsTop,
    controlsBottom,
    videoContainer,
    loadingSpinner,
    activePlugins
  }
}
