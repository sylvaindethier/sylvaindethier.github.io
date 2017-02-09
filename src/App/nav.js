import React from 'react'
import Link from 'react-router-dom/Link'

const AppNav = () => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/topics'>Topics</Link></li>
    <li><Link to='/will-not-match'>Will Not Match</Link></li>
    <li><Link to='/also/will/not/match'>Also Will Not Match</Link></li>
  </ul>
)

export default AppNav
