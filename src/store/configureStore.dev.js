import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

// Middleware used in development
const middleware = [
  thunk
]

const enhancer = compose(
  applyMiddleware(...middleware),
  // devToolsExtension
  typeof window === 'object' &&
  typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension() : f => f
)

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default) // eslint-disable-line global-require
    )
  }

  return store
}
