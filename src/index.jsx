// React
import React from 'react'
import { render } from 'react-dom'
// Router
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import IndexRedirect from 'react-router/lib/IndexRedirect'
import browserHistory from 'react-router/lib/browserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
// Redux
import { Provider } from 'react-redux'
// Store
import configureStore from './store/configureStore'

// Components
import App from './modules/App'
import Home from './modules/Home'
import RepoList from './modules/RepoList'
import Repo from './modules/Repo'
import About from './modules/About'
import NotFound from './modules/NotFound'

// Polyfills
import { loadPolyfills } from './utils/loaders'

// configureStore w/ initialState from global if any
const store = configureStore(window.INITIAL_STATE || {})
const history = syncHistoryWithStore(browserHistory, store)

// get bestLocale from store
// const bestLocale = 'en-US'

const routes = (
  <Route path='/' component={App}>
    <IndexRedirect to='en-US' />
    <Route path=':locale'>
      <IndexRoute component={Home} />

      <Route path='repos' component={RepoList}>
        <Route path=':userName/:repoName' component={Repo} />
      </Route>

      <Route path='about' component={About} />
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
)

const root = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
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

// /////////////////////////////////////////////////////////////////////////////

// import 'normalize.css'
// import './index.css'

// /////////////////////////////////////////////////////////////////////////////
// import matchLocaleParams from './utils/matchLocaleParams';
// import createRoutes from './containers/createRoutes';
// import { best as bestLocale } from './utils/locales';
// import {loadPolyfills, loadMessages } from './utils/loaders';
// // create routes for the prefered locale (required for react-router match)
// const routes = createRoutes({ bestLocale });
// // get the matched locale params from the current window.location.pathname
// matchLocaleParams({ routes, location: global.location.pathname })
// .then(routeLocale => {
//   // define locale from route or prefered
//   const locale = routeLocale || bestLocale;
//
//   loadMessages(locale).then(({ messages }) => {
//     const props = { routes, locale, messages };
//   });
// });
// /////////////////////////////////////////////////////////////////////////////
