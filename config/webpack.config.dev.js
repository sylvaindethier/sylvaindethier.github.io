const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const paths = require('./paths');

module.exports = {
  devtool: 'eval',

  entry: {
    // vendors, be sure to load them first
    vendors: [
      'react',
      'react-dom',
    ],
    app: [
      require.resolve('webpack-dev-server/client') + '?/',
      require.resolve('webpack/hot/dev-server'),
      require.resolve('./polyfills'),
      path.join(paths.appSrc, 'index'),
    ]
  },

  output: {
    // Next line is not used in dev but WebpackDevServer crashes without it:
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  },
  resolveLoader: {
    root: paths.ownNodeModules,
    // moduleTemplates: ['*-loader'],
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: paths.appSrc,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel',
        query: require('./babel'),
      },
      {
        test: /\.css$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'style!css!postcss',
      },
      {
        test: /\.json$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'json',
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'file',
        query: {
          name: 'static/media/[name].[ext]',
        },
      },
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[ext]',
        },
      },
    ],
  },

  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false,
  },
  postcss() {
    return [autoprefixer];
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'static/js/vendors.bundle.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      favicon: paths.appFavicon,
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.HotModuleReplacementPlugin(),
    // new CaseSensitivePathsPlugin(), // WIsFor ?
  ],
};
