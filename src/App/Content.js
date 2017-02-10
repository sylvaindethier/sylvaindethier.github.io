import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import LinearProgress from 'material-ui/LinearProgress'
import { asyncComponentModule } from '../asyncComponent'
// sync pages
import Home from '../pages/Home'
// async pages
const Loader = () => (<LinearProgress />)
const About = asyncComponentModule(() => import('../pages/About'), Loader)
const Topics = asyncComponentModule(() => import('../pages/Topics'), Loader)
const NoMatch = asyncComponentModule(() => import('../pages/NoMatch'), Loader)

const Content = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/topics' component={Topics} />
    <Route component={NoMatch} />
  </Switch>
)
export default Content
