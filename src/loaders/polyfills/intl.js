import _debug from '../../utils/debug'

const debug = _debug('app:loaders:polyfills')

const resolver = (resolve, reject) => {
  require.ensure(['intl'], require => {
    debug('load Intl polyfill')
    resolve(require('intl'))
  }, 'polyfill-Intl')
}
const required = !window.Intl

const loader = required ? resolver : false
export default loader
