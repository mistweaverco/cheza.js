## Example with on-demand support for DASH and HLS

Install node packages via `npm`

```sh
npm i @mistweaverco/cheza.js hls.js dashjs
```

or `yarn`

```sh
yarn add @mistweaverco/cheza.js hls.js dashjs typescript
```

`index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>cheza.js</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      background-color: #1ffe87;
    }
  </style>
</head>
<body>
  <video id="video" crossorigin controls playsinline preload="none"
    poster="https://mwcdn.co/demo-videos/View_From_A_Blue_Moon_Trailer-HD.jpg"
    data-hls-url="https://mwcdn.co/demo-videos/View_From_A_Blue_Moon_Trailer_HLS/video.m3u8"
    data-dash-url="https://mwcdn.co/demo-videos/cmaf/View_From_A_Blue_Moon_Trailer.mpd"
  >
    <source src="https://mwcdn.co/demo-videos/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" />
  </video>
  <script src="app.js"></script>
</body>
</html>
```

`asyncImport.ts`

```typescript
export async function asyncImport (moduleName: string): Promise<any> {
  return await import(moduleName)
}
```

`dashjs.ts`

```typescript
import dashjs from 'dashjs'
export { dashjs }
```

`hlsjs.ts`

```ts
import HlsJs from 'hls.js'
export { HlsJs }
```

`app.ts`

```typescript
import { Cheza } from '@mistweaverco/cheza.js'
import { asyncImport } from './asyncImport'
import '@mistweaverco/cheza.js/dist/style.css'

const video = document.querySelector('video') as HTMLVideoElement
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
```
