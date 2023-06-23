import { createButton } from './createButton'
import { createSVG } from './createSVG'

describe('createButton', () => {
  it('should have a disabled attribute attached', () => {
    const btn = createButton({
      name: 'play',
      ariaLabel: 'Play',
      title: 'Play',
      svg: createSVG('play'),
      disabled: true
    })
    expect(btn.getAttribute('disabled')).toBe('disabled')
  })
})
