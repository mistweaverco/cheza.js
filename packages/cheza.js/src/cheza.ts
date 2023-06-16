import pkg from '../package.json'
import type { ChezaDataStore } from '../types'
import { canPlayType } from './canPlayType'
import { ChezaCanPlayTypes } from '../enums'
import { createHTML } from './createHTML'
import { prefillDataStore } from './prefillDataStore'

class Cheza {
  static Version = pkg.version
  private readonly _dataStore: ChezaDataStore

  constructor (videoElement: HTMLVideoElement) {
    this._dataStore = prefillDataStore(videoElement)
    videoElement.removeAttribute('controls')
    createHTML(this._dataStore)
  }

  public static canPlayType = canPlayType
  public static CanPlayTypes = ChezaCanPlayTypes
};

export { Cheza }
