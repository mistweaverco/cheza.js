import type { ChezaRecommendationDataStore } from '../types'

export const createHTML = (dataStore: ChezaRecommendationDataStore): void => {
  const defaultUIElement = dataStore.defaultUIElement as HTMLDivElement
  const uiRoot = dataStore.ui.root
  uiRoot.classList.add('recommendation-ui', 'hidden')
  defaultUIElement.after(uiRoot)
  dataStore.ui.content.classList.add('content')
  uiRoot.appendChild(dataStore.ui.content)
}
