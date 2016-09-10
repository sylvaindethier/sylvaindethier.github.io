import load from '../load'
// import available polyfills
import fetch from './fetch'
import intl from './intl'

// polyfills
const polyfills = [
  fetch,
  intl
]
export const loadPolyfills = () => load(polyfills)

// messages
export const loadMessages = locale => load(
  require(`./messages/${locale}`).default // eslint-disable-line global-require
)
