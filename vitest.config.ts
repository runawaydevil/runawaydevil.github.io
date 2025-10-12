import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
    exclude: ['node_modules', 'dist', '.vitepress/dist']
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './docs/.vitepress'),
      '@vault': resolve(__dirname, './docs/vault')
    }
  }
})
