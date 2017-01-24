import React from 'react'
import { Link, Match, Miss } from 'react-router'
import { asyncModuleComponent } from './asyncComponent'

// pages as asyncComponent

// const renderHome = ((Home) =>
//   // eslint-disable-next-line react/display-name
//   (props) => <Home {...props} />
// )(asyncModuleComponent(() =>
//   import('./pages/Home')
// ))
const Home = asyncModuleComponent(() => import('./pages/Home'))
const renderHome = (props) => <Home {...props} />

const About = asyncModuleComponent(() => import('./pages/About'))
const renderAbout = (props) => <About {...props} />

const Topics = asyncModuleComponent(() => import('./pages/Topics'))
const renderTopics = (props) => <Topics {...props} />

const NoMatch = asyncModuleComponent(() => import('./pages/NoMatch'))
// const renderNoMatch = (props) => <NoMatch {...props} />

const App = () => (
  <div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/topics'>Topics</Link></li>
      <li><Link to='/no-match'>Not matched</Link></li>
    </ul>
    <hr />

    <Match exactly pattern='/' render={renderHome} />
    <Match pattern='/about' render={renderAbout} />
    <Match pattern='/topics' render={renderTopics} />

    {/* If none of those match, then a sibling `Miss` will render. */}
    <Miss component={NoMatch} />
  </div>
)

export default App
