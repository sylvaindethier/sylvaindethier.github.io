const resolver = resolve => {
  require.ensure(['intl'], require => {
    resolve({
      intl: require('intl'),
    });
  }, 'polyfill-Intl');
};
const required = !global.Intl;

const loader = required ? resolver : false;
export default loader;
