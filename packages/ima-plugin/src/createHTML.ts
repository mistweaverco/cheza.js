import type { ChezaIMADataStore } from '../types'
import { createButton, type ChezaButtonOpts } from './createButton'
import { GetBottomButtonOptsDirection, getBottomButtonOpts } from './getBottomButtonOpts'

export const createHTML = (dataStore: ChezaIMADataStore): void => {
  const defaultUIElement = dataStore.defaultUIElement as HTMLDivElement
  const uiRoot = dataStore.ui.root
  const overlay = dataStore.ui.overlay
  overlay.classList.add('overlay')
  uiRoot.classList.add('ima-ui', 'hidden')
  defaultUIElement.after(uiRoot)
  dataStore.ui.adContainer.classList.add('ad-container')
  uiRoot.appendChild(dataStore.ui.adContainer)
  const loadingSpinnerAnimation = document.createElement('div')
  loadingSpinnerAnimation.classList.add('animation')
  dataStore.ui.loadingSpinner.classList.add('loading-spinner', 'hidden')
  dataStore.ui.loadingSpinner.appendChild(loadingSpinnerAnimation)
  overlay.appendChild(dataStore.ui.loadingSpinner)
  dataStore.ui.controlsTop.classList.add('controls-top')
  dataStore.ui.controlsBottom.classList.add('controls-bottom')
  overlay.appendChild(dataStore.ui.controlsTop)
  overlay.appendChild(dataStore.ui.controlsBottom)
  uiRoot.appendChild(overlay)

  getBottomButtonOpts(dataStore, GetBottomButtonOptsDirection.LEFT).forEach((buttonOpts: ChezaButtonOpts) => {
    dataStore.ui.controlsBottom.appendChild(createButton(buttonOpts))
  })
  const timeLabel = document.createElement('div')
  timeLabel.classList.add('time-label')
  timeLabel.innerText = 'Ad'
  dataStore.ui.controlsBottom.appendChild(timeLabel)
  getBottomButtonOpts(dataStore, GetBottomButtonOptsDirection.RIGHT).forEach((buttonOpts: ChezaButtonOpts) => {
    dataStore.ui.controlsBottom.appendChild(createButton(buttonOpts))
  })
}
