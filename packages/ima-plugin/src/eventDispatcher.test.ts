import { eventDispatcher } from './eventDispatcher'

describe('eventDispatcher', () => {
  it('dispatches events', () => {
    const videoElement = document.createElement('video')
    const dispatcher = eventDispatcher(videoElement)
    const listener = jest.fn()
    videoElement.addEventListener('cheza:ima:adError', listener)
    dispatcher.dispatch('adError', { message: 'test' })
    const event = new CustomEvent('cheza:ima:adError', { detail: { message: 'test' } })
    expect(listener).toHaveBeenCalledWith(event)
  })
})
