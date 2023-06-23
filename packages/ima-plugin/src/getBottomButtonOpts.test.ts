import { prefillDataStore } from './prefillDataStore'
import { videoElementMock } from './videoElementMock'
import { getBottomButtonOpts, GetBottomButtonOptsDirection } from './getBottomButtonOpts'

type ButtonCallback = (event: Event) => void

const dataStore = prefillDataStore()
dataStore.videoElement = videoElementMock
dataStore.imaVideoElement = videoElementMock
dataStore.rootElement = document.createElement('div')
const video = dataStore.videoElement
const buttonOpts = getBottomButtonOpts(dataStore, GetBottomButtonOptsDirection.LEFT).concat(getBottomButtonOpts(dataStore, GetBottomButtonOptsDirection.RIGHT))

const getButtonCallback = (buttonName: string, eventName: string): ButtonCallback | undefined => {
  const button = buttonOpts.find((button) => button.name === buttonName)
  return button?.on?.find((event) => event.name === eventName)?.callback
}

Object.defineProperty(document, 'exitFullscreen', {
  writable: true,
  value: () => {
  }
})

Object.defineProperty(document, 'fullscreenElement', {
  writable: true,
  value: dataStore.rootElement
})

Object.defineProperty(dataStore.rootElement, 'requestFullscreen', {
  writable: true,
  value: () => {
  }
})

describe('getBottomButtonOpts', () => {
  it('should match the snapshot', () => {
    const all = getBottomButtonOpts(prefillDataStore(), GetBottomButtonOptsDirection.LEFT).concat(getBottomButtonOpts(dataStore, GetBottomButtonOptsDirection.RIGHT))
    expect(all).toMatchSnapshot()
  })

  it('play button should trigger play', () => {
    const cb = getButtonCallback('play', 'click')
    const spy = jest.spyOn(video, 'play')
    cb?.(new Event('click'))
    expect(spy).toHaveBeenCalled()
  })
  it('pause button click should trigger play on the video element', () => {
    const cb = getButtonCallback('pause', 'click')
    const spy = jest.spyOn(video, 'play')
    cb?.(new Event('click'))
    expect(spy).toHaveBeenCalled()
  })
  it('volume button click should trigger muted on the video element', () => {
    const cb = getButtonCallback('volume', 'click')
    cb?.(new Event('click'))
    expect(video.muted).toBe(true)
  })
  it('unmute button click should trigger unmute on the video element', () => {
    const cb = getButtonCallback('muted', 'click')
    cb?.(new Event('click'))
    expect(video.muted).toBe(false)
  })
  it('enter-fullscreen button click should trigger fullscreen on the root element', () => {
    const cb = getButtonCallback('enter-fullscreen', 'click')
    const spy = jest.spyOn(dataStore.rootElement as HTMLDivElement, 'requestFullscreen')
    cb?.(new Event('click'))
    expect(spy).toHaveBeenCalled()
  })
  it('exit-fullscreen button click should trigger leave fullscreen', () => {
    const cb = getButtonCallback('exit-fullscreen', 'click')
    const spy = jest.spyOn(document, 'exitFullscreen')
    cb?.(new Event('click'))
    expect(spy).toHaveBeenCalled()
  })
})
