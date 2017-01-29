import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import muiTheme from './muiTheme'
import Component from './component'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Component />
  </MuiThemeProvider>
)

export default App
