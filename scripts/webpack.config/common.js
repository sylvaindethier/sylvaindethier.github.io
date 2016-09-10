const path = require('path')
const autoprefixer = require('autoprefixer')
const paths = require('../../config/paths')

module.exports = {
  entry: {
    vendors: [
      require.resolve(paths.src + '/utils/polyfills'),
      // React
      'react',
      'react-dom',
      'react-router',
      'react-intl',
      // material UI
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
        exclude: paths.nodeModules
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: paths.src
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
  },

  // Make web variables accessible to webpack, e.g. window
  target: 'web',
  stats: true,
  progress: true
}
