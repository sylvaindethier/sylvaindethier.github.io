import React from 'react'
import { render as ReactDOMrender } from 'react-dom'
import { loadPolyfills } from './utils/loaders'

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

function Root () {
  return (
    <div>
      RootContainer
    </div>
  )
}
Root.displayName = 'Root'

function render () {
  ReactDOMrender(
    <Root />,
    document.getElementById('root')
  )
}

// load polyfills first, then boot
loadPolyfills()
.then(render)
