// React
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Material UI requirements
import injectTapEventPlugin from 'react-tap-event-plugin';
// React components
import App from './components/App';
import Home from './components/Home';
import Example from './components/Example';
import PageNotFound from './components/PageNotFound';
import 'normalize.css';

// Needed for onTouchTap, http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// keep the PageNotFound component at the end of the routes definition
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/example" component={Example} />

    <Route path="*" component={PageNotFound} />
  </Route>
);

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
