import React from 'react';
// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// @TODO: write or customize base theme
import myTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import './App.css';

// Needed for onTouchTap, http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// build muiTheme w/ myTheme
const muiTheme = getMuiTheme(myTheme)

function App(props, context) {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {props.children}
        <p>This rocks !</p>
        <RaisedButton label="Default" />
      </div>
    </MuiThemeProvider>
  );
}
App.displayName = 'App';

export default App;
