import { defineConfig } from 'vite'
import svgLoader from '@mistweaverco/vite-svg-loader'

export default defineConfig({
  build: {
    lib: {
      entry: './src/app.ts',
      name: 'Cheza',
      fileName: 'cheza'
    }
  },
  plugins: [
    svgLoader()
  ]
})
