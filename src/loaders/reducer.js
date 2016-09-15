import { handleActions } from 'redux-actions'
import { loadStart, loadDone, loadError } from './actions'

const initialState = {
  loadError: false,
  loading: false,
  text: ''
}

export default handleActions({
  [loadStart]: (state, { payload }) => ({
    loadError: false,
    loading: true,
    text: `${payload || 'start'}`
  }),

  [loadDone]: (state, { payload }) => ({
    loadError: false,
    loading: false,
    text: `${payload || 'done'}`
  }),

  [loadError]: (state, { payload }) => ({
    loadError: true,
    loading: false,
    text: `${payload || 'error'}`
  })
}, initialState)
