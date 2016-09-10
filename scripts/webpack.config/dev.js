const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./common')
const paths = require('../../config/paths')
const assign = Object.assign

module.exports = assign(config, {
  devtool: 'eval',

  output: {
    // Next line is not used in dev but WebpackDevServer crashes without it:
    path: paths.build,
    publicPath: '/',
    pathinfo: true,
    filename: 'js/[name].js'
  },

  module: assign(config.module, {
    // append DEV specific module loaders
    loaders: config.module.loaders.concat([
      {
        test: /\.css$/,
        include: [paths.src, paths.nodeModules],
        loader: 'style!css!postcss'
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
        include: [paths.src, paths.nodeModules],
        loader: 'file',
        query: {
          name: 'media/[name].[ext]'
        }
      },
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        include: [paths.src, paths.nodeModules],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'media/[name].[ext]'
        }
      }
    ])
  }),

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/[name].js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.template
    })
  ]
})
