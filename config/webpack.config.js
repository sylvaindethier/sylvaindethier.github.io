const path = require('path');
const autoprefixer = require('autoprefixer');
const paths = require('./paths');

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
      'react-tap-event-plugin',
    ],

    app: [
      path.join(paths.src, 'index'),
    ],
  },

  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        include: paths.src,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: paths.src,
        loader: 'babel',
        query: require('./babel'),
      },
      {
        test: /\.json$/,
        include: [paths.src, paths.l10nMessages, paths.nodeModules],
        loader: 'json',
      },
    ],
  },

  eslint: {
    // @TODO: consider separate config for production,
    // e.g. to enable no-console and no-debugger only in prod.
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false,
  },
  postcss() {
    return [autoprefixer];
  },

  // Make web variables accessible to webpack, e.g. window
  target: 'web',
  stats: true,
  progress: true,
};
