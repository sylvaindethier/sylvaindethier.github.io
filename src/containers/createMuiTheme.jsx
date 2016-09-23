import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
// @TODO: write or customize base theme
import appTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap, http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// build muiTheme
const muiTheme = getMuiTheme(appTheme)

const createMuiTheme = (children) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    {children}
  </MuiThemeProvider>
)

export default createMuiTheme
