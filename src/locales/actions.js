import { createAction } from 'redux-actions'
import { load } from '../loaders/actions'
import { loadMessages as loadMessagesFn } from '../loaders'

export const SET_LOCALE = 'locales/SET_LOCALE'
export const SET_MESSAGES = 'locales/SET_MESSAGES'

export const setLocale = createAction(SET_LOCALE)
export const setMessages = createAction(SET_MESSAGES)

export const reloadMessages = (locale) =>
  (dispatch, getState) => {
    const loader = () => loadMessagesFn(locale)
    return dispatch(load(loader))
      .then(messages => {
        dispatch(setMessages({ locale, messages }))
      })
  }

// Whether or not the messages for the locale exists in the state
const shouldReloadMessages = ({ messages }, locale) => (
  messages[locale] === undefined
)

export const loadMessages = (locale) =>
  (dispatch, getState) => (
    // should the messages be reloaded ?
    shouldReloadMessages(getState(), locale)
    // dispatch loadMessages
    ? dispatch(reloadMessages(locale))
    // or Promise.resolve() to tell it's already resolved
    : Promise.resolve()
  )

export const loadLocale = (locale) =>
  (dispatch, getState) => {
    // first set locale
    dispatch(setLocale(locale))
    // and load the messages
    return dispatch(loadMessages(locale))
  }
