declare global {
  interface Document {
    mozCancelFullScreen?: () => Promise<void>
    msExitFullscreen?: () => void
    webkitExitFullscreen?: () => void
    mozFullScreenElement?: Element
    msFullscreenElement?: Element
    webkitFullscreenElement?: Element
  }

  interface HTMLElement {
    requestFullscreen?: () => Promise<void>
    msRequestFullscreen?: () => Promise<void>
    mozRequestFullScreen?: () => Promise<void>
    webkitRequestFullscreen?: () => Promise<void>
    webkitEnterFullscreen?: () => Promise<void>
  }

  interface HTMLVideoElement {
    requestFullscreen?: () => Promise<void>
    msRequestFullscreen?: () => Promise<void>
    mozRequestFullScreen?: () => Promise<void>
    webkitEnterFullscreen?: () => Promise<void>
    webkitRequestFullscreen?: () => Promise<void>
    webkitExitFullscreen?: () => Promise<void>
  }
}

export const enterFullscreen = (el: HTMLElement, video: HTMLVideoElement): void => {
  const rm1 = el.requestFullscreen ??
    el.webkitRequestFullscreen ??
    el.webkitEnterFullscreen ??
    el.mozRequestFullScreen ??
    el.msRequestFullscreen ??
    null
  const rm2 = video.requestFullscreen ??
    video.webkitRequestFullscreen ??
    video.webkitEnterFullscreen ??
    video.requestFullscreen ??
    video.mozRequestFullScreen ??
    video.msRequestFullscreen ??
    null

  if (rm1 !== null) {
    void rm1.apply(el)
  } else if (rm2 !== null) {
    void rm2.apply(video)
  }
}

export const exitFullscreen = (video: HTMLVideoElement): void => {
  const doc = document
  const rm1 = doc.exitFullscreen ??
    doc.webkitExitFullscreen ??
    doc.mozCancelFullScreen ??
    doc.msExitFullscreen ??
    null
  const rm2 = video.webkitExitFullscreen ?? null

  if (rm1 !== null) {
    void rm1.apply(doc)
  } else if (rm2 !== null) {
    void rm2.apply(video)
  }
}
