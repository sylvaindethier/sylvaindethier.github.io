import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

/* eslint-disable import/no-extraneous-dependencies */
// only in dev
import createLogger from 'redux-logger'
/* eslint-enable import/no-extraneous-dependencies */

import reducer from './reducers'
import { loadPolyfills } from './utils/loaders'

// Containers
import HelloWorld from './HelloWorld/container'

const devToolsExtension = () => (
  typeof window === 'object' &&
  typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension() : f => f
)

const initialState = {
}

const logger = createLogger()
const middleware = [
  // only in dev
  logger
]

// const enhancer = compose(
//   applyMiddleware(...middleware),
//   // only in dev
//   devToolsExtension
// )
const enhancer = window.devToolsExtension && window.devToolsExtension()
const store = createStore(reducer, initialState, enhancer)
const root = (
  <Provider store={store}>
    <HelloWorld />
  </Provider>
)
const rootEl = document.getElementById('root')

function renderRoot () {
  render(root, rootEl)
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
