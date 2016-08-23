import React from 'react';
import { Route, IndexRoute } from 'react-router';
// React components
import App from './components/App';
import Home from './components/Home';
import Example from './components/Example';
import PageNotFound from './components/PageNotFound';

// keep the PageNotFound component at the end of the routes definition
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/example" component={Example} />

    <Route path="*" component={PageNotFound} />
  </Route>
);
export default routes;
