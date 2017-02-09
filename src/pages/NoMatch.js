import React from 'react'
import { location as locationPropTypes } from '../routerPropTypes'

const NoMatch = ({ location }) => (
  <div>
    <h2>Page not found.</h2>
    <p>Sorry but <code>{location.pathname}</code> didn’t match any pages.</p>
  </div>
)

NoMatch.propTypes = {
  location: locationPropTypes.isRequired
}

export default NoMatch
