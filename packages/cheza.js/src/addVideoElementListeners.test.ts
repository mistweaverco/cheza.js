import { prefillDataStore } from './prefillDataStore'
import { addVideoElementListeners } from './addVideoElementListeners'
import { createHTML } from './createHTML'
import { videoElementMock } from './videoElementMock'

const video = videoElementMock
const dataStore = prefillDataStore(video)
createHTML(dataStore)
addVideoElementListeners(dataStore)

describe('addVideoElementListeners', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('enter-fullscreen button should be visible by default', () => {
    expect(dataStore.controlsBottom.querySelector('.button-enter-fullscreen')?.classList.contains('hidden')).toBe(false)
  })
  it('exit-fullscreen button should be hidden by default', () => {
    expect(dataStore.controlsBottom.querySelector('.button-exit-fullscreen')?.classList.contains('hidden')).toBe(true)
  })
  it('enter-fullscreen button should be hidden when in fullscreen mode', () => {
    Object.defineProperty(document, 'fullscreenElement', {
      writable: true,
      value: dataStore.rootElement
    })
    document.dispatchEvent(new Event('fullscreenchange'))
    expect(dataStore.controlsBottom.querySelector('.button-enter-fullscreen')?.classList.contains('hidden')).toBe(true)
  })
  it('exit-fullscreen button should be visible when in fullscreen mode', () => {
    Object.defineProperty(document, 'fullscreenElement', {
      writable: true,
      value: dataStore.rootElement
    })
    document.dispatchEvent(new Event('fullscreenchange'))
    expect(dataStore.controlsBottom.querySelector('.button-exit-fullscreen')?.classList.contains('hidden')).toBe(false)
  })
  it('exit-fullscreen button should be hidden when leaving fullscreen mode', () => {
    Object.defineProperty(document, 'fullscreenElement', {
      writable: true,
      value: null
    })
    document.dispatchEvent(new Event('fullscreenchange'))
    expect(dataStore.controlsBottom.querySelector('.button-exit-fullscreen')?.classList.contains('hidden')).toBe(true)
  })
  it('enter-fullscreen button should be visible when leaving fullscreen mode', () => {
    Object.defineProperty(document, 'fullscreenElement', {
      writable: true,
      value: null
    })
    document.dispatchEvent(new Event('fullscreenchange'))
    expect(dataStore.controlsBottom.querySelector('.button-enter-fullscreen')?.classList.contains('hidden')).toBe(false)
  })
  it('loadingSpinner should be visible on waiting', () => {
    video.dispatchEvent(new Event('waiting'))
    expect(dataStore.loadingSpinner.classList.contains('hidden')).toBe(false)
  })
  it('loadingSpinner should be hidden on canplay', () => {
    video.dispatchEvent(new Event('canplay'))
    expect(dataStore.loadingSpinner.classList.contains('hidden')).toBe(true)
  })
  it('loadingSpinner should be hidden on playing', () => {
    video.dispatchEvent(new Event('playing'))
    expect(dataStore.loadingSpinner.classList.contains('hidden')).toBe(true)
  })
  it('progressbar should update accordingly to timeupdate event', () => {
    video.currentTime = 10
    video.dispatchEvent(new Event('timeupdate'))
    expect(dataStore.progress.style.width).toBe('10%')
  })
  it('play button should be visible by default', () => {
    expect(dataStore.controlsBottom.querySelector('.button-play')?.classList.contains('hidden')).toBe(false)
  })
  it('pause button should be hidden by default', () => {
    expect(dataStore.controlsBottom.querySelector('.button-pause')?.classList.contains('hidden')).toBe(true)
  })
  it('play should hide the play button and show the pause button', () => {
    video.dispatchEvent(new Event('play'))
    expect(dataStore.controlsBottom.querySelector('.button-play')?.classList.contains('hidden')).toBe(true)
    expect(dataStore.controlsBottom.querySelector('.button-pause')?.classList.contains('hidden')).toBe(false)
  })
  it('pause should hide the pause button and show the play button', () => {
    video.dispatchEvent(new Event('pause'))
    expect(dataStore.controlsBottom.querySelector('.button-play')?.classList.contains('hidden')).toBe(false)
    expect(dataStore.controlsBottom.querySelector('.button-pause')?.classList.contains('hidden')).toBe(true)
  })
  it('volumechange with muted should hide the volume button and show the muted button', () => {
    video.muted = true
    video.dispatchEvent(new Event('volumechange'))
    expect(dataStore.controlsBottom.querySelector('.button-volume')?.classList.contains('hidden')).toBe(true)
    expect(dataStore.controlsBottom.querySelector('.button-muted')?.classList.contains('hidden')).toBe(false)
  })
  it('volumechange with muted false should hide the mute button and show the volume button', () => {
    video.muted = false
    video.dispatchEvent(new Event('volumechange'))
    expect(dataStore.controlsBottom.querySelector('.button-volume')?.classList.contains('hidden')).toBe(false)
    expect(dataStore.controlsBottom.querySelector('.button-muted')?.classList.contains('hidden')).toBe(true)
  })
  it('clicking on the videoElement should trigger play() when paused', () => {
    const spy = jest.spyOn(video, 'play')
    video.dispatchEvent(new Event('click'))
    expect(spy).toHaveBeenCalledTimes(1)
  })
  it('clicking on the videoElement should trigger pause() when not already paused', () => {
    Object.defineProperty(video, 'paused', {
      writable: true,
      value: false
    })
    const spy = jest.spyOn(video, 'pause')
    video.dispatchEvent(new Event('click'))
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
