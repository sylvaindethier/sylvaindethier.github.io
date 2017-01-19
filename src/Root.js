import React from 'react'
import { BrowserRouter } from 'react-router'

import App from './App'

const Root = () => (
  // 2. render a `Router`, it will listen to the url changes
  //    and make the location available to other components
  //    automatically
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default Root
