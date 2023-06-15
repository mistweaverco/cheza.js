import type { ChezaDataStore, ChezaOpts } from '../types'
import { canPlayType } from './canPlayType'
import { ChezaCanPlayTypes } from '../enums'

class Cheza {
  private readonly _dataStore: ChezaDataStore
  constructor (videoElement: HTMLVideoElement, opts: ChezaOpts) {
    this._dataStore = {
      videoElement
    }
    console.log('Cheza constructor')
  }

  public static canPlayType = canPlayType
  public static CanPlayTypes = ChezaCanPlayTypes
};

export { Cheza }
