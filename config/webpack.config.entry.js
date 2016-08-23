const path = require('path');
const paths = require('./paths');

module.exports = {
  vendors: [
    require.resolve('./polyfills'),
    // ReactJS
    'react',
    'react-dom',
    'react-router',
    // material UI
    'material-ui',
    'react-tap-event-plugin',
  ],

  app: [
    path.join(paths.appSrc, 'index'),
  ],
}
