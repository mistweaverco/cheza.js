import { Cheza } from '@mistweaverco/cheza.js'
import { ChezaIMAPlugin } from './plugin'
import '@mistweaverco/cheza.js-default-ui-styles/dist/styles.css'

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
