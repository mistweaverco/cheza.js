import { enterFullscreen, exitFullscreen } from './fullscreenUtils'

describe('fullscreenUtils', () => {
  it('should request fullscreen on video via requestFullscreen', () => {
    const el = document.createElement('div')
    const video = document.createElement('video')
    video.requestFullscreen = jest.fn()
    const spy = jest.spyOn(video, 'requestFullscreen')
    enterFullscreen(el, video)
    expect(spy).toHaveBeenCalled()
  })
  it('should exit fullscreen on video via webkitExitFullscreen', () => {
    const video = document.createElement('video')
    video.webkitExitFullscreen = jest.fn()
    const spy = jest.spyOn(video, 'webkitExitFullscreen')
    exitFullscreen(video)
    expect(spy).toHaveBeenCalled()
  })
})
