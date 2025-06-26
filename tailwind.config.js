/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    "./index.html",
    "./404.html",
    "./article/**/*.html",
    "./src/**/*.{html,js}",
    "../article/article.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        primaryBlue: '#0C0950',
        secondBlue: '#161179',
        blue: '#261FB3',
        pinkColor: '#FBE4D6',
        purplecolor: '#617FEB',
        supportBlue: '#7182ED',
        supportPink: '#F598FE',
      },
      keyframes: {
        scrollDown: {
          '0%': { transform : 'translateY(0%)' },
          '100%': { transform : 'translateY(-50%)'},
        },
        scrollUp: {
          '0%'   : { transform : 'translateY(0%)'  },
          '100%' : { transform : 'translateY(50%)' },
        },
      },
      animation: {
        animationScrollDown : 'scrollDown 10s ease-in infinite alternate',
        animationScrollUp   : 'scrollUp 10s ease-in infinite alternate',
      },
    },
  },
  plugins: [],
}

