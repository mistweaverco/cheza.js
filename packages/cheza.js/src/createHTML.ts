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
  const controls = ['cheza__controls--top', 'cheza__controls--bottom']
  controls.forEach((cls) => {
    const ctl = document.createElement('div')
    ctl.classList.add(cls)
    root.appendChild(ctl)
  })
  getBottomButtonOpts(dataStore).forEach((buttonOpts: any) => {
    const button = createButton(buttonOpts)
    root.querySelector('.cheza__controls--bottom')?.appendChild(button)
  })
  addVideoElementListeners(dataStore)
  return root
}
