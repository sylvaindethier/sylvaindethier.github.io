import React from 'react';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';

const createRouter = ({ routes }) =>(
  <Router history={browserHistory} routes={routes} />
);

export default createRouter;
