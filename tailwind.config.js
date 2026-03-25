/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white:  '#F9F8F7',
        ink:    '#1A1A1A',
        mid:    '#404040',
        gold:   '#B8A882',
        'gold-dark': '#8A7A5A',
        sage:   '#A8B09E',
        border: 'rgba(26,26,26,0.09)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'eye':   ['0.56rem', { letterSpacing: '0.25em' }],
        'label': ['0.58rem', { letterSpacing: '0.20em' }],
        'body':  ['0.72rem', { lineHeight: '2',   letterSpacing: '0.05em' }],
        'desc':  ['0.64rem', { lineHeight: '1.95', letterSpacing: '0.06em' }],
      },
    },
  },
  plugins: [],
}
