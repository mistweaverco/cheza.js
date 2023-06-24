import type { google } from './ima'

export interface ChezaIIMAOptsOmidVendorAccess {
  vendorKey: string
  verificationParameters: string
}

export type Timer = ReturnType<typeof setTimeout>

export interface ChezaIMAOpts {
  debug?: boolean
  maxRedirects?: number
  locale?: string
  ppid?: string
  loadVideoTimeout?: number
  omidAccessModeRules?: google.ima.OmidAccessModeRules
  adLabelTime?: string
  adLabelNTime?: string
  adLabel?: string
}

export declare class ChezaIMAPlugin {
  public static Version: string
  public static Name: string
  public static Opts: ChezaIMAOpts
  public google: typeof google | undefined
  constructor ()
  private readonly _dataStore: ChezaIMADataStore
  private readonly _chezaDataStore: ChezaDataStore | undefined
}

export interface ChezaIMADataStore {
  defaultUIElement: HTMLDivElement | undefined
  videoElement: HTMLVideoElement | undefined
  imaVideoElement: HTMLVideoElement | undefined
  totalAds: number
  adPosition: number
  adsManager: google.ima.AdsManager | undefined
  adsLoader: google.ima.AdsLoader | undefined
  adDisplayContainer: google.ima.AdDisplayContainer | undefined
  rootElement: HTMLDivElement | undefined
  adsInitialized: boolean
  google: typeof google | undefined
  adsLoaded: boolean
  opts?: ChezaIMAOpts
  ui: {
    root: HTMLDivElement
    overlay: HTMLDivElement
    adContainer: HTMLDivElement
    loadingSpinner: HTMLDivElement
    controlsTop: HTMLDivElement
    controlsBottom: HTMLDivElement
  }
}

export {
  google
}
