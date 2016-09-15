import React, { PropTypes } from 'react'
import 'normalize.css'

import NavLink from './NavLink'
import './app.css'

const App = ({ children, params: { locale } }) => (
  <div>
    <h1>React Router Tutorial</h1>
    <ul role='navigation'>
      <li><NavLink to={`/${locale}`} onlyActiveOnIndex>Home</NavLink></li>
      <li><NavLink to='/en-US'>English (en-US)</NavLink></li>
      <li><NavLink to='/fr-FR'>Français (fr-FR)</NavLink></li>
      <li><NavLink to='/foo-BAR'>FooBar (foo-BAR)</NavLink></li>
      <li><NavLink to={`/${locale}/about`}>About</NavLink></li>
      <li><NavLink to={`/${locale}/repos`}>Repos</NavLink></li>
    </ul>
    {children}
  </div>
)
App.displayName = 'App'
App.propTypes = {
  children: PropTypes.element.isRequired,
  params: PropTypes.shape({ locale: PropTypes.string.isRequired })
}

export default App
