export const createSVG = (type: string): SVGElement => {
  const svgAttributes = []
  svgAttributes.push(['role', 'presentation'])
  svgAttributes.push(['focusable', 'false'])

  const namespace = 'http://www.w3.org/2000/svg'
  const iconPrefix = 'cheza-'
  const iconPath = '#' + iconPrefix
  const icon = document.createElementNS(namespace, 'svg')

  svgAttributes.forEach((attr: string[]) => {
    icon.setAttribute(attr[0], attr[1])
  })

  const use = document.createElementNS(namespace, 'use')
  const path = iconPath + type

  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', path)

  icon.appendChild(use)

  return icon
}
