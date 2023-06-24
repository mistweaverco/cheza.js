## IMA Plugin

Wrapper for the Google IMA SDK.

[See it in action](examples/ima-plugin/example.html)

### Required `data-attr`

You need to alter the `video` tag to contain a `data-ima-ad-tag-url`
which should return a valid VAST XML document.

```html
<video crossorigin playsinline controls preload="metadata"
  data-ima-ad-tag-url="https://mwcdn.co/vast-demos/creative-1of3.xml"
  poster="https://mwcdn.co/demo-videos/View_From_A_Blue_Moon_Trailer-HD.jpg"
>
  <source src="https://mwcdn.co/demo-videos/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" />
</video>
```

### Plugin Options

 - `debug: boolean`: defaults to `false`
 - `locale: string`: defaults to `en`
 - `maxRedirects: number`: defaults to `5`
 - `loadVideoTimeout: number`: defaults to `-1` which is `Infinity`
 - `adLabelTime: string`: defaults to `Ad ends in {{secondsRemaining}} seconds`
 - `adLabelNTime: string`: defaults to `Ad {{adPosition}} of {{totalAds}} ends in {{secondsRemaining}}`

### Events

All events are dispatched on the main `video` element.

Iterable via `ChezaIMAPlugin.Event.Type`.

#### `cheza:ima:adError`

Fired when an error occurred while the ad was loading or playing.

#### `cheza:ima:adCanPlay`

Fires when the ad is ready to play without buffering, either at the beginning of the ad or after buffering completes.

#### `cheza:ima:adBuffering`

Fires when the ad has stalled playback to buffer.

#### `cheza:ima:adMetadata`

Fires when an ads list is loaded.

#### `cheza:ima:adProgress`

Fires when the ad's current time value changes.

#### `cheza:ima:adClick`

Fires when the ad is clicked.

#### `cheza:ima:adComplete`

Fires when the ad completes playing.

#### `cheza:ima:adSkipped`

Fires when the ad is skipped by the user.

#### `cheza:ima:adFirstQuartile`

Fires when the ad playhead crosses first quartile.

#### `cheza:ima:adMidpoint`

Fires when the ad playhead crosses midpoint.

#### `cheza:ima:adThirdQuartile`

Fires when the ad playhead crosses third quartile.

#### `cheza:ima:adLoaded`

Fires when ad data is available.

#### `cheza:ima:adStarted`

Fires when the ad starts playing.

#### `cheza:ima:adPaused`

Fires when the ad is paused.

#### `cheza:ima:adResumed`

Fires when the ad is resumed.

#### `cheza:ima:adVolumeChanged`

Fires when the ad volume has changed.

#### `cheza:ima:adVolumeMuted`

Fires when the ad volume has been muted.

### Sample integration

Install node packages via `npm`

```sh
npm i @mistweaverco/cheza.js @mistweaverco/cheza.js-ima-plugin typescript
```

or `yarn`

```sh
yarn add @mistweaverco/cheza.js @mistweaverco/cheza.js-ima-plugin typescript
```

`index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>cheza.js IMA plugin</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      background-color: #1ffe87;
    }
    .container {
      margin: 0 auto;
      width: 100%;
      max-width: 640px;
      height: 100%;
    }
    h1 {
      text-align: center;
      color: #fff;
      font-size: 2em;
      padding: 1em;
      text-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>cheza.js Videoplayer IMA plugin</h1>
    <video id="video" crossorigin controls playsinline preload="metadata"
      data-ima-ad-tag-url="https://mwcdn.co/vast-demos/creative-1of3.xml"
      poster="https://mwcdn.co/demo-videos/View_From_A_Blue_Moon_Trailer-HD.jpg"
    >
      <source src="https://mwcdn.co/demo-videos/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" />
    </video>
  </div>
  <script src="app.js"></script>
</body>
</html>
```

`app.ts`

```typescript
import { Cheza } from '@mistweaverco/cheza.js'
import '@mistweaverco/cheza.js/dist/style.css'
import { ChezaIMAPlugin } from '@mistweaverco/cheza.js-ima-plugin'
import '@mistweaverco/cheza.js-ima-plugin/dist/style.css'

Cheza.registerPlugin(ChezaIMAPlugin)

const video = document.querySelector('video') as HTMLVideoELement
const cheza = new Cheza(video)

const pluginOpts: typeof ChezaIMAPlugin.Opts = {
  locale: 'de',
  maxRedirects: 10,
  loadVideoTimeout: -1,
  adLabelTime: 'Werbung endet in {{secondsRemaining}} Sekunden',
  adLabelNTime: 'Werbung {{adPosition}} von {{totalAds}} endet in {{secondsRemaining}}s'
}

cheza.addPlugin(ChezaIMAPlugin.Name, pluginOpts)

// Registering for all available events
Object.keys(ChezaIMAPlugin.Event.Type).forEach((k) => {
  const eventName = ChezaIMAPlugin.Event.Type[k]
  video.addEventListener(eventName, (evt) => {
    console.log(eventName, evt)
  })
})
```

