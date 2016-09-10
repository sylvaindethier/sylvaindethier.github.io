const debug = require('../debug')('app:loaders')

const resolver = resolve => {
  require.ensure(['intl'], require => {
    debug('load Intl polyfill')
    resolve({
      intl: require('intl')
    })
  }, 'polyfill-Intl')
}
const required = !global.Intl

const loader = required ? resolver : false
export default loader
