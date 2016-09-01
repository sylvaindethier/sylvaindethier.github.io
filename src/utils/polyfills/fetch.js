const loader = resolve => {
  require.ensure(['whatwg-fetch'], require => {
    resolve({
      fetch: require('whatwg-fetch'),
    });
  }, 'polyfill-fetch');
};

export default () => (global.fetch ? false : loader);
