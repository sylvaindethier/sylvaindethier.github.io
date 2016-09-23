import match from 'react-router/lib/match'
const debug = require('debug')('app:locale')

// promisify React Router.match function
const matchPromise = matcher => new Promise((resolve, reject) => {
  match(matcher, (error, redirectLocation, renderProps) => {
    switch (true) {
      case !!redirectLocation:
        resolve({ redirectLocation }); return

      case !!renderProps:
        resolve(renderProps); return

      case !!error:
      default:
        reject(error)
    }
  })
})

const matchLocaleParams = (matcher, paramLocale = 'locale') => (
  matchPromise(matcher)
  // get only the resolved 'params[paramLocale]' if any
  .then(({ params }) => {
    const locale = params && params[paramLocale]
    debug('matched "%s" route params', paramLocale, locale)
    return locale
  })
)

export default matchLocaleParams
