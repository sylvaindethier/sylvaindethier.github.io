import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Example from './components/Example';
// keep the PageNotFound component at the end of the routes definition
import PageNotFound from './components/PageNotFound';
import 'normalize.css';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/example" component={Example} />

    <Route path="*" component={PageNotFound} />
  </Route>
);

const root =   document.getElementById('root');

render(
  <Router history={browserHistory} routes={routes} />,
  root
);
