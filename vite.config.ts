import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import devtools from 'solid-devtools/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    devtools({
      autoname: true,
    }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
