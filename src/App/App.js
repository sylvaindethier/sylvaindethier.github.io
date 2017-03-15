import React from 'react'
import Router from 'react-router-dom/BrowserRouter'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import muiTheme from './muiTheme'
import Bar from './Bar'
import PageContent from './PageContent'
import Footer from './Footer'
import './styles.css'

// Needed for onTouchTap
injectTapEventPlugin()

const App = () => (
  <Router>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Bar />
        <div id='page-container'>
          <div id='page-content'>
            <PageContent />
          </div>
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  </Router>
)

export default App
