import type { ChezaDataStore } from '../types'
import UIIcons from '../icons/sprite/icons.svg'
import { createButton } from './createButton'
import { getBottomButtonOpts } from './getBottomButtonOpts'
import { addVideoElementListeners } from './addVideoElementListeners'

const createRootSVG = (): void => {
  if (document.getElementById('chezajs-default-ui-icons') === null) {
    const c = document.createElement('div')
    c.id = 'chezajs-default-ui-icons'
    c.innerHTML = UIIcons
    document.body.appendChild(c)
  }
}

const updateProgress = (event: MouseEvent, dataStore: ChezaDataStore): void => {
  const { videoElement } = dataStore
  const { offsetX } = event
  const { offsetWidth } = dataStore.progressContainer
  const percentage = offsetX / offsetWidth
  // immediately update the progress bar
  dataStore.progress.style.width = `${(percentage * 100)}%`
  videoElement.currentTime = videoElement.duration * percentage
}

export const createHTML = (dataStore: ChezaDataStore): HTMLDivElement => {
  createRootSVG()
  const root = dataStore.rootElement
  root.classList.add('cheza')
  dataStore.videoContainer.classList.add('video-container')
  dataStore.videoElement.parentElement?.insertBefore(root, dataStore.videoElement)
  dataStore.videoContainer.appendChild(dataStore.videoElement)
  root.appendChild(dataStore.videoContainer)
  const loadingSpinnerAnimation = document.createElement('div')
  loadingSpinnerAnimation.classList.add('animation')
  dataStore.loadingSpinner.classList.add('loading-spinner')
  dataStore.loadingSpinner.appendChild(loadingSpinnerAnimation)
  root.appendChild(dataStore.loadingSpinner)
  dataStore.controlsTop.classList.add('controls-top')
  dataStore.controlsBottom.classList.add('controls-bottom')
  dataStore.progressContainer.classList.add('progress-container')
  root.appendChild(dataStore.controlsTop)
  root.appendChild(dataStore.progressContainer)
  root.appendChild(dataStore.controlsBottom)

  const progressContainer = root.querySelector('.progress-container') as HTMLDivElement
  const progressInline = document.createElement('div')
  progressInline.classList.add('progress-inline')
  dataStore.progress.classList.add('progress')
  progressContainer.addEventListener('click', (event) => {
    updateProgress(event, dataStore)
  })
  progressInline.appendChild(dataStore.progress)

  root.querySelector('.progress-container')?.appendChild(progressInline)
  getBottomButtonOpts(dataStore).forEach((buttonOpts: any) => {
    const button = createButton(buttonOpts)
    root.querySelector('.controls-bottom')?.appendChild(button)
  })
  addVideoElementListeners(dataStore)
  return root
}
