import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/app.ts',
      name: 'app',
      fileName: 'app'
    }
  }
})
