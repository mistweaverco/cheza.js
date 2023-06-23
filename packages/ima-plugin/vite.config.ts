import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/plugin.ts',
      name: 'ChezaIMAPlugin',
      fileName: 'cheza.js-ima-plugin'
    }
  }
})
