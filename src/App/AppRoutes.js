import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import { asyncComponentModule } from '../asyncComponent'
// sync pages
import Home from '../pages/Home'
// async pages
import Loader from '../Loader'
const About = asyncComponentModule(() => import('../pages/About'), Loader)
const Topics = asyncComponentModule(() => import('../pages/Topics'), Loader)
const NoMatch = asyncComponentModule(() => import('../pages/NoMatch'), Loader)

const AppRoutes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/topics' component={Topics} />
    <Route component={NoMatch} />
  </Switch>
)
export default AppRoutes
