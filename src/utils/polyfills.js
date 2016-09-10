// require Promise polyfill so that other polyfills
// can be async loaded on demand
if (typeof global.Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.

  /* eslint-disable global-require */
  require('promise/lib/rejection-tracking').enable()
  global.Promise = require('promise/lib/es6-extensions.js')
  /* eslint-enable global-require */
}
