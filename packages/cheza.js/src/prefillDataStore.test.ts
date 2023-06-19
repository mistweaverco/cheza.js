import type { ChezaDataStore } from '../types'
import { prefillDataStore } from './prefillDataStore'

describe('prefillDataStore', () => {
  const video = document.createElement('video')
  const dataStore: ChezaDataStore = {
    videoElement: video,
    uiRoot: document.createElement('div'),
    progress: document.createElement('div'),
    controlsTop: document.createElement('div'),
    rootElement: document.createElement('div'),
    controlsBottom: document.createElement('div'),
    loadingSpinner: document.createElement('div'),
    progressContainer: document.createElement('div'),
    activePlugins: new Map()
  }
  const dataStorePrefilled = prefillDataStore(video)

  it('should return the dataStore if no keys are provided', () => {
    expect(dataStore).toEqual(dataStorePrefilled)
  })
})
