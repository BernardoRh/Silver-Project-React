/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {

      boxShadow: {
        'light': '0 4px 6px -1px rgba(94, 94, 94, 0.2)'
      },

      fontSize: {
        'sm': 8,
        'reg': 10,
        'md': 14,
        'lg': 20,
        'xlg': 32,
        '2xlg': 64,
      },

      colors: {
        'transparent': 'transparent',
        'black': '#000',
        'whithe': '#fff',
        'green': '#42FF00',
        'blue': '#006BB9',
        'red': '#FF0000',

        gray: {
          100: '#141414',
          300: '#1E1E1E',
          500: '#595959',
          1000: '#C0C0C0',
        },

        game: {
          'gold': '#DB9300',

          citys: {
            'Bridgewatch': '#DE6E30',
            'Caerleon': '#54040C',
            'Fort-Sterling': '#F3F3E9',
            'Lymhurst': '#5B6418',
            'Martlock': '#637B97',
            'Thetford': '#653765',
          },

          tier: {
            'four': '#32576F',
            'four-20': '#32576F33',
            'five': '#6A1E18',
            'five-20': '#6A1E1833',
            'six': '#B16227',
            'six-20': '#B1622733',
            'seven': '#BE9F3D',
            'seven-20': '#BE9F3D33',
            'eight': '#C4C4C4',
            'eight-20': '#C4C4C433',
          },
        },
      },
    fontFamily: {
      'Albion': ['albionrm', 'RM Albion'],
      'Roboto': ['Roboto', 'sans-serif'],
    }
  },
    plugins: [],
  }
}
