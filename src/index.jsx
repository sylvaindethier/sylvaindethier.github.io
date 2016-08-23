// React
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
// CSS
import 'normalize.css';
import './index.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
