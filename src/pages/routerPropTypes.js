import {PropTypes} from 'react'
const {
  shape,
  string,
  number,
  func,
  object,
  bool,
  oneOf
} = PropTypes

// location PropTypes & shape
export const locationPropTypes = {
  pathname: string, // The path of the URL
  search: string, // The URL query string
  hash: string, // The URL hash fragment
  state: string // location-specific state that was provided to e.g. push(path, state) when this location was pushed onto the stack. Only available in browser and memory history.
}
export const location = shape(locationPropTypes)

// history PropTypes & shape
export const historyPropTypes = {
  length: number, // The number of entries in the history stack
  action: oneOf(['PUSH', 'REPLACE', 'POP']), // The current action (PUSH, REPLACE, or POP)
  location, // The current location.
  push: func, // (path, [state]) - Pushes a new entry onto the history stack
  replace: func, // (path, [state]) - Replaces the current entry on the history stack
  go: func, // (n) - Moves the pointer in the history stack by n entries
  goBack: func, // Equivalent to go(-1)
  goForward: func, // Equivalent to go(1)
  block: func // (prompt) - Prevents navigation (see the history docs)
}
export const history = shape(historyPropTypes)

// match PropTypes & shape
export const matchPropTypes = {
  params: object, // Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
  isExact: bool, // true if the entire URL was matched (no trailing characters)
  path: string, // The path pattern used to match. Useful for building nested <Route>s
  url: string // The matched portion of the URL. Useful for building nested <Link>s
}
export const match = shape(matchPropTypes)
