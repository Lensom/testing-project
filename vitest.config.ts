import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/vitest/setupTests.ts',
    include: ['src/tests/vitest/**/*.test.{js,ts,jsx,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
