import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://songcengiz.githup.io/rest-countries-API',
  plugins: [
    react(),
    eslint({
      overrideConfig: {
        rules: {
          'no-unused-vars': 'warn',
        },
      },
    }),
  ],
});
