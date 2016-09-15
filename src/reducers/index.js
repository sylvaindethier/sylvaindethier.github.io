import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loader from '../loaders/reducer'
import { locale, messages } from '../locales/reducers'

export default combineReducers({
  loader,
  locale,
  messages,
  routing: routerReducer
})
