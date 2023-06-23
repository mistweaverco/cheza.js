const parentElement = document.createElement('div')
const videoElementMock = document.createElement('video')
videoElementMock.removeAttribute('controls')

Object.defineProperty(videoElementMock, 'paused', {
  writable: true,
  value: false
})

Object.defineProperty(videoElementMock, 'duration', {
  writable: true,
  value: 100
})

Object.defineProperty(videoElementMock, 'play', {
  writable: true,
  value: () => {
  }
})

Object.defineProperty(videoElementMock, 'pause', {
  writable: true,
  value: function () {
    this.paused = true
  }
})

parentElement.appendChild(videoElementMock)

export { videoElementMock }
