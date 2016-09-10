const debug = require('../debug')('app:loaders')

const resolver = resolve => {
  require.ensure(['whatwg-fetch'], require => {
    debug('load whatwg-fetch')
    resolve({
      fetch: require('whatwg-fetch')
    })
  }, 'polyfill-fetch')
}
const required = !global.fetch

const loader = required ? resolver : false
export default loader
