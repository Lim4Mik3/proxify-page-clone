import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: ["__test__/setup.ts"],
    globals: true,
    mockReset: true,
    fileParallelism: true,
    clearMocks: true,
    environment: 'happy-dom',
    coverage: {
      all: true,
      reportsDirectory: './coverage/',
      provider: 'istanbul',
      reporter: 'html-spa',
      cleanOnRerun: true,
    }
  },
})