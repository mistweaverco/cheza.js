import { type ChezaCanPlayTypes } from './ChezaCanPlayTypes'

export const canPlayType = (type: ChezaCanPlayTypes): boolean => {
  const el = document.createElement('video')
  if (el.canPlayType(type) === 'probably' || el.canPlayType(type) === 'maybe') {
    return true
  } else {
    return false
  }
}
