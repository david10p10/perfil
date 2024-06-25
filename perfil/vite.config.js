import { defineConfig } from 'vite';
import { resolve } from 'path';
import { postcss } from 'postcss';
import autoprefixer from 'autoprefixer';
import purgecss from '@purgecss/vite';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    purgecss({
      content: [
        './src/**/*.vue',
        './src/**/*.html',
        './src/**/*.js',
      ],
      safelist: ['html', 'body'],
    }),
    postcss([autoprefixer(), tailwindcss()]),
  ],
  css: {
    preprocessor: 'less',
  },
});