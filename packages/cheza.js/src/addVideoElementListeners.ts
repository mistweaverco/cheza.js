import type { ChezaDataStore } from '../types'

export const addVideoElementListeners = (dataStore: ChezaDataStore): void => {
  const { videoElement } = dataStore
  const bottomControls = dataStore.rootElement.querySelector('.controls-bottom')
  const progressBar = dataStore.rootElement.querySelector('.progress-container .progress') as HTMLDivElement

  videoElement.addEventListener('click', () => {
    if (videoElement.paused) {
      void videoElement.play()
    } else {
      videoElement.pause()
    }
  })

  videoElement.addEventListener('timeupdate', () => {
    progressBar.style.width = `${(videoElement.currentTime / videoElement.duration) * 100}%`
  })

  videoElement.addEventListener('play', () => {
    bottomControls?.querySelector('.button-play')?.classList.add('button-hide')
    bottomControls?.querySelector('.button-pause')?.classList.remove('button-hide')
  })

  videoElement.addEventListener('pause', () => {
    bottomControls?.querySelector('.button-play')?.classList.remove('button-hide')
    bottomControls?.querySelector('.button-pause')?.classList.add('button-hide')
  })

  videoElement.addEventListener('volumechange', () => {
    if (videoElement.volume === 0) {
      bottomControls?.querySelector('.button-volume')?.classList.add('button-hide')
      bottomControls?.querySelector('.button-muted')?.classList.remove('button-hide')
    } else {
      bottomControls?.querySelector('.button-volume')?.classList.remove('button-hide')
      bottomControls?.querySelector('.button-muted')?.classList.add('button-hide')
    }
  })
}
