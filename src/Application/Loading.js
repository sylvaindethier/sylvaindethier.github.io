/* eslint-disable react/prop-types */
import React from 'react'

export default function LoadingComponent ({ isLoading, pastDelay, error }) {
  if (isLoading && pastDelay) {
    return pastDelay ? (
      <p>Loading...</p>
      ) : null // Don't flash "Loading..." when we don't need to.
  } else if (error && !isLoading) {
    return (
      <p>Error! The Component failed to load.</p>
    )
  } else {
    return null
  }
}
