const path = require('path');
const resolveApp = path.resolve;

module.exports = {
  appPackageJson: resolveApp('package.json'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules'),
  appSrc: resolveApp('src'),
  appHtml: resolveApp('src/index.html'),
  appFavicon: resolveApp('src/favicon.ico'),
  appBuild: resolveApp('build'),
};
