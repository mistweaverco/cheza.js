import { defineConfig } from 'vite'
import svgLoader from '@mistweaverco/vite-svg-loader'

export default defineConfig({
  build: {
    lib: {
      entry: './src/cheza.ts',
      name: 'Cheza',
      fileName: 'cheza'
    }
  },
  plugins: [
    svgLoader()
  ]
})
