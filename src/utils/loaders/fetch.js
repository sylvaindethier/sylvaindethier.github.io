const resolver = resolve => {
  require.ensure(['whatwg-fetch'], require => {
    resolve({
      fetch: require('whatwg-fetch'),
    });
  }, 'polyfill-fetch');
};
const required = !global.fetch;

const loader = required ? resolver : false;
export default loader;
