/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./pages/**/*.{html,js}","index.html"],
  theme: {
    // screens:{
    //   'xs':'200px',
    // },
    colors:{
      bodyColor:'#FBFEFD',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      red: colors.red,
      blue: colors.blue,
      indigo: colors.indigo,
    },
    extend: {
      margin:{
        '-100':'-100%'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

