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
        // Nueva paleta elegante
        cream: '#FAF7F2',        // Fondo principal crema suave
        'cream-dark': '#F5F1E8',  // Crema más oscuro para contrastes
        warm: '#faf5ed',          // Fondo cálido para secciones alternas
        gold: '#D4AF37',         // Dorado elegante (mantener)
        'gold-light': '#E8D4A0', // Dorado claro
        'gold-dark': '#B8941F',  // Dorado oscuro
        brown: '#8B6F47',        // Marrón cálido principal
        'brown-light': '#A68A64', // Marrón claro
        'brown-dark': '#6B5635',  // Marrón oscuro
        ivory: '#FFFFF0',        // Blanco marfil para textos claros
        charcoal: '#3A3A3A',     // Gris oscuro para textos
        'charcoal-light': '#6B6B6B', // Gris medio
        
        // Mantener compatibilidad (deprecated)
        drblack: '#3A3A3A',
        drgold: '#D4AF37',
        drgold2: '#C9A96E',
        drwhite: '#FAF7F2',
        drgray: '#6B6B6B',
        dramber: '#8B6F47',
        dramber2: '#6B5635',
        drmatte: '#F5F1E8',
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Montserrat', 'Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        dr: '0 4px 24px 0 rgba(139, 111, 71, 0.15)',
        elegant: '0 8px 32px 0 rgba(139, 111, 71, 0.12)',
        'elegant-lg': '0 12px 48px 0 rgba(139, 111, 71, 0.18)',
        gold: '0 8px 32px 0 rgba(212, 175, 55, 0.25)',
        brown: '0 8px 32px 0 rgba(139, 111, 71, 0.25)',
      },
      letterSpacing: {
        wide: '0.1em',
        wider: '0.2em',
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(135deg, #FAF7F2 0%, #F5F1E8 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
      },
    },
  },
  plugins: [],
};
