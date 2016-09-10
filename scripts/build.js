process.env.NODE_ENV = 'production'

const rimrafSync = require('rimraf').sync
const webpack = require('webpack')
const chalk = require('chalk')
const config = require('./webpack.config/prod')
const buildMessages = require('./buildMessages')
const paths = require('../config/paths')

// Clean build path
rimrafSync(paths.build + '/*')
console.info('Creating an optimized production build...')
webpack(config).run(function (err, stats) {
  if (err) {
    console.error(chalk.red('Failed to create a production build. Reason:'))
    console.error(err.message || err)
    return process.exit(1)
  }

  console.info('Extracting Intl messages...')
  const filePath = `${paths.messages}/default.json`
  buildMessages(paths.messagesIntl, filePath)
  // Remove intl messages extracted by babel-plugin-react-intl
  rimrafSync(paths.messagesIntl)
  console.info(chalk.green('Compiled successfully.'))
})
