import React from 'react'
import { render } from 'react-dom'
import 'sanitize.css/sanitize.css'
// import Root from './Root'
import Application from './Application/Application'

render(
  <Application />,
  document.querySelector('#root')
)
