import pkg from '../package.json'
import type { ChezaDataStore, ChezaOpts } from '../types'
import { canPlayType } from './canPlayType'
import { ChezaCanPlayTypes } from '../enums'
import { createHTML } from './createHTML'

class Cheza {
  static Version = pkg.version
  private readonly _dataStore: ChezaDataStore
  constructor (videoElement: HTMLVideoElement, opts: ChezaOpts) {
    this._dataStore = {
      videoElement
    }
    createHTML(this._dataStore)
  }

  public static canPlayType = canPlayType
  public static CanPlayTypes = ChezaCanPlayTypes
};

export { Cheza }
