import React from 'react'
import AppBar from './AppBar'
import AppRoutes from './AppRoutes'
import './styles.css'

// const handleMenuTap = (event) => {
//   console.log('handleMenuTap', event) // eslint-disable-line no-console
// }

const AppComponent = () => (
  <div>
    <AppBar />
    <hr />
    <AppRoutes />
  </div>
)

export default AppComponent
