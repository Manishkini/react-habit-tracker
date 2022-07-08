module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'darkest-blue': '#01005E',
      'dark-blue': '#22267B',
      blue: '#28518A',
      black: 'black',
      white: 'white',
      yellow: '#ca8a04',
      red: '#dc2626',
      green: {
        100: '#adf5e5',
        600: '#16a34a',
        900: '#17B794',
      },
      slate: {
        800: '#1e293b',
      },
    },
    fontFamily: {
      crafty: ['"crafty-notes"', 'sans-serif'],
      jack: ['"jack-simba"', 'serif'],
      red: ['"red-hands"', 'serif'],
    },
    extend: {
      // spacing: {
      //   128: '32rem',
      //   144: '36rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // },
    },
  },
  plugins: [],
};
