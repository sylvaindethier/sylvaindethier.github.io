import React from 'react'
import { Link, Match, Miss } from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import Topics from './pages/Topics'
import NoMatch from './pages/NoMatch'

const renderHome = (props) => {
  console.log('renderHome from App w/', props) // eslint-disable-line
  return (
    <Home {...props} />
  )
}
const renderAbout = (props) => {
  console.log('renderAbout from App') // eslint-disable-line
  return (
    <About {...props} />
  )
}
const renderTopics = (props) => {
  console.log('renderTopics from App') // eslint-disable-line
  return (
    <Topics {...props} />
  )
}

const App = () => {
  console.log('render App') // eslint-disable-line
  return (
    <div>
      <ul>
        {/* 3. Link to some paths with `Link` */}
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
        <li><Link to='/no-match'>Not matched</Link></li>
      </ul>
      <hr />

      {/* 4. Render some `<Match/>` components.
             When the current location matches the `pattern`
             then the `component` will render.
      */}
      <Match exactly pattern='/' render={renderHome} />
      <Match pattern='/about' render={renderAbout} />
      <Match pattern='/topics' render={renderTopics} />

      {/* If none of those match, then a sibling `Miss` will render. */}
      <Miss component={NoMatch} />
    </div>
  )
}

export default App
