const config = {
  babelrc: false,
  presets: [
    'babel-preset-es2015',
    'babel-preset-es2016',
    'babel-preset-react'
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
    }]
  ])
};

if (process.env.NODE_ENV === 'development') {
  // only in DEV
  config.cacheDirectory = true;
}

module.exports = config;
