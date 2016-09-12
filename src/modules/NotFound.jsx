import React from 'react'
import { locationShape } from 'react-router/lib/PropTypes'

const NotFound = ({ location: { pathname } }) => (
  <div>
    <h2>Page not found.</h2>
    <p>The location "{pathname}" did not match any routes</p>
  </div>
)
NotFound.displayName = 'NotFound'
NotFound.propTypes = {
  location: locationShape.isRequired
}

export default NotFound
