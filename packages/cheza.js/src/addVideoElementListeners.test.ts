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
  it('volumechange to 0 should hide the volume button and show the muted button', () => {
    video.volume = 0
    video.dispatchEvent(new Event('volumechange'))
    expect(dataStore.controlsBottom.querySelector('.button-volume')?.classList.contains('hidden')).toBe(true)
    expect(dataStore.controlsBottom.querySelector('.button-muted')?.classList.contains('hidden')).toBe(false)
  })
  it('volumechange to 1 should hide the mute button and show the volume button', () => {
    video.volume = 1
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
