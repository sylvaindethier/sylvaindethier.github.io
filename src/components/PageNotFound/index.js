import React, { PropTypes } from 'react';

function PageNotFound({ location }) {
  return (
    <p>
      Page not found - the path, <code>{location.pathname}</code>,
      did not match any React Router routes.
    </p>
  );
}
PageNotFound.displayName = 'PageNotFound';
PageNotFound.propTypes = {
  location: PropTypes.object.isRequired,

};

export default PageNotFound;
