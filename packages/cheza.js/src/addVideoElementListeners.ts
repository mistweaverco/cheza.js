import type { ChezaDataStore } from '../types'

export const addVideoElementListeners = (dataStore: ChezaDataStore): void => {
  const { videoElement } = dataStore
  const bottomControls = dataStore.rootElement.querySelector('.controls-bottom')
  const progressBar = dataStore.rootElement.querySelector('.progress-container .progress') as HTMLDivElement

  videoElement.addEventListener('click', () => {
    console.log('click')
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
    bottomControls?.querySelector('.button-play')?.classList.add('hidden')
    bottomControls?.querySelector('.button-pause')?.classList.remove('hidden')
  })

  videoElement.addEventListener('pause', () => {
    bottomControls?.querySelector('.button-play')?.classList.remove('hidden')
    bottomControls?.querySelector('.button-pause')?.classList.add('hidden')
  })

  videoElement.addEventListener('volumechange', () => {
    if (videoElement.volume === 0) {
      bottomControls?.querySelector('.button-volume')?.classList.add('hidden')
      bottomControls?.querySelector('.button-muted')?.classList.remove('hidden')
    } else {
      bottomControls?.querySelector('.button-volume')?.classList.remove('hidden')
      bottomControls?.querySelector('.button-muted')?.classList.add('hidden')
    }
  })
}
