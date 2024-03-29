import type { ChezaDataStore } from '../types'

const getButtonByName = (name: string, dataStore: ChezaDataStore): HTMLButtonElement => {
  return dataStore.controlsBottom.querySelector(`.button-${name}`) as HTMLButtonElement
}

export const addVideoElementListeners = (dataStore: ChezaDataStore): void => {
  const { videoElement } = dataStore
  const progressBar = dataStore.progress
  const fullscreenChangeEventNames = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange']
  fullscreenChangeEventNames.forEach((fullscreenChangeEventName: string) => {
    document.addEventListener(fullscreenChangeEventName, () => {
      if (document.fullscreenElement === dataStore.rootElement) {
        getButtonByName('enter-fullscreen', dataStore).classList.add('hidden')
        getButtonByName('exit-fullscreen', dataStore).classList.remove('hidden')
      } else {
        getButtonByName('enter-fullscreen', dataStore).classList.remove('hidden')
        getButtonByName('exit-fullscreen', dataStore).classList.add('hidden')
      }
    })
  })

  videoElement.addEventListener('click', () => {
    if (videoElement.paused) {
      void videoElement.play()
    } else {
      videoElement.pause()
    }
  })

  videoElement.addEventListener('waiting', () => {
    dataStore.loadingSpinner.classList.remove('hidden')
  })

  videoElement.addEventListener('canplay', () => {
    dataStore.loadingSpinner.classList.add('hidden')
  })

  videoElement.addEventListener('playing', () => {
    dataStore.loadingSpinner.classList.add('hidden')
  })

  videoElement.addEventListener('timeupdate', () => {
    progressBar.style.width = `${(videoElement.currentTime / videoElement.duration) * 100}%`
  })

  videoElement.addEventListener('play', () => {
    getButtonByName('play', dataStore).classList.add('hidden')
    getButtonByName('pause', dataStore).classList.remove('hidden')
  })

  videoElement.addEventListener('pause', () => {
    getButtonByName('play', dataStore).classList.remove('hidden')
    getButtonByName('pause', dataStore).classList.add('hidden')
  })

  videoElement.addEventListener('volumechange', () => {
    if (videoElement.muted) {
      getButtonByName('volume', dataStore).classList.add('hidden')
      getButtonByName('muted', dataStore).classList.remove('hidden')
    } else {
      getButtonByName('volume', dataStore).classList.remove('hidden')
      getButtonByName('muted', dataStore).classList.add('hidden')
    }
  })
}
