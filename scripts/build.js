process.env.NODE_ENV = 'production';

const rimrafSync = require('rimraf').sync;
const webpack = require('webpack');
const config = require('../config/webpack.config.prod');
const paths = require('../config/paths');

// Remove all content but keep the directory so that
// if you're in it, you don't end up in Trash
rimrafSync(paths.build + '/*');

console.info('Creating an optimized production build...');
webpack(config).run(function(err, stats) {
  if (err) {
    console.error('Failed to create a production build. Reason:');
    console.error(err.message || err);
    process.exit(1);
  }

  console.info('Compiled successfully.');
  console.log();
});
