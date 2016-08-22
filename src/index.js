import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './index.css';

const root =   document.getElementById('root');

render(
  <App />,
  root
);

if (module && module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    render(
      <NewApp />,
      root
    );
  });
}
