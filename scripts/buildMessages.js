const fs = require('fs')
const globSync = require('glob').sync

module.exports = function buildMessages (intlMessagesPath, filePath) {
  /**
   * Aggregates the default messages that were extracted from the example app's
   * React components via the React Intl Babel plugin. An error will be thrown if
   * there are messages in different components that use the same `id`. The
   * result is a flat collection of `id: message` pairs for the app's default
   * locale.
   * source: https://github.com/yahoo/react-intl/blob/master/examples/translations/scripts/translate.js
   */
  const messagesPattern = `${intlMessagesPath}/**/*.json`
  const defaultMessages = globSync(messagesPattern)
    // read the files content as JSON
    .map((filename) => fs.readFileSync(filename, 'utf8'))
    .map((file) => JSON.parse(file))
    // flatten the defaultMessage
    .reduce((collection, descriptors) => {
      descriptors.forEach(({
        id, defaultMessage
      }) => {
        if (collection.hasOwnProperty(id)) {
          throw new Error(`Duplicate message id: ${id}`)
        }
        collection[id] = defaultMessage
      })

      return collection
    }, {})

  // write JSON file
  fs.writeFileSync(filePath, JSON.stringify(defaultMessages, null, 2))
}
