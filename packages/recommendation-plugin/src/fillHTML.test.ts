import { fillData } from './fillHTML'
import { prefillDataStore } from './prefillDataStore'
import { createHTML } from './createHTML'
import data from '../__mocks__/data.json'

const dataStore = prefillDataStore()
dataStore.videoElement = document.createElement('video')
dataStore.rootElement = document.createElement('div')
dataStore.defaultUIElement = document.createElement('div')
createHTML(dataStore)
dataStore.data = data

describe('fillData', () => {
  it('should fill the HTML with the data from mocks and match the snapshot', () => {
    fillData(dataStore)
    expect(dataStore.ui.content.innerHTML).toMatchSnapshot()
  })
})
