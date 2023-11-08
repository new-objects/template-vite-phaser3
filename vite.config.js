import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  base:
    process.env.NODE_ENV === 'production' ? '/template-frontend-phaser3/' : '/',
  plugins: [
    eslintPlugin({
      cache: false,
    }),
  ],
  assetsInclude: ['**/*.mp3', '**/*.jpeg', '**/*.png', '**/*.task'],
});
