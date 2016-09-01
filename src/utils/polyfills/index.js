import asyncLoad from '../asyncLoad';

// import and define available polyfills
import fetchPolyfill from './fetch';
import intlPolyfill from './intl';
const polyfills = [
  fetchPolyfill,
  intlPolyfill,
];

// require Promise polyfill first so that other polyfills can be async required
if (typeof global.Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  global.Promise = require('promise/lib/es6-extensions.js');
}

// async load polyfills on demand
export default () => asyncLoad(polyfills);
