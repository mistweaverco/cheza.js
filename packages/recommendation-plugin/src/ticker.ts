const getCircleProgress = (value: number): number => {
  const radius = 30.667 // this is radius value of svg circle
  const circumference = 2 * Math.PI * radius
  const p = value / 100
  const dashOffset = circumference * (1 - p)
  return dashOffset
}

const updateCircleStyle = (el: HTMLElement, value: number): void => {
  el.style.strokeDashoffset = String(value)
}

export const ticker = (time: number, remainingTime: number, el: HTMLElement): void => {
  const value = ((time - remainingTime) / time) * 100
  updateCircleStyle(el, getCircleProgress(value))
}
