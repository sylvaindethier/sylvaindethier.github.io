import React from 'react'
import Router from 'react-router-dom/BrowserRouter'

import App from './App'

const Root = () => (
  // 2. render a `Router`, it will listen to the url changes
  //    and make the location available to other components
  //    automatically
  <Router>
    <App />
  </Router>
)

export default Root
