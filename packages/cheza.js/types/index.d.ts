type ChezaCanPlayTypes = 'MP4' | 'OGG' | 'WEBM' | 'DASH' | 'HLS'

export interface ChezaDataStore {
  rootElement: HTMLDivElement
  videoElement: HTMLVideoElement
  videoContainer: HTMLDivElement
  progressContainer: HTMLDivElement
  progress: HTMLDivElement
  controlsTop: HTMLDivElement
  controlsBottom: HTMLDivElement
  loadingSpinner: HTMLDivElement
}

declare class Cheza {
  static Version: string
  public static CanPlayTypes: enum
  public static canPlayType: (type: ChezaCanPlayTypes) => boolean
  private readonly _dataStore: ChezaDataStore
  constructor (videoElement: HTMLVideoElement)
}
