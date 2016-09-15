import load from './load'
// import available polyfills
import fetch from './polyfills/fetch'
import intl from './polyfills/intl'

// polyfills
const polyfills = [
  fetch,
  intl
]
const loadPolyfills = () => load(polyfills)

// messages
const loadMessages = locale => load(
  require(`./messages/${locale}`).default // eslint-disable-line global-require
)

export {
  load,
  loadPolyfills,
  loadMessages
}
