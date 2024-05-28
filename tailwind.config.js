/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['"Barlow Condensed"', 'sans-serif'],
        'neon': ['"Tilt Neon"', 'cursive'],
      },
      backgroundImage: {
        'brick-pattern': "url('../images/bg.jpg')",
      },
      textShadow: {
        'neon':   '0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 .5em #ff4444, 0 0 .1em #ff4444, 0 10px 3px #000',
        'title':  '0 -40px 100px, 0 0 2px, 0 0 1em #4470ff, 0 0 .5em #4470ff, 0 0 .1em #4470ff, 0 10px 3px #000',
        'pink':   '0 -40px 100px, 0 0 2px, 0 0 1em #ed30f0, 0 0 .5em #ed30f0, 0 0 .1em #ed30f0, 0 10px 3px #000',
        'yellow': '0 -40px 100px, 0 0 2px, 0 0 1em #f4ff26, 0 0 .5em #f4ff26, 0 0 .1em #f4ff26, 0 10px 3px #000',
      },
      boxShadow: {
        'custom-neon': '0 0px 20px, 0 0 2px, 0 0 1em #4470ff, 0 0 0.5em #4470ff, 0 0 0.1em #4470ff, 0 10px 3px #000000',
      },
      keyframes: {
        blink: {
          '78%': {
            color: 'inherit',
            textShadow: 'inherit',
          },
          '79%': {
            color: '#333333',
          },
          '80%': {
            textShadow: 'none',
          },
          '81%': {
            color: 'inherit',
            textShadow: 'inherit',
          },
          '82%': {
            color: '#333333',
            textShadow: 'none',
          },
          '83%': {
            color: 'inherit',
            textShadow: 'inherit',
          },
          '92%': {
            color: '#333333',
            textShadow: 'none',
          },
          '92.5%': {
            color: 'inherit',
            textShadow: 'inherit',
          },
        },
      },
      animation: {
        blink2: 'blink 2s linear infinite',
        blink3: 'blink 3s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-neon': {
          textShadow: '0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 .5em #ff4444, 0 0 .1em #ff4444, 0 10px 3px #000',
        },
        '.text-shadow-title': {
          textShadow: '0 -40px 100px, 0 0 2px, 0 0 1em #4470ff, 0 0 .5em #4470ff, 0 0 .1em #4470ff, 0 10px 3px #000',
        },
        '.text-shadow-pink': {
          textShadow: '0 -40px 100px, 0 0 2px, 0 0 1em #ed30f0, 0 0 .5em #ed30f0, 0 0 .1em #ed30f0, 0 10px 3px #000',
        },
        '.text-shadow-yellow': {
          textShadow: '0 -40px 100px, 0 0 2px, 0 0 1em #f4ff26, 0 0 .5em #f4ff26, 0 0 .1em #f4ff26, 0 10px 3px #000',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
