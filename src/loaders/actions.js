import { createAction } from 'redux-actions'

export const LOAD_START = 'loaders/LOAD_START'
export const LOAD_DONE = 'loaders/LOAD_DONE'
export const LOAD_ERROR = 'loaders/LOAD_ERROR'
export const LOAD = 'loaders/LOAD'

export const loadStart = createAction(LOAD_START)
export const loadDone = createAction(LOAD_DONE)
export const loadError = createAction(LOAD_ERROR)

export const load = (loader, { start, done } = {}) =>
 async (dispatch, getState) => {
   try {
     dispatch(loadStart(start))
     const value = await loader()
     dispatch(loadDone(done))

     return value
   } catch (err) {
     dispatch(loadError(err))

     return Promise.reject(err)
   }
 }
