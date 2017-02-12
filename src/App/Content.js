import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import routes from './routes'

// don't forget to add corresponding Link in Bar
const Content = () => (
  // Switch to render only the first child <Route> that matches the location
  <Switch>
    {routes.map((route, key) => (
      <Route
        key={key}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
)
export default Content
