import isIntlLocaleSupported from 'intl-locales-supported'
import { addLocaleData } from 'react-intl'
import _debug from '../../utils/debug'

const debug = _debug('app:loaders:messages')

const resolverNoIntl = (resolve, reject) => {
  require.ensure([
    'react-intl/locale-data/en',
    '../../../messages/en-US.json'
  ], require => {
    debug('load "en-US-noIntl" messages')
    // register react-intl locale-data
    addLocaleData(require('react-intl/locale-data/en'))
    resolve(require('../../../messages/en-US.json'))
  }, 'locale-en-US-noIntl')
}

const resolverIntl = (resolve, reject) => {
  require.ensure([
    'intl/locale-data/jsonp/en-US',
    'react-intl/locale-data/en',
    '../../../messages/en-US.json'
  ], require => {
    debug('load "en-US-Intl" messages')
    // make sure intl locale-data is present
    require('intl/locale-data/jsonp/en-US')
    // register react-intl locale-data
    addLocaleData(require('react-intl/locale-data/en'))
    resolve(require('../../../messages/en-US.json'))
  }, 'locale-en-US-Intl')
}

const resolver = isIntlLocaleSupported('en-US')
  ? resolverNoIntl : resolverIntl

export default resolver
