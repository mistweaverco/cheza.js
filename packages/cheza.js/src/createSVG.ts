interface ChezaSVGOpts {
  svgAttributes?: string[][]
  useAttributes?: string[][]
}

export const createSVG = (type: string, opts: ChezaSVGOpts): SVGElement => {
  opts = opts ?? {}
  opts.svgAttributes = opts.svgAttributes ?? []
  opts.svgAttributes.push(['role', 'presentation'])
  opts.svgAttributes.push(['focusable', 'false'])

  const namespace = 'http://www.w3.org/2000/svg'
  const iconPrefix = 'cheza-'
  const iconPath = '#' + iconPrefix
  const icon = document.createElementNS(namespace, 'svg')

  opts.svgAttributes.forEach((attr: string[]) => {
    icon.setAttribute(attr[0], attr[1])
  })

  const use = document.createElementNS(namespace, 'use')
  const path = iconPath + type

  if ('href' in use) {
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path)
  }
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (opts.useAttributes?.length) {
    opts.useAttributes.forEach((attr: string[]) => {
      use.setAttribute(attr[0], attr[1])
    })
  }

  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', path)

  icon.appendChild(use)

  return icon
}
