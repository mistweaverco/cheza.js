import { prefillDataStore } from './prefillDataStore'
import { getBottomButtonOpts } from './getBottomButtonOpts'

describe('getBottomButtonOpts', () => {
  const video = document.createElement('video')
  const dataStore = prefillDataStore(video)
  it('should match the snapshot', () => {
    expect(getBottomButtonOpts(dataStore)).toMatchSnapshot()
  })
})
