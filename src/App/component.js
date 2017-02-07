import React from 'react'
import Link from 'react-router-dom/Link'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { asyncModuleComponent } from '../asyncComponent'
import Loader from '../Loader'
// media
import logo from './logo.svg'
import './styles.css'

// define pages as asyncComponent
const Home = asyncModuleComponent(() => import('../pages/Home'), Loader)
const About = asyncModuleComponent(() => import('../pages/About'), Loader)
const Topics = asyncModuleComponent(() => import('../pages/Topics'), Loader)
const NoMatch = asyncModuleComponent(() => import('../pages/NoMatch'), Loader)

const App = () => (
  <div className='App'>
    <div className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h2>Welcome to React</h2>
    </div>
    <p className='App-intro'>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <ul className='App-nav'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/topics'>Topics</Link></li>
      <li><Link to='/no-match'>Not matched</Link></li>
    </ul>

    <hr />
    <FlatButton label='Ok' primary />
    <RaisedButton label='Super Secret Password' secondary />

    <Switch>
      <Route exactly pattern='/' component={Home} />
      <Route pattern='/about' component={About} />
      <Route pattern='/topics' component={Topics} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App
