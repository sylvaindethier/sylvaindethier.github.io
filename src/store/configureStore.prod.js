import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'

// Middleware used in production
const middleware = [
]

const enhancer = compose(
  applyMiddleware(...middleware)
)

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, enhancer)
}
