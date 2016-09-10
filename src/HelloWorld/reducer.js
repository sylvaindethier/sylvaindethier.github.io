// import { fromJS } from 'immutable'
import { SET_HELLO_MESSAGE } from './actions'

const initialState = {
  message: ''
}

export default function helloWorld (state = initialState, action) {
  switch (action.type) {
    case SET_HELLO_MESSAGE: {
      const { message } = action.payload
      return Object.assign({}, state, { message })
    }
    // do NOT change the state by default
    default:
      return state
  }
}
