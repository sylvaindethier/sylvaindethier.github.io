process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.config.dev');

// Tools like Cloud9 rely on this
const DEFAULT_PORT = process.env.PORT || 3000;
const DEFAULT_HOST = process.env.HOST || 'localhost';
const URL = `htt://${DEFAULT_HOST}:${DEFAULT_PORT}/`;

// Add DEV server and Hot reloading
config.entry.app.unshift(
  `webpack-dev-server/client?${URL}`,
  'webpack/hot/dev-server'
);
config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
);

// run webpack-dev-server
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  // Hot reload
  hot: true,
  quiet: true, // No logs
  watchOptions: {
    ignored: /node_modules/
  }
}).listen(DEFAULT_PORT, DEFAULT_HOST, (err, result) => {
  if (err) {
    return console.error(err);
  }

  console.info(`Development server listening at ${URL}`);
});
