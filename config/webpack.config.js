const join = require('path').join;
const autoprefixer = require('autoprefixer');
const paths = require('./paths');

module.exports = {
  entry: {
    vendors: [
      require.resolve('./polyfills'),
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
      join(paths.appSrc, 'index'),
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        include: paths.appSrc,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: paths.appSrc,
        loader: 'babel',
        query: require('./babel'),
      },
      {
        test: /\.json$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'json',
      },
    ],
  },

  eslint: {
    // TODO: consider separate config for production,
    // e.g. to enable no-console and no-debugger only in prod.
    configFile: join(__dirname, 'eslint.js'),
    useEslintrc: false,
  },
  postcss() {
    return [autoprefixer];
  },
};
