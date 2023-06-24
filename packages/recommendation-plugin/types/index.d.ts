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

export declare class ChezaRecommendationPlugin {
  static Version: string
  static Name: string
  static Opts: ChezaRecommendationOpts
  public google: typeof google | undefined
  constructor ()
  private readonly _dataStore: ChezaRecommendationDataStore
  private readonly _chezaDataStore: ChezaDataStore | undefined
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
