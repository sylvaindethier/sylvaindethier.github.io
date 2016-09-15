// React
import React from 'react'
import { render } from 'react-dom'
// Router
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
// Redux
import { Provider, connect } from 'react-redux'
// Intl
import { IntlProvider } from 'react-intl'

// Store
import configureStore from './store/configureStore'
import createRoutes from './routes'

// Polyfills
import { loadPolyfills } from './loaders'

// configureStore w/ initialState from global if any
const store = configureStore(window.INITIAL_STATE || {})
// @TODO: do we really need react-router-redux ?
const history = syncHistoryWithStore(browserHistory, store)

// <IntlProvider
//   key={locale}
//   locale={locale}
//   defaultLocale={defaultLocale}
//   messages={messages}
// >
const defaultLocale = 'en-US'
const mapStateToProps = ({ locale, messages }) => (
  (locale && messages[locale])
  ? { locale, key: locale, messages: messages[locale], defaultLocale }
  : { locale: defaultLocale, defaultLocale }
)
const ConnectIntlProvider = connect(mapStateToProps)(IntlProvider)

const routes = createRoutes(store)
const root = (
  <Provider store={store}>
    <ConnectIntlProvider>
      <Router history={history} routes={routes} />
    </ConnectIntlProvider>
  </Provider>
)

function renderRoot () {
  render(
    root,
    document.getElementById('root')
  )
}

// load polyfills first, then boot
loadPolyfills()
.then(renderRoot)
