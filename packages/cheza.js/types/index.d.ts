type ChezaCanPlayTypes = 'MP4' | 'OGG' | 'WEBM' | 'DASH' | 'HLS'

export interface ConstructedChezaPlugin {
  add: (dataStore: ChezaDataStore, opts?: any) => void
  remove: (dataStore: ChezaDataStore, opts?: any) => void
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
declare class ChezaPlugin {
  public static Name: string
  public static Version: string
  constructor (): ConstructedChezaPlugin
}

export interface ChezaDataStore {
  rootElement: HTMLDivElement
  videoElement: HTMLVideoElement
  videoContainer: HTMLDivElement
  progressContainer: HTMLDivElement
  progress: HTMLDivElement
  controlsTop: HTMLDivElement
  controlsBottom: HTMLDivElement
  loadingSpinner: HTMLDivElement
  activePlugins: Map<string, ConstructedChezaPlugin>
}

declare class Cheza {
  static Version: string
  public static CanPlayTypes: enum
  public static canPlayType: (type: ChezaCanPlayTypes) => boolean
  private readonly _dataStore: ChezaDataStore
  constructor (videoElement: HTMLVideoElement)
}
