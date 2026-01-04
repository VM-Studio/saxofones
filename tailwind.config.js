/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        drblack: '#111111',
        drgold: '#D4AF37',
        drgold2: '#C9A96E',
        drwhite: '#FFFFFF',
        drgray: '#E0E0E0',
        dramber: '#D2691E',
        dramber2: '#8B4513',
        drmatte: '#1A1A1A',
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Montserrat', 'Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        dr: '0 4px 24px 0 rgba(212, 175, 55, 0.15)',
      },
      letterSpacing: {
        wide: '0.1em',
        wider: '0.2em',
      },
    },
  },
  plugins: [],
};
