const pxtovw = require('postcss-px-to-viewport');
const autoprefixer = require('autoprefixer');

module.exports = ({ file }) => {
  let viewportWidth;
  if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
    viewportWidth = 375;
  } else {
    viewportWidth = 750;
  }
  return {
    plugins: [
      autoprefixer(),
      pxtovw({
        viewportWidth,
      }),
    ],
  };
};
