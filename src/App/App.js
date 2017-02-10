import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import muiTheme from './muiTheme'
import Bar from './Bar'
import Content from './Content'
import './styles.css'

// Needed for onTouchTap
injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Bar />
      <Content />
    </div>
  </MuiThemeProvider>
)

export default App
