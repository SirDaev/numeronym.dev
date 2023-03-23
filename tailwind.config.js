/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'nym-black': '#333333',
        'nym-blue': '#365C6F',
        'nym-green': '#30643E',
        'nym-orange': '#EFC8B3'
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        oldenburg: ['Oldenburg'],
        otomanopee: ['Otomanopee One']
      }
    },
  },
  plugins: []
}