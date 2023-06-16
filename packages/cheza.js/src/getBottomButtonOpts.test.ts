import { prefillDataStore } from './prefillDataStore'
import { getBottomButtonOpts } from './getBottomButtonOpts'
import { videoElementMock } from './videoElementMock'

const video = videoElementMock
const dataStore = prefillDataStore(video)
const buttonOpts = getBottomButtonOpts(dataStore)

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

type ButtonCallback = (event: Event) => void

const getButtonCallback = (buttonName: string, eventName: string): ButtonCallback | undefined => {
  const button = buttonOpts.find((button) => button.name === buttonName)
  return button?.on?.find((event) => event.name === eventName)?.callback
}

describe('getBottomButtonOpts', () => {
  it('should match the snapshot', () => {
    expect(buttonOpts).toMatchSnapshot()
  })
  it('play button click should trigger play on the video element', () => {
    const cb = getButtonCallback('play', 'click')
    const spy = jest.spyOn(dataStore.videoElement, 'play')
    cb?.(new Event('click'))
    expect(spy).toHaveBeenCalled()
  })
  it('pause button click should trigger play on the video element', () => {
    const cb = getButtonCallback('pause', 'click')
    const spy = jest.spyOn(dataStore.videoElement, 'play')
    cb?.(new Event('click'))
    expect(spy).toHaveBeenCalled()
  })
  it('volume button click should trigger muted on the video element', () => {
    const cb = getButtonCallback('volume', 'click')
    cb?.(new Event('click'))
    expect(dataStore.videoElement.volume).toBe(0)
  })
  it('unmute button click should trigger unmute on the video element', () => {
    const cb = getButtonCallback('muted', 'click')
    cb?.(new Event('click'))
    expect(dataStore.videoElement.volume).toBe(1)
  })
  it('enter-fullscreen button click should trigger fullscreen on the root element', () => {
    const cb = getButtonCallback('enter-fullscreen', 'click')
    const spy = jest.spyOn(dataStore.rootElement, 'requestFullscreen')
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
