import type { ChezaDataStore } from '../types'

export const addVideoElementListeners = (dataStore: ChezaDataStore): void => {
  const { videoElement } = dataStore
  const bottomControls = dataStore.rootElement.querySelector('.cheza__controls--bottom')
  const progressBar = dataStore.rootElement.querySelector('.cheza__progress--container .progress') as HTMLDivElement

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
    bottomControls?.querySelector('.cheza__button--play')?.classList.add('cheza__button--hide')
    bottomControls?.querySelector('.cheza__button--pause')?.classList.remove('cheza__button--hide')
  })

  videoElement.addEventListener('pause', () => {
    bottomControls?.querySelector('.cheza__button--play')?.classList.remove('cheza__button--hide')
    bottomControls?.querySelector('.cheza__button--pause')?.classList.add('cheza__button--hide')
  })

  videoElement.addEventListener('volumechange', () => {
    if (videoElement.volume === 0) {
      bottomControls?.querySelector('.cheza__button--volume')?.classList.add('cheza__button--hide')
      bottomControls?.querySelector('.cheza__button--muted')?.classList.remove('cheza__button--hide')
    } else {
      bottomControls?.querySelector('.cheza__button--volume')?.classList.remove('cheza__button--hide')
      bottomControls?.querySelector('.cheza__button--muted')?.classList.add('cheza__button--hide')
    }
  })
}
