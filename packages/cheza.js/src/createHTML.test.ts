import { prefillDataStore } from './prefillDataStore'
import { createHTML } from './createHTML'

describe('createHTML', () => {
  const video = document.createElement('video')
  const dataStore = prefillDataStore(video)

  it('the html should match the snapshot', () => {
    expect(createHTML(dataStore)).toMatchSnapshot()
  })
})
