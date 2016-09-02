// import available polyfills
import load from './load';
import fetch from './loaders/fetch';
import intl from './loaders/intl';

// export loaders and loadPolyfills function
export const loaders = [
  fetch,
  intl,
];

export const loadPolyfills = () => load(loaders);

// require Promise polyfill so that other polyfills can be async required
if (typeof global.Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  global.Promise = require('promise/lib/es6-extensions.js');
}
