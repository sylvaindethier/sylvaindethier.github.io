import isIntlLocaleSupported from 'intl-locales-supported'
import { addLocaleData } from 'react-intl'
import _debug from '../../utils/debug'

const debug = _debug('app:loaders:messages')

const resolverNoIntl = (resolve, reject) => {
  require.ensure([
    'react-intl/locale-data/fr',
    '../../../messages/fr-FR.json'
  ], require => {
    debug('load "fr-FR-noIntl" messages')
    // register react-intl locale-data
    addLocaleData(require('react-intl/locale-data/fr'))
    resolve(require('../../../messages/fr-FR.json'))
  }, 'locale-fr-FR-noIntl')
}

const resolverIntl = (resolve, reject) => {
  require.ensure([
    'intl/locale-data/jsonp/fr-FR',
    'react-intl/locale-data/fr',
    '../../../messages/fr-FR.json'
  ], require => {
    debug('load "fr-FR-Intl" messages')
    // make sure intl locale-data is present
    require('intl/locale-data/jsonp/fr-FR')
    // register react-intl locale-data
    addLocaleData(require('react-intl/locale-data/fr'))
    resolve(require('../../../messages/fr-FR.json'))
  }, 'locale-fr-FR-Intl')
}

const resolver = isIntlLocaleSupported('fr-FR')
  ? resolverNoIntl : resolverIntl

export default resolver
