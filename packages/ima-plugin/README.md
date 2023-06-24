Cheza.js Google IMA Plugin
==========================

## Example usage

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
```

