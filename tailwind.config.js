/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white:  '#F9F8F7',
        sand:   '#F2EDE6',
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
        'eye':   ['0.64rem', { letterSpacing: '0.25em' }],
        'label': ['0.66rem', { letterSpacing: '0.20em' }],
        'body':  ['0.95rem', { lineHeight: '1.85', letterSpacing: '0.015em' }],
        'desc':  ['0.84rem', { lineHeight: '1.85', letterSpacing: '0.02em' }],
      },
    },
  },
  plugins: [],
}
