import { canPlayType } from './canPlayType'
import { ChezaCanPlayTypes } from './ChezaCanPlayTypes'

describe('canPlayType', () => {
  it('should return true for probably', () => {
    Object.defineProperty(HTMLMediaElement.prototype, 'canPlayType', {
      writable: true,
      value: () => 'probably'
    })
    expect(canPlayType(ChezaCanPlayTypes.MP4)).toBe(true)
  })
  it('should return true for maybe', () => {
    Object.defineProperty(HTMLMediaElement.prototype, 'canPlayType', {
      writable: true,
      value: () => 'maybe'
    })
    expect(canPlayType(ChezaCanPlayTypes.MP4)).toBe(true)
  })
  it('should return false for never', () => {
    Object.defineProperty(HTMLMediaElement.prototype, 'canPlayType', {
      writable: true,
      value: () => 'never'
    })
    expect(canPlayType(ChezaCanPlayTypes.MP4)).toBe(false)
  })
})
