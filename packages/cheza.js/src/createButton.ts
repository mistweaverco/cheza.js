interface ChezaButtonEvent {
  name: string
  callback: (event: Event) => void
}

export interface ChezaButtonOpts {
  name: string
  ariaLabel: string
  title: string
  svg: SVGElement
  disabled?: boolean
  hidden?: boolean
  on?: ChezaButtonEvent[]
}

export const createButton = (opts: ChezaButtonOpts): HTMLButtonElement => {
  const buttonElement = document.createElement('button')
  buttonElement.classList.add('button', 'button-' + opts.name)
  buttonElement.setAttribute('aria-label', opts.ariaLabel)
  buttonElement.setAttribute('title', opts.title)
  buttonElement.setAttribute('type', 'button')
  buttonElement.appendChild(opts.svg)
  if (opts.disabled !== undefined && opts.disabled) {
    buttonElement.setAttribute('disabled', 'disabled')
  }
  if (opts.on !== undefined && opts.on.length > 0) {
    opts.on.forEach((event) => {
      buttonElement.addEventListener(event.name, event.callback)
    })
  }
  if (opts.hidden !== undefined && opts.hidden) {
    buttonElement.classList.add('button-hide')
  }
  return buttonElement
}
