// React
import React from 'react'
import { render } from 'react-dom'
// Router
import Router from 'react-router/lib/Router'
// import Route from 'react-router/lib/Route'
// import IndexRoute from 'react-router/lib/IndexRoute'
// import IndexRedirect from 'react-router/lib/IndexRedirect'
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
const bestLocale = 'en-US'
const supportLocale = ['en-US', 'fr-FR']

const reposRoute = {
  path: 'repos',
  component: RepoList,
  childRoutes: [
    { path: ':userName/:repoName', component: Repo }
  ]
}

const routes = {
  path: '/',
  component: App,
  // <IndexRedirect to='/en-US'/> child
  indexRoute: { onEnter: (nextState, replace) => replace(`/${bestLocale}`) },
  childRoutes: [{
    path: ':locale',
    indexRoute: { component: Home },
    onEnter: (nextState, replace) => {
      // check if locale is supported, replace w/ bestLocale otherwise
      const { params: { locale } } = nextState
      if (!supportLocale.includes(locale)) {
        replace(`/${bestLocale}`)
      }
    },
    childRoutes: [
      reposRoute,
      { path: 'about', component: About },
      { path: '*', component: NotFound }
    ]
  }]
}

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
