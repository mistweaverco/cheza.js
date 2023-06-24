## Simple node.js example

Install node packages via `npm`

```sh
npm i @mistweaverco/cheza.js typescript
```

or `yarn`

```sh
yarn add @mistweaverco/cheza.js typescript
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
