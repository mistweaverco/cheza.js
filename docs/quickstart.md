## Quickstart

### Simple HTML+JS example

[See it in action](examples/quickstart/example.html)

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
  <script src="https://unpkg.com/@mistweaverco/cheza.js@latest/dist/cheza.umd.js"></script>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@mistweaverco/cheza.js@latest/dist/style.css" />
  <script>
    new Cheza.Cheza(document.querySelector('video'))
  </script>
</body>
</html>
```
