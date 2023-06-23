import { Cheza } from '@mistweaverco/cheza.js'
import '@mistweaverco/cheza.js/dist/style.css'
import { asyncImport } from './asyncImport'
import { ChezaRecommendationPlugin } from './plugin'
import type { ChezaRecommendationDataItem } from '../types'

interface RecommendationData extends ChezaRecommendationDataItem {
  endpoint: string
  playlists: string[]
}

Cheza.registerPlugin(ChezaRecommendationPlugin)

const video = document.querySelector('video') ?? document.createElement('video')
const cheza = new Cheza(video)
const canPlayHlsNatively = Cheza.canPlayType(Cheza.CanPlayTypes.HLS)
const rootAPIPrefix = 'https://www.t-online.de'

const setSrcAndPlay = (src: string, HlsJs: any): void => {
  if (canPlayHlsNatively) {
    video.src = src
    void video.play()
  } else {
    const hls = new HlsJs()
    hls.loadSource(src)
    hls.attachMedia(video)
    hls.on(HlsJs.Events.MANIFEST_PARSED, () => {
      void video.play()
    })
  }
}

void (async () => {
  let HlsJsClass: any
  if (!canPlayHlsNatively) {
    console.info('📼', 'No native HLS support, loading hls.js')
    const { HlsJs } = await asyncImport('./hlsjs')
    if (HlsJs.isSupported() === false) {
      console.error('📼', 'No hls.js support .. exiting')
      return
    }
    HlsJsClass = HlsJs
  }
  cheza.addPlugin(ChezaRecommendationPlugin.Name, {
    debug: true,
    nextVideoLabel: 'Nächstes Video',
    countdownPauseLabel: 'anhalten',
    countdownDuration: 10,
    onTileClick: (index: number, tileData: RecommendationData) => {
      console.log('onTileClick', index, tileData)
      video.dataset.recommendationDataUrl = rootAPIPrefix + tileData.endpoint
      video.setAttribute('poster', tileData.image_large)
      setSrcAndPlay(tileData.playlists[0], HlsJsClass)
    },
    onCountdownOver: (tileData: RecommendationData) => {
      video.dataset.recommendationDataUrl = rootAPIPrefix + tileData.endpoint
      video.setAttribute('poster', tileData.image_large)
      setSrcAndPlay(tileData.playlists[0], HlsJsClass)
    },
    onBeforeReplayClick: () => {
      console.log('onBeforeReplayClick')
    }
  })
})()
export { Cheza, ChezaRecommendationPlugin }
