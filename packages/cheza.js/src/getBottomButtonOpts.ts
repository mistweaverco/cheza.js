import type { ChezaDataStore } from '../types'
import type { ChezaButtonOpts } from './createButton'
import { createSVG } from './createSVG'

export const getBottomButtonOpts = (dataStore: ChezaDataStore): ChezaButtonOpts[] => {
  return [
    {
      name: 'play',
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
    },
    {
      name: 'pause',
      ariaLabel: 'Pause',
      title: 'Pause',
      svg: createSVG('pause', {}),
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
      svg: createSVG('volume', {}),
      on: [
        {
          name: 'click',
          callback: () => {
            dataStore.videoElement.volume = 0
          }
        }
      ]
    },
    {
      name: 'muted',
      ariaLabel: 'Unmute',
      title: 'Unmute',
      svg: createSVG('muted', {}),
      hidden: true,
      on: [
        {
          name: 'click',
          callback: () => {
            dataStore.videoElement.volume = 1
          }
        }
      ]
    },
    {
      name: 'enter-fullscreen',
      ariaLabel: 'Enter Fullscreen',
      title: 'Enter Fullscreen',
      svg: createSVG('enter-fullscreen', {}),
      on: [
        {
          name: 'click',
          callback: () => {
            void dataStore.rootElement.requestFullscreen()
          }
        }
      ]
    },
    {
      name: 'exit-fullscreen',
      ariaLabel: 'Exit Fullscreen',
      title: 'Exit Fullscreen',
      svg: createSVG('exit-fullscreen', {}),
      hidden: true,
      on: [
        {
          name: 'click',
          callback: () => {
            // TODO make this work
          }
        }
      ]
    }
  ]
}
