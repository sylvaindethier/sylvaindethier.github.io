/* eslint-disable global-require */
// Use require to strip the dev branch in prod build.
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}
