import _debug from '../../utils/debug'

const debug = _debug('app:loaders:polyfills')

const resolver = (resolve, reject) => {
  require.ensure(['whatwg-fetch'], require => {
    debug('load whatwg-fetch')
    resolve(require('whatwg-fetch'))
  }, 'polyfill-fetch')
}
const required = !window.fetch

const loader = required ? resolver : false
export default loader
