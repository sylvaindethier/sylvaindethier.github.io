const resolve = require('path').resolve;

module.exports = {
  appPackageJson: resolve('package.json'),
  appNodeModules: resolve('node_modules'),
  ownNodeModules: resolve('node_modules'),
  appSrc: resolve('src'),
  appHtml: resolve('src/index.html'),
  appFavicon: resolve('src/favicon.ico'),
  appBuild: resolve('build'),
};
