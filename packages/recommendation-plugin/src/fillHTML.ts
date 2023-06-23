import type { ChezaRecommendationDataItem, ChezaRecommendationDataStore } from '../types'
import Handlebars from 'handlebars'
import templateString from '../templates/index.hbs?raw'

export const fillData = (dataStore: ChezaRecommendationDataStore): void => {
  const template = Handlebars.compile(templateString)
  let data = dataStore.data as ChezaRecommendationDataItem[]
  const video = dataStore.videoElement as HTMLVideoElement
  const posterImageURL = video.getAttribute('poster') as string
  data = data.slice(0, 5)
  data.forEach((item, index) => {
    if (index === 3) {
      item._replayTileBreaker = true
    }
  })
  dataStore.ui.content.innerHTML = template({
    data,
    posterImageURL
  })
}
