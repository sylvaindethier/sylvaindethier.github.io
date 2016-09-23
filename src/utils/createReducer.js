const hasOwnProperty = {}.hasOwnProperty.call

export default function createReducer (initialState, handlers) {
  // return a reducer function that handles the action by type if any, or do nothing by default
  return (state = initialState, action) => (
    hasOwnProperty(handlers, action.type)
      ? handlers[action.type](state, action) : state
    )
}
