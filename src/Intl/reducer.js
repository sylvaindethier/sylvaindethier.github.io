import { handleAction } from 'redux-actions'
import { setLocale, setMessages } from './actions'

const initialState = {
  locale: '',
  messages: {}
}

export const locale = handleAction(setLocale,
  (state, { payload }) => (payload)
, initialState.locale)

export const messages = handleAction(setMessages,
  (state, { payload }) => ({
    ...state,
    [payload.locale]: payload.messages
  })
, initialState.messages)
