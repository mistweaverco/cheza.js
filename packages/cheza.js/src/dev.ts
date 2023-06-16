import { Cheza } from './cheza'
import { asyncImport } from './asyncImport'
import '@mistweaverco/cheza-default-ui-styles/dist/styles.css'

const video = document.querySelector('video') ?? document.createElement('video')
const hlsUrl = video?.getAttribute('data-hls-url') ?? ''
const dashUrl = video?.getAttribute('data-dash-url') ?? ''

void new Cheza(video)

void (async () => {
  if (!Cheza.canPlayType(Cheza.CanPlayTypes.DASH)) {
    console.info('📼', 'No native DASH support, loading dash.js')
    const { dashjs } = await asyncImport('./dashjs')
    if (dashjs.supportsMediaSource() === false) {
      console.info('📼', 'No dash.js support')
      if (!Cheza.canPlayType(Cheza.CanPlayTypes.HLS)) {
        console.info('📼', 'No native HLS support, loading hls.js')
        const { HlsJs } = await asyncImport('./hlsjs')
        if (HlsJs.isSupported() === false) {
          console.error('📼', 'No hls.js support, fallback to mp4')
        } else {
          const hls = new HlsJs()
          hls.loadSource(hlsUrl)
          hls.attachMedia(video)
        }
      } else {
        // native hls support
        video.src = hlsUrl
      }
    } else {
      dashjs.MediaPlayer().create().initialize(video, dashUrl, false)
    }
  } else {
    // native dash support
    video.src = dashUrl
  }
})()

export { Cheza }
