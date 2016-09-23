import React from 'react'
import { locationShape } from 'react-router/lib/PropTypes'

function PageNotFound ({ location }) {
  return (
    <p>
      Page not found - the path, <code>{location.pathname}</code>,
      did not match any React Router routes.
    </p>
  )
}
PageNotFound.displayName = 'PageNotFound'
PageNotFound.propTypes = {
  location: locationShape
}

export default PageNotFound
