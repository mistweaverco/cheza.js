import { Cheza } from '@mistweaverco/cheza.js'
import '@mistweaverco/cheza.js/dist/style.css'
import { ChezaIMAPlugin } from './plugin'

Cheza.registerPlugin(ChezaIMAPlugin)

const video = document.querySelector('video') ?? document.createElement('video')
const cheza = new Cheza(video)

const pluginOpts: typeof ChezaIMAPlugin.Opts = {
  locale: 'de',
  maxRedirects: 10,
  loadVideoTimeout: -1,
  adLabelTime: 'Werbung endet in {{secondsRemaining}} Sekunden',
  adLabelNTime: 'Werbung {{adPosition}} von {{totalAds}} endet in {{secondsRemaining}}s'
}

cheza.addPlugin(ChezaIMAPlugin.Name, pluginOpts)

export { Cheza, ChezaIMAPlugin }
