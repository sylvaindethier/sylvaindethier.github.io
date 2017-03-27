import React, { PropTypes } from "react";
import LinearProgress from "material-ui/LinearProgress";

export default function Loading({ isLoading, pastDelay, error, ...props }) {
  if (isLoading && pastDelay) {
    return pastDelay ? <LinearProgress /> : null; // Don't flash "Loading..." when we don't need to.
  } else if (error && !isLoading) {
    return <p>Error! The Component failed to load.</p>;
  } else {
    return null;
  }
}

const { bool, any } = PropTypes;
Loading.propTypes = {
  isLoading: bool,
  pastDelay: bool,
  error: any
};
