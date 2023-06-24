import { Cheza } from '@mistweaverco/cheza.js'
import '@mistweaverco/cheza.js/dist/style.css'
import { ChezaRecommendationPlugin } from './plugin'
import type { ChezaRecommendationDataItem } from '../types'

interface RecommendationData extends ChezaRecommendationDataItem {
  endpoint: string
  src: string
}

Cheza.registerPlugin(ChezaRecommendationPlugin)

const video = document.querySelector('video') ?? document.createElement('video')
const cheza = new Cheza(video)

const setSrcAndPlay = (src: string): void => {
  video.src = src
  void video.play()
}

cheza.addPlugin(ChezaRecommendationPlugin.Name, {
  debug: true,
  nextVideoLabel: 'Nächstes Video',
  countdownPauseLabel: 'anhalten',
  countdownDuration: 10,
  onTileClick: (index: number, tileData: RecommendationData) => {
    console.log('onTileClick', index, tileData)
    video.dataset.recommendationDataUrl = tileData.endpoint
    video.setAttribute('poster', tileData.image_large)
    setSrcAndPlay(tileData.src)
  },
  onCountdownOver: (tileData: RecommendationData) => {
    video.dataset.recommendationDataUrl = tileData.endpoint
    video.setAttribute('poster', tileData.image_large)
    setSrcAndPlay(tileData.src)
  },
  onBeforeReplayClick: () => {
    console.log('onBeforeReplayClick')
  }
})

export { Cheza, ChezaRecommendationPlugin }
