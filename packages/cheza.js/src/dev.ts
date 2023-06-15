import { Cheza } from './cheza'
import { asyncImport } from './asyncImport'
import '@mistweaverco/cheza-default-ui-styles/dist/styles.css'

const video = document.querySelector('video') ?? document.createElement('video')
const hlsUrl = video?.getAttribute('data-hls-url') ?? ''
const dashUrl = video?.getAttribute('data-dash-url') ?? ''

void new Cheza(video, {})

if (!Cheza.canPlayType(Cheza.CanPlayTypes.DASH)) {
  console.info('📼', 'No native DASH support, loading dash.js')
  void asyncImport('./dashjs').then((DashJSModule: any) => {
    const DashJS = DashJSModule.default
    if (DashJS.supportsMediaSource() === false) {
      console.info('📼', 'No dash.js support')
      if (!Cheza.canPlayType(Cheza.CanPlayTypes.HLS)) {
        console.info('📼', 'No native HLS support, loading hls.js')
        void asyncImport('./hlsjs').then((HlsJsModule: any) => {
          const HlsJs = HlsJsModule.default
          if (HlsJs.isSupported() === false) {
            console.error('📼', 'No hls.js support, fallback to mp4')
          } else {
            const hls = new HlsJs()
            hls.loadSource(hlsUrl)
            hls.attachMedia(video)
          }
        })
      } else {
        // native hls support
        video.src = hlsUrl
      }
    } else {
      DashJS.MediaPlayer().create().initialize(video, dashUrl, false)
    }
  })
} else {
  // native dash support
  video.src = dashUrl
}

export { Cheza }
