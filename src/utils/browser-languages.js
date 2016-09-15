/**
 * Format language to `${lang}-${locale}`
 * @param  {String} language A language to be formated
 * @return {String}          The formated language
 */
function format (language) {
  const locale = language.split('-')
  return locale[1] ? `${locale[0]}-${locale[1].toUpperCase()}` : language
}

/**
 * Gets the browser languages
 * @return {Array}  The browser languages
 */
function get () {
  // cross browser window.navigator
  const navigator = global.navigator || global.clientInformation || {}

  // cross browser navigator.languages
  const languages = navigator.languages || [
    navigator.userLanguage ||
    navigator.language ||
    navigator.browserLanguage ||
    navigator.systemLanguage
  ]
  // return formated languages
  return languages.map(format)
}

/**
 * Get the first matched language of a list from a store
 * @param  {Array} store  A languages store to search from
 * @param  {Array} list   A languages list to match
 * @return {String}       The first matched language from the list
 */
function firstMatch (store, list = get()) {
  let retValue
  list.some(value => {
    if (store.includes(value)) {
      // store has the value from the list, assign it to return value
      retValue = value
      return true
    }
    return false
  })
  return retValue
}

export {
  get as default,
  firstMatch
}
