import type { ChezaRecommendationPlugin } from './plugin'
import type { ChezaRecommendationDataItem, ChezaRecommendationDataStore } from '../types'
export const addEventListeners = (dataStore: ChezaRecommendationDataStore, plugin: ChezaRecommendationPlugin): void => {
  const videoElement = dataStore.videoElement as HTMLVideoElement
  const replayTile = dataStore.ui.content.querySelector('.recommendation-plugin-tile-replay') as HTMLDivElement
  const countdownPauseButton = dataStore.ui.content.querySelector('.recommendation-plugin-button-pause') as HTMLButtonElement

  countdownPauseButton.addEventListener('click', (evt) => {
    evt.stopPropagation()
    countdownPauseButton.classList.add('hidden')
    plugin.clearRevolverplayTimer()
    dataStore.opts.onCountdownPaused?.()
  })

  replayTile.addEventListener('click', () => {
    dataStore.opts.onBeforeReplayClick?.()
    plugin.reset()
    void videoElement.play()
  })

  dataStore.ui.content.querySelectorAll('.recommendation-plugin-tile').forEach((item, index) => {
    item.addEventListener('click', () => {
      const data = dataStore.data as ChezaRecommendationDataItem[]
      const tileData = data[index]
      dataStore.opts.onTileClick?.(index, tileData)
      plugin.reset()
    })
  })

  videoElement.addEventListener('ended', () => {
    dataStore.ui.root.classList.remove('hidden')
    plugin.startRevolverplayCountdown()
  })
}
