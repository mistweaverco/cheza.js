import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/plugin.ts',
      name: 'ChezaRecommendationPlugin',
      fileName: 'cheza.js-recommendation-plugin'
    }
  }
})
