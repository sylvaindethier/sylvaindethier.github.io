// import { createAction } from 'redux-actions'

export const SET_HELLO_MESSAGE = 'SET_HELLO_MESSAGE'

/*
 * Action creators
 */

// setHelloMessage payload: message; so payloadCreator is identity (default)
// export const setHelloMessage = createAction(SET_HELLO_MESSAGE)
export function setHelloMessage ({ message }) {
  return {
    type: SET_HELLO_MESSAGE,
    payload: { message }
  }
}
