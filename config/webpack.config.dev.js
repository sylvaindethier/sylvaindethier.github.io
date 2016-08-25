const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const config = require('./webpack.config');
const assign = Object.assign;

module.exports = assign(config, {
  devtool: 'eval',

  // prepend webpack-dev-server client
  // and webpack hot dev-server to 'app' config.entry
  // this will be done when webpack-dev-server starts

  output: {
    // Next line is not used in dev but WebpackDevServer crashes without it:
    path: paths.appBuild,
    publicPath: '/',
    pathinfo: true,
    filename: 'js/bundle.js',
  },

  module: assign(config.module, {
    // append DEV specific module loaders
    loaders: config.module.loaders.concat([
      {
        test: /\.css$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'style!css!postcss',
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
    ]),
  }),

  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
  ],
});
