import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import LinearProgress from 'material-ui/LinearProgress'
import { asyncComponentModule } from '../asyncComponent'
// sync pages
import Home from '../pages/Home'
// async pages
const Loader = () => (<LinearProgress />)
const Resume = asyncComponentModule(() => import('../pages/Resume'), Loader)
const About = asyncComponentModule(() => import('../pages/About'), Loader)
const NoMatch = asyncComponentModule(() => import('../pages/NoMatch'), Loader)

// don't forget to add corresponding Link in Bar
const Content = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/resume' component={Resume} />
    <Route path='/about' component={About} />
    <Route component={NoMatch} />
  </Switch>
)
export default Content
