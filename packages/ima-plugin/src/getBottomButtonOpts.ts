import type { ChezaIMADataStore, google } from '../types'
import type { ChezaButtonOpts } from './createButton'
import { createSVG } from './createSVG'
import { enterFullscreen, exitFullscreen } from './fullscreenUtils'

interface AllButtonOpts {
  left: ChezaButtonOpts[]
  right: ChezaButtonOpts[]
}

export enum GetBottomButtonOptsDirection {
  LEFT = 'left',
  RIGHT = 'right'
}

export const getBottomButtonOpts = (dataStore: ChezaIMADataStore, direction: GetBottomButtonOptsDirection): ChezaButtonOpts[] => {
  const all: AllButtonOpts = {
    left: [],
    right: []
  }
  all.left = [
    {
      name: 'play',
      ariaLabel: 'Play',
      title: 'Play',
      svg: createSVG('play'),
      on: [
        {
          name: 'click',
          callback: () => {
            const am = dataStore.adsManager as google.ima.AdsManager
            am.resume()
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
            const am = dataStore.adsManager as google.ima.AdsManager
            am.pause()
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
            const am = dataStore.adsManager as google.ima.AdsManager
            am.setVolume(0)
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
            const am = dataStore.adsManager as google.ima.AdsManager
            am.setVolume(1)
          }
        }
      ]
    }
  ]
  all.right = [
    {
      name: 'enter-fullscreen',
      ariaLabel: 'Enter Fullscreen',
      title: 'Enter Fullscreen',
      svg: createSVG('enter-fullscreen'),
      on: [
        {
          name: 'click',
          callback: () => {
            enterFullscreen(dataStore.rootElement as HTMLElement, dataStore.imaVideoElement as HTMLVideoElement)
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
            exitFullscreen(dataStore.imaVideoElement as HTMLVideoElement)
          }
        }
      ]
    }
  ]
  return all[direction]
}
