import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import HelloWorld from './HelloWorld/container'

import { loadPolyfills } from './utils/loaders'

// configureStore w/ initialState from global if any
const store = configureStore(window.INITIAL_STATE)

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
