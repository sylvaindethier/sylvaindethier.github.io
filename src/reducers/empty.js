// create (Immutable) initialState
const initialState = {}

export default function emptyReducer (state = initialState, action) {
  switch (action.type) {
    default:
      // do nothing by default
      return state
  }
}
