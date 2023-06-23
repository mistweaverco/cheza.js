interface EventDispatcher {
  dispatch: (type: string, data?: any) => void
}
export const eventDispatcher = (videoElement: HTMLVideoElement): EventDispatcher => {
  return {
    dispatch: (type: string, data?: any): void => {
      let detail: undefined | { detail: any }
      if (data !== undefined) {
        detail = { detail: data }
      }
      const event = new CustomEvent(`cheza:ima:${type}`, detail)
      videoElement.dispatchEvent(event)
    }
  }
}
