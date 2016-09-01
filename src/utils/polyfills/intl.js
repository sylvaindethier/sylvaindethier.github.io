const loader = resolve => {
  require.ensure(['intl'], require => {
    resolve({
      intl: require('intl'),
    });
  }, 'polyfill-Intl');
};

export default () => (global.Intl ? false : loader);
