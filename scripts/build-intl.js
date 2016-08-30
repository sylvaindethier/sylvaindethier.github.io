process.env.NODE_ENV = 'production';

const rimrafSync = require('rimraf').sync;
const chalk = require('chalk');
const fs = require('fs');
const globSync = require('glob').sync;
const paths = require('../config/paths');

// source: https://github.com/yahoo/react-intl/blob/master/examples/translations/scripts/translate.js
/**
 * Aggregates the default messages that were extracted from the example app's
 * React components via the React Intl Babel plugin. An error will be thrown if
 * there are messages in different components that use the same `id`. The
 * result is a flat collection of `id: message` pairs for the app's default
 * locale.
 */
// flatten intl default messages
console.info('Extracting Intl messages...');
const messagesPattern = `${paths.intlMessages}/**/*.json`;
const defaultMessages = globSync(messagesPattern)
  .map((filename) => fs.readFileSync(filename, 'utf8'))
  .map((file) => JSON.parse(file))
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
  }, {});
// write JSON file
const filePath = `${paths.l10nMessages}/default.json`;
fs.writeFileSync(filePath, JSON.stringify(defaultMessages, null, 2));
// Remove intl messages extracted by babel-plugin-react-intl
rimrafSync(paths.intlMessages);
console.info(chalk.green('Compiled successfully.'));
