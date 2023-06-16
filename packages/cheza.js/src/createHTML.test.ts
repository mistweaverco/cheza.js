import { prefillDataStore } from './prefillDataStore'
import { createHTML } from './createHTML'
import { videoElementMock } from './videoElementMock'

const video = videoElementMock
const dataStore = prefillDataStore(video)
createHTML(dataStore)

describe('createHTML', () => {
  it('the html should match the snapshot', () => {
    expect(dataStore.rootElement).toMatchSnapshot()
  })
  it('clicking on the progress-container should update the progress bar width', () => {
    const progressContainer = dataStore.progressContainer
    Object.defineProperty(progressContainer, 'offsetWidth', { value: 100 })
    const progress = dataStore.progress
    const event = new MouseEvent('click')
    Object.defineProperty(event, 'offsetX', { value: 10 })
    progressContainer.dispatchEvent(event)
    expect(progress.style.width).toBe('10%')
  })
})
