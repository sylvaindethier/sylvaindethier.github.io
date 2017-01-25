import React from 'react'
import { Link, Match, Miss } from 'react-router'
import { asyncModuleComponent } from '../asyncComponent'
import Loader from '../Loader'

// media
import logo from './logo.svg'
import './App.css'

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
    <Match exactly pattern='/' render={(props) => <Home {...props} />} />
    <Match pattern='/about' render={(props) => <About {...props} />} />
    <Match pattern='/topics' render={(props) => <Topics {...props} />} />
    <Miss component={NoMatch} />
  </div>
)

export default App
