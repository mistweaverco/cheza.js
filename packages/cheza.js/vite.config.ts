import { defineConfig } from 'vite'
import svgLoader from '@mistweaverco/vite-svg-loader'

export default defineConfig({
  build: {
    lib: {
      entry: './src/app.ts',
      name: 'ChezaJS',
      fileName: 'cheza'
    }
  },
  plugins: [
    svgLoader()
  ]
})
