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
  const parentElement = dataStore.videoElement.parentElement as HTMLDivElement
  const root = dataStore.rootElement
  const uiRoot = dataStore.uiRoot
  root.classList.add('cheza')
  uiRoot.classList.add('default-ui')
  parentElement.insertBefore(root, dataStore.videoElement)
  root.appendChild(dataStore.videoElement)
  const loadingSpinnerAnimation = document.createElement('div')
  loadingSpinnerAnimation.classList.add('animation')
  dataStore.loadingSpinner.classList.add('loading-spinner', 'hidden')
  dataStore.loadingSpinner.appendChild(loadingSpinnerAnimation)
  uiRoot.appendChild(dataStore.loadingSpinner)
  dataStore.controlsTop.classList.add('controls-top')
  dataStore.controlsBottom.classList.add('controls-bottom')
  dataStore.progressContainer.classList.add('progress-container')
  uiRoot.appendChild(dataStore.controlsTop)
  uiRoot.appendChild(dataStore.progressContainer)
  uiRoot.appendChild(dataStore.controlsBottom)

  const progressContainer = dataStore.progressContainer
  const progressInline = document.createElement('div')
  progressInline.classList.add('progress-inline')
  dataStore.progress.classList.add('progress')
  progressContainer.addEventListener('click', (event) => {
    updateProgress(event, dataStore)
  })
  progressInline.appendChild(dataStore.progress)

  progressContainer.appendChild(progressInline)
  getBottomButtonOpts(dataStore).forEach((buttonOpts: any) => {
    const button = createButton(buttonOpts)
    dataStore.controlsBottom.appendChild(button)
  })

  root.appendChild(dataStore.uiRoot)
  addVideoElementListeners(dataStore)
  return root
}
