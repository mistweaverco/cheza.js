# cheza.js

[![codecov](https://codecov.io/github/mistweaverco/cheza.js/branch/main/graph/badge.svg?token=FIU6JNUCK4)](https://codecov.io/github/mistweaverco/cheza.js)
[![build](https://github.com/mistweaverco/cheza.js/actions/workflows/build.yml/badge.svg)](https://github.com/mistweaverco/cheza.js/actions?query=workflow%3ABuild)
[![lint](https://github.com/mistweaverco/cheza.js/actions/workflows/lint.yml/badge.svg)](https://github.com/mistweaverco/cheza.js/actions?query=workflow%3ALint)


Customizable 📦, extensible ⚡ and small **(4kb)** HTML5 Videoplayer 📼.

Cheza is [swahili][cheza-swahili] and means **play**.

## Core features

 - Easily skinnable
 - Support for [DASH][dash] via [dash.js][dashjs] ([example][dashjs-example])
 - Support for [HLS][hls] via [hls.js][hlsjs] ([example][hlsjs-example])
 - Support for [subtitles and captions][subtitles-captions]
 - Support for [Google IMA][google-ima] via [ima plugin](packages/ima-plugin)
 - Support for video-recommendations via [recommendation plugin](packages/recommendation-plugin)
 - Support for seek preview via thumbnails or sprites.

## Example usage

### Simple HTML+JS example

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
  <video id="video" controls playsinline preload="none"
    poster="https://mwcdn.co/demo-videos/View_From_A_Blue_Moon_Trailer-HD.jpg"
  >
    <source src="https://mwcdn.co/demo-videos/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" />
  </video>
  <script src="https://unpkg.com/@mistweaverco/cheza.js@latest/dist/cheza.umd.js"></script>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@mistweaverco/cheza.js@latest/dist/style.css" />
  <script>
    new Cheza.Cheza(document.querySelector('video'))
  </script>
</body>
</html>
```

### Simple node example

Install node packages via `npm`

```sh
npm i @mistweaverco/cheza.js @mistweaverco/cheza.js-ima-plugin
```

or `yarn`

```sh
yarn add -D @mistweaverco/cheza.js @mistweaverco/cheza.js-ima-plugin
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
  <video id="video" controls playsinline preload="none"
    poster="https://mwcdn.co/demo-videos/View_From_A_Blue_Moon_Trailer-HD.jpg"
  >
    <source src="https://mwcdn.co/demo-videos/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" />
  </video>
  <script src="app.js"></script>
</body>
</html>
```

`app.ts`

```typescript
import { Cheza } from '@mistweaverco/cheza.js'
import '@mistweaverco/cheza.js/dist/style.css'

const video = document.querySelector('video') as HTMLVideoElement
void new Cheza(video)
```

### Example with on-demand support for DASH and HLS

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
  <video id="video" controls playsinline preload="none"
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

```typescript
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

[cheza-swahili]: https://en.wikipedia.org/wiki/Swahili_language
[dash]: https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP
[dashjs]: https://github.com/Dash-Industry-Forum/dash.js
[dashjs-example]: https://github.com/mistweaverco/cheza.js/blob/main/packages/cheza.js/src/dev.ts#L12-L16
[hls]: https://en.wikipedia.org/wiki/HTTP_Live_Streaming
[hlsjs]: https://github.com/video-dev/hls.js
[hlsjs-example]: https://github.com/mistweaverco/cheza.js/blob/main/packages/cheza.js/src/dev.ts#L17-L25
[subtitles-captions]: https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
[google-ima]: https://developers.google.com/interactive-media-ads

