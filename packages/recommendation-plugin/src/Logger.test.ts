import { Logger } from './Logger'

const consoleLogMock = jest.spyOn(console, 'log').mockImplementation()
const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation()
const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation()

describe('Logger', () => {
  afterEach(() => {
    consoleLogMock.mockClear()
    consoleWarnMock.mockClear()
    consoleErrorMock.mockClear()
  })
  it('should log exit early if no debug mode is set', () => {
    const logger = Logger(undefined)
    logger.log('a message')
    expect(consoleLogMock).toBeCalledTimes(0)
  })
  it('should warn exit early if no debug mode is set', () => {
    const logger = Logger(undefined)
    logger.warn('a warning')
    expect(consoleWarnMock).toBeCalledTimes(0)
  })
  it('should error exit early if no debug mode is set', () => {
    const logger = Logger(undefined)
    logger.error('an error message')
    expect(consoleLogMock).toBeCalledTimes(0)
  })
  it('should log a message', () => {
    const logger = Logger(true)
    logger.log('a message')
    expect(consoleLogMock).toBeCalledTimes(1)
  })
  it('should warn a warning', () => {
    const logger = Logger(true)
    logger.warn('a warning')
    expect(consoleWarnMock).toBeCalledTimes(1)
  })
  it('should error an error-message', () => {
    const logger = Logger(true)
    logger.error('an error message')
    expect(consoleErrorMock).toBeCalledTimes(1)
  })
})
