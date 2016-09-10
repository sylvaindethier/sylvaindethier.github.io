/* eslint-disable import/no-extraneous-dependencies */
function noop () {}
const debugNoop = () => noop
const isPROD = process.env.NODE_ENV === 'production'
const debug = isPROD ? debugNoop : require('debug')

// init debug for browser support
if (process.env.NODE_ENV !== 'production') {
  global.appDebug = debug
  global.appDebug.enable(process.env.DEBUG)
}

module.exports = debug
export default module.exports
