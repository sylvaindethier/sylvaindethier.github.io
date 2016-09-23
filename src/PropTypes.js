import { PropTypes } from 'react'

// PropTypes shortcut
const { object, element, func, oneOfType, arrayOf, shape } = PropTypes

// react-redux storeShape
export const storeShape = shape({
  subscribe: func.isRequired,
  dispatch: func.isRequired,
  getState: func.isRequired
})

// react-router InternalPropTypes
export const routeShape = oneOfType([object, element])
export const routesShape = oneOfType([routeShape, arrayOf(routeShape)])
export const historyShape = shape({
  listen: func.isRequired,
  push: func.isRequired,
  replace: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired
})
