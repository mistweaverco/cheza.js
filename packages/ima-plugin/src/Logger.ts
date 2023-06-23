export interface SimpleLogger {
  log: (...args: any) => void
  warn: (...args: any) => void
  error: (...args: any) => void
}

export const Logger = (debug?: boolean): SimpleLogger => {
  if (debug !== true) {
    return {
      log: () => {},
      warn: () => {},
      error: () => {}
    }
  }

  const log = (...args: any): void => {
    console.log(args)
  }
  const warn = (...args: any): void => {
    console.warn(args)
  }

  const error = (...args: any): void => {
    console.error(args)
  }

  return {
    log,
    warn,
    error
  }
}
