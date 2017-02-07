import React from 'react'

// eslint-disable-next-line react/prop-types
const NoMatch = ({ location }) => {
  console.log('render NoMatch w/', {location}) // eslint-disable-line
  return (
    <div>
      <h2>Whoops</h2>
      <p>Sorry but {location.pathname} didn’t match any pages</p>
    </div>
  )
}

export default NoMatch
