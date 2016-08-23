import React, { PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

function App (props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      {props.children}
      <p>This rocks !</p>
    </div>
  );
}

App.displayName = 'App';
App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App;
