const server = require('pushstate-server')
const chalk = require('chalk')
const paths = require('../config/paths')

const PORT = process.env.PORT || 9000
const url = chalk.cyan(`http://localhost:${PORT}`)

server.start({
  directory: paths.appBuild
})
console.log(`Listenning on port ${PORT} (${url})`)
