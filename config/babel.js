const path = require('path');
const paths = require('./paths');

module.exports = {
  babelrc: false,
  // only in DEV
  cacheDirectory: process.env.NODE_ENV === 'development',

  presets: [
    'babel-preset-es2015',
    'babel-preset-es2016',
    'babel-preset-react',
  ].map(require.resolve),

  plugins: [
    'babel-plugin-syntax-trailing-function-commas',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-object-rest-spread',
  ].concat(process.env.NODE_ENV === 'production' ?
    // only in PROD
    ['babel-plugin-transform-react-constant-elements'] : []
  ).map(require.resolve).concat([
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true
    }],
    [require.resolve('babel-plugin-react-intl'), {
      messagesDir: path.join(paths.appBuild, 'messages'),
    }],
  ]),
};
