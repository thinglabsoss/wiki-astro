import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */

const accent = {
  200: '#b2caed',
  600: '#2069c8',
  900: '#14325b',
  950: '#12243e',
};

const _accent = {
  200: '#a7d6b8',
  600: '#00814c',
  900: '#003d21',
  950: '#002c17',
};

const gray = {
  100: '#f4f7f7',
  200: '#eaeef0',
  300: '#bec3c4',
  400: '#848d90',
  500: '#515a5d',
  700: '#313a3c',
  800: '#20282b',
  900: '#15191a',
};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
