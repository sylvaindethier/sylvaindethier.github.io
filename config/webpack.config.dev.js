const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  devtool: 'eval',

  entry: {
    vendors: [
      require.resolve('./polyfills'),
      'react',
      'react-dom',
      'react-router',
    ],
    app: [
      require.resolve('webpack-dev-server/client') + '?/',
      require.resolve('webpack/hot/dev-server'),
      path.join(paths.appSrc, 'index'),
    ]
  },

  output: {
    // Next line is not used in dev but WebpackDevServer crashes without it:
    path: paths.appBuild,
    pathinfo: true,
    filename: 'js/bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.json'],
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
          name: 'media/[name].[ext]',
        },
      },
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'media/[name].[ext]',
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
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
