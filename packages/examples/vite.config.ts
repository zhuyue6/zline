import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: /^@zline\/(.*)/, replacement: '@zline/$1/src' },
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.d.ts', '.json'],
  },
  server: {
    host: true,
    port: 8080,
    cors: true,
  },
})