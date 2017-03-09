import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import routes from '../routes'

const styles = {
  Content: { margin: 24 }
}

// don't forget to add corresponding Link in Bar
const Content = () => (
  // <Switch> to render only the first child <Route> that matches the location
  <div style={styles.Content}>
    <Switch>
      {routes.map((route, key) => (
        <Route key={key} {...route} />
      ))}
    </Switch>
  </div>
)

export default Content
