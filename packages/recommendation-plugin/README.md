Cheza.js Recommendation Plugin
==============================

## Example usage

Install node packages via `npm`

```sh
npm i @mistweaverco/cheza.js @mistweaverco/cheza.js-recommendation-plugin
```

or `yarn`

```sh
yarn add @mistweaverco/cheza.js @mistweaverco/cheza.js-recommendation-plugin
```

`index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>cheza.js recommendation plugin</title>
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
    <h1>cheza.js Videoplayer Recommendation plugin</h1>
    <video id="video" crossorigin playsinline controls preload="metadata"
      data-recommendation-data-url="https://mwcdn.co/cheza.js-recommendation-plugin-example-data.json"
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
import { ChezaRecommendationPlugin } from '@mistweaverco/cheza.js-recommendation-plugin'
import '@mistweaverco/cheza.js-recommendation-plugin/dist/style.css'
import type { ChezaRecommendationDataItem } from '@mistweaverco/cheza.js-recommendation-plugin'

interface RecommendationData extends ChezaRecommendationDataItem {
  endpoint: string
  playlists: string[]
}

Cheza.registerPlugin(ChezaRecommendationPlugin)

const video = document.querySelector('video') as HTMLVideoElement
const cheza = new Cheza(video)

const setSrcAndPlay = (src: string): void => {
  video.src = src
  void video.play()
}

cheza.addPlugin(ChezaRecommendationPlugin.Name, {
  debug: true,
  nextVideoLabel: 'Nächstes Video',
  countdownPauseLabel: 'anhalten',
  countdownDuration: 10,
  onTileClick: (index: number, tileData: RecommendationData) => {
    console.log('onTileClick', index, tileData)
    video.dataset.recommendationDataUrl = tileData.endpoint
    video.setAttribute('poster', tileData.image_large)
    setSrcAndPlay(tileData.playlists[0])
  },
  onCountdownOver: (tileData: RecommendationData) => {
    video.dataset.recommendationDataUrl = tileData.endpoint
    video.setAttribute('poster', tileData.image_large)
    setSrcAndPlay(tileData.playlists[0])
  },
  onBeforeReplayClick: () => {
    console.log('onBeforeReplayClick')
  }
})
```
