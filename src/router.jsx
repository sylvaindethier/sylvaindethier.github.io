import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

// React components
import App from './components/App';
import Home from './components/Home';
import Example from './components/Example';
import PageNotFound from './components/PageNotFound';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/example" component={Example} />

    <Route path="*" component={PageNotFound} />
  </Route>
);

const router = (
  <Router history={browserHistory}>
    {routes}
  </Router>
);

export default router;
export { routes };
