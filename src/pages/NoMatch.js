import React from 'react'
import { propTypes } from 'react-router'

const NoMatch = ({ location }) => {
  console.log('render NoMatch w/', {location}) // eslint-disable-line
  return (
    <div>
      <h2>Whoops</h2>
      <p>Sorry but {location.pathname} didn’t match any pages</p>
    </div>
  )
}

NoMatch.propTypes = {
  location: propTypes.location
}

export default NoMatch
