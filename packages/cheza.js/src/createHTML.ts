import type { ChezaDataStore } from '../types'
import UIIcons from '../icons/sprite/icons.svg'
import { createButton } from './createButton'
import { createSVG } from './createSVG'

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
  const root = document.createElement('div')
  root.classList.add('cheza')
  dataStore.videoElement.parentElement?.insertBefore(root, dataStore.videoElement)
  root.appendChild(dataStore.videoElement)
  const controls = ['cheza__controls--top', 'cheza__controls--bottom']
  controls.forEach((cls) => {
    const ctl = document.createElement('div')
    ctl.classList.add(cls)
    root.appendChild(ctl)
  })
  const buttons = [
    {
      ariaLabel: 'Play',
      title: 'Play',
      svg: createSVG('play', {}),
      on: [
        {
          name: 'click',
          callback: () => {
            void dataStore.videoElement.play()
          }
        }
      ]
    }
  ]
  buttons.forEach((btn) => {
    const button = createButton(btn)
    root.querySelector('.cheza__controls--bottom')?.appendChild(button)
  })

  return root
}
