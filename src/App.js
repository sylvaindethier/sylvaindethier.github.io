import React from 'react'
import { Link, Match, Miss } from 'react-router'

// source: https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
// getComponent is a function that returns a promise for a component
// It will not be called until the first mount
function asyncComponent (getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount () {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    render () {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}

const Home = asyncComponent(() =>
  import('./pages/Home').then(module => module.default)
)
const renderHome = (props) => (
  <Home {...props} />
)

const About = asyncComponent(() =>
  import('./pages/About').then(module => module.default)
)
const renderAbout = (props) => (
  <About {...props} />
)

const Topics = asyncComponent(() =>
  import('./pages/Topics').then(module => module.default)
)
const renderTopics = (props) => (
  <Topics {...props} />
)

const NoMatch = asyncComponent(() =>
  import('./pages/NoMatch').then(module => module.default)
)
const renderNoMatch = (props) => (
  <NoMatch {...props} />
)

const App = () => {
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
      <Miss render={renderNoMatch} />
    </div>
  )
}

export default App
