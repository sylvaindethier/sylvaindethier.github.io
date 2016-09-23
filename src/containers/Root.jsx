import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import createRoutes from './createRoutes'
import { storeShape, historyShape } from '../PropTypes'

const Root = ({ store, history }) => {
  const routes = createRoutes({ store })
  return (
    <Provider store={store}>
      <Router routes={routes} history={history} />
    </Provider>
  )
}

Root.propTypes = {
  store: storeShape.isRequired,
  history: historyShape
}

Root.defaultProps = {
  history: browserHistory
}

export default Root
