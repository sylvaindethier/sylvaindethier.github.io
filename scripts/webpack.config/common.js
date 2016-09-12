const path = require('path')
const autoprefixer = require('autoprefixer')
// relative import
const paths = require('../../config/paths')

module.exports = {
  // Make web variables accessible to webpack, e.g. window
  target: 'web',
  stats: true,
  progress: true,

  entry: {
    vendors: [
      // includes promise, whatwg-fetch, intl, whatwg-fetch
      require.resolve(paths.src + '/utils/polyfills'),
      // React
      'react',
      'react-dom',
      'react-router',
      // Redux
      'redux',
      'redux-actions',
      'react-redux',
      'react-router-redux',
      // Intl
      'react-intl',
      'intl-locales-supported',
      // UI
      'normalize.css',
      'material-ui',
      'react-tap-event-plugin'
    ],

    app: [
      path.join(paths.src, 'index')
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        include: [paths.root]
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [paths.src]
      },
      {
        test: /\.json$/,
        include: [paths.src, paths.messages, paths.nodeModules],
        loader: 'json'
      }
    ]
  },

  postcss () {
    return [autoprefixer]
  }
}
