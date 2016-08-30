const resolve = require('path').resolve;

module.exports = {
  nodeModules: resolve('node_modules'),
  src: resolve('src'),
  build: resolve('build'),
  template: resolve('src/index.html'),
  static: resolve('static'),
  l10nMessages: resolve('l10n'),
  intlMessages: resolve('build/messages'),
};
