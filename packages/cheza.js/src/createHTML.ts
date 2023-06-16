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

export const createHTML = (dataStore: ChezaDataStore): HTMLDivElement => {
  createRootSVG()
  const root = dataStore.rootElement
  root.classList.add('cheza')
  dataStore.videoElement.parentElement?.insertBefore(root, dataStore.videoElement)
  root.appendChild(dataStore.videoElement)
  const elementCls = ['cheza__controls--top', 'cheza__progress--container', 'cheza__controls--bottom']
  elementCls.forEach((cls) => {
    const ctl = document.createElement('div')
    ctl.classList.add(cls)
    root.appendChild(ctl)
  })

  const progressContainer = root.querySelector('.cheza__progress--container') as HTMLDivElement
  const progressInline = document.createElement('div')
  progressInline.classList.add('progress_inline')
  const progress = document.createElement('div')
  progress.classList.add('progress')
  progressContainer.addEventListener('click', (event) => {
    const { videoElement } = dataStore
    const { offsetX } = event
    const { offsetWidth } = progressContainer
    const percentage = offsetX / offsetWidth
    console.log(percentage)
    videoElement.currentTime = videoElement.duration * percentage
  })
  progressInline.appendChild(progress)

  root.querySelector('.cheza__progress--container')?.appendChild(progressInline)
  getBottomButtonOpts(dataStore).forEach((buttonOpts: any) => {
    const button = createButton(buttonOpts)
    root.querySelector('.cheza__controls--bottom')?.appendChild(button)
  })
  addVideoElementListeners(dataStore)
  return root
}
