import React, { PropTypes } from 'react'
import LinearProgress from 'material-ui/LinearProgress'

export default function Loading ({ isLoading, pastDelay, error }) {
  if (isLoading && pastDelay) {
    return pastDelay ? (
      <LinearProgress />
      ) : null // Don't flash "Loading..." when we don't need to.
  } else if (error && !isLoading) {
    return (
      <p>Error! The Component failed to load.</p>
    )
  } else {
    return null
  }
}

const { boolean, number, any } = PropTypes
Loading.propTypes = {
  isLoading: boolean,
  pastDelay: number,
  error: any
}
