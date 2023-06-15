import type { ChezaDataStore, ChezaOpts } from "../types";
import { canPlayType } from "./canPlayType";

class Cheza {
  private _dataStore: ChezaDataStore;
  constructor(videoElement: HTMLVideoElement, opts: ChezaOpts) {
    this._dataStore = {
      videoElement,
    }
    console.log("Cheza constructor");
  }
  public static canPlayType = canPlayType;
};

export { Cheza };

