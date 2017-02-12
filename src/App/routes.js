import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import { asyncComponentModule } from '../asyncComponent'
// sync pages
import Home from '../pages/Home'
// async pages
const Loader = () => (<LinearProgress />)
const Resume = asyncComponentModule(() => import('../pages/Resume'), Loader)
const About = asyncComponentModule(() => import('../pages/About'), Loader)
const NoMatch = asyncComponentModule(() => import('../pages/NoMatch'), Loader)

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },

  {
    path: '/resume',
    component: Resume
  },

  {
    path: '/about',
    component: About
  },

  {
    component: NoMatch
  }
]
export default routes
