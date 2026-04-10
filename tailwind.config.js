/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#1a3d2b', light: '#2a5c40', dark: '#0f2319' },
        amber:  { DEFAULT: '#c07d2f', light: '#e09a4a', dark: '#8a5a1e' },
        cream:  { DEFAULT: '#f5f0e8', light: '#faf8f3', dark: '#e8e0d0' },
        clay:   { DEFAULT: '#8b4513', light: '#a0522d' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
