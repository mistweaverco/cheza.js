import type { ChezaDataStore } from '../types'
import type { ChezaButtonOpts } from './createButton'
import { enterFullscreen, exitFullscreen } from './fullscreenUtils'
import { createSVG } from './createSVG'

export const getBottomButtonOpts = (dataStore: ChezaDataStore): ChezaButtonOpts[] => {
  return [
    {
      name: 'play',
      ariaLabel: 'Play',
      title: 'Play',
      svg: createSVG('play'),
      on: [
        {
          name: 'click',
          callback: () => {
            void dataStore.videoElement.play()
          }
        }
      ]
    },
    {
      name: 'pause',
      ariaLabel: 'Pause',
      title: 'Pause',
      svg: createSVG('pause'),
      hidden: true,
      on: [
        {
          name: 'click',
          callback: () => {
            dataStore.videoElement.pause()
          }
        }
      ]
    },
    {
      name: 'volume',
      ariaLabel: 'Mute',
      title: 'Mute',
      svg: createSVG('volume'),
      on: [
        {
          name: 'click',
          callback: () => {
            dataStore.videoElement.muted = true
          }
        }
      ]
    },
    {
      name: 'muted',
      ariaLabel: 'Unmute',
      title: 'Unmute',
      svg: createSVG('muted'),
      hidden: true,
      on: [
        {
          name: 'click',
          callback: () => {
            dataStore.videoElement.muted = false
          }
        }
      ]
    },
    {
      name: 'enter-fullscreen',
      ariaLabel: 'Enter Fullscreen',
      title: 'Enter Fullscreen',
      svg: createSVG('enter-fullscreen'),
      on: [
        {
          name: 'click',
          callback: () => {
            enterFullscreen(dataStore.rootElement, dataStore.videoElement)
          }
        }
      ]
    },
    {
      name: 'exit-fullscreen',
      ariaLabel: 'Exit Fullscreen',
      title: 'Exit Fullscreen',
      svg: createSVG('exit-fullscreen'),
      hidden: true,
      on: [
        {
          name: 'click',
          callback: () => {
            exitFullscreen(dataStore.videoElement)
          }
        }
      ]
    }
  ]
}
