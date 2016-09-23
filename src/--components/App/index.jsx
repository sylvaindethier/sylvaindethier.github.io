import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import createMuiTheme from '../../containers/createMuiTheme'
import LocalesNav from '../../components/LocalesNav'

// import Link from 'react-router/lib/Link';
// import Translated from '../Translated';

import './App.css'

function App (props) {
  const { params: { locale } } = props
  return createMuiTheme(
    <div className='App'>
      <div className='App-header'>
        <h2>Welcome to React</h2>
      </div>
      <IndexLink to='/'>Home to "/"</IndexLink>
      <br />
      <Link to={`/${locale}/example`}>Example to "{locale}/example"</Link>
      <br />
      <LocalesNav />
      <p>Example of MaterialUI RaisedButton</p>
      <RaisedButton label='Default' />
      <br />
      {props.children}
    </div>
  )
}
App.displayName = 'App'

export default App
