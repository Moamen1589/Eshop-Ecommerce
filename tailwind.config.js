/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './**/*.{html,js}',
    '!./custom-css/**/*',
    '!./node_modules/swiper'
  ],


  theme: {
    extend: {
      minWidth: {
        sm: '768px',
        md: '992px',
        larg: '1070px',
        custom: '1100px'
      },
      maxWidth: {
        sm: '768px',
        md: '992px',
        larg: '1070px',
        custom: '1100px'
      },

      colors: {
        main_color: '#f7941d',
        second_color: '#333333',
        custom:'#898989',
        custom2: '#F6F7FB'
      },
      borderColor: {
        custom: '#eee',
      }


    },
  },
  plugins: [],
}

