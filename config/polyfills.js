if (typeof window.Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

require('whatwg-fetch');

// Intl
if (typeof window.Intl === 'undefined') {
  // async load int module & locales
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/fr.js',
    'intl/locale-data/jsonp/en.js',
  ], function(require) {
    require('intl');
    require('intl/locale-data/jsonp/fr.js');
    require('intl/locale-data/jsonp/en.js');
  });
}
