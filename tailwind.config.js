/** @type {string} */

const BACK = '#434e5e';
const SHADOW = '#e9ecef';

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        back: BACK,
        shade:  SHADOW,
        simple: '#58677c',
      },
    },
  },
  plugins: [],
};
