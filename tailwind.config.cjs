/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation:{
        shake:'shake 0.5s 1',
        shake2:'shake2 1s 1',

      },
      keyframes: {
        shake:{
          '0%': { transform: 'scale(0) ' },

          '100%': { transform: 'scale(1) ' },
        },


        shake2:{
          '0%': { transform: 'scale(1) ' },

          '100%': { transform: 'scale(0) ' },
        },



      
      }


    },
  },
  plugins: [],
}