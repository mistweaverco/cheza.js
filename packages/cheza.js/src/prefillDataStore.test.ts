import type { ChezaDataStore } from '../types'
import { prefillDataStore } from './prefillDataStore'

describe('prefillDataStore', () => {
  const video = document.createElement('video')
  const dataStore: ChezaDataStore = {
    videoElement: video,
    progress: document.createElement('div'),
    controlsTop: document.createElement('div'),
    rootElement: document.createElement('div'),
    controlsBottom: document.createElement('div'),
    loadingSpinner: document.createElement('div'),
    videoContainer: document.createElement('div'),
    progressContainer: document.createElement('div')
  }
  const dataStorePrefilled = prefillDataStore(video)

  it('should return the dataStore if no keys are provided', () => {
    expect(dataStore).toEqual(dataStorePrefilled)
  })
})
