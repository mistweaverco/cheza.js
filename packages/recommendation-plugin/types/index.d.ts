export interface ChezaRecommendationOpts {
  debug?: boolean
  countdownDuration?: number
  countdownPauseLabel?: string
  nextVideoLabel?: string
  dataTransformer?: (data: ChezaRecommendationDataItem[]) => ChezaRecommendationDataItem[]
  onTileClick: (index: number, tileData: ChezaRecommendationDataItem) => void
  onCountdownOver: (index: number, tileData: ChezaRecommendationDataItem) => void
  onBeforeReplayClick?: () => void
  onCountdownPaused?: () => void
}

export type Timer = ReturnType<typeof setInterval>

export interface ChezaRecommendationDataItem {
  title: string
  image_small: string
  image_medium: string
  image_large: string
  _replayTileBreaker?: boolean
}

export interface ChezaRecommendationDataStore {
  defaultUIElement: HTMLDivElement | undefined
  videoElement: HTMLVideoElement | undefined
  rootElement: HTMLDivElement | undefined
  opts: ChezaIMAOpts
  intervalTicker: Timer | null
  data?: ChezaRecommendationDataItem[]
  ui: {
    root: HTMLDivElement
    content: HTMLDivElement
  }
}
