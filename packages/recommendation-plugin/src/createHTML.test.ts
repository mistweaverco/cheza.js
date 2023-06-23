import { createHTML } from './createHTML'
import { prefillDataStore } from './prefillDataStore'

describe('createHTML', () => {
  it('should match the snapshot', () => {
    const dataStore = prefillDataStore()
    dataStore.videoElement = document.createElement('video')
    dataStore.rootElement = document.createElement('div')
    dataStore.defaultUIElement = document.createElement('div')
    createHTML(dataStore)
    expect(dataStore.ui.root).toMatchSnapshot()
  })
})
