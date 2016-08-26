process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
// color the log messages
const chalk = require('chalk');
const config = require('../config/webpack.config.dev');

// Tools like Cloud9 rely on this
const DEFAULT_PORT = process.env.PORT || 3000;
const DEFAULT_HOST = process.env.HOST || 'localhost';
const URL = `http://${DEFAULT_HOST}:${DEFAULT_PORT}/`;

// Add DEV server and Hot reloading
config.entry.app.unshift(
  `webpack-dev-server/client?${URL}`,
  'webpack/hot/dev-server'
);
config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

// setup compiler
function buildCompiler() {
  const compiler = webpack(config);
  compiler.plugin('invalid', logCompilerInvalid);

  compiler.plugin('done', function(stats) {
    const hasErrors = stats.hasErrors();
    const hasWarnings = stats.hasWarnings();
    if (!hasErrors && !hasWarnings) {
      return logCompilerSuccess();
    }

    const json = stats.toJson();
    if (hasErrors) {
      // If errors exist, ignore warnings.
      return logCompilerErrors(json.errors);
    }

    if (hasWarnings) {
      logCompilerWarnings(json.warnings);
    }
  });

  return compiler;
}

// run webpack-dev-server
new WebpackDevServer(buildCompiler(), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  // Hot reload
  hot: true,
  quiet: true, // No logs
  watchOptions: {
    ignored: /node_modules/
  }
}).listen(DEFAULT_PORT, DEFAULT_HOST, (err, result) => {
  if (err) {
    return console.error(err);
  }

  console.info('Development server listening at ' + chalk.cyan(URL));
});


// Compiler log functions
const friendlySyntaxErrorLabel = 'Syntax error:';
function isLikelyASyntaxError(message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1;
}

function logCompilerInvalid() {
  console.info('Compiling...');
}

function logCompilerSuccess() {
  console.info(chalk.green('Compiled successfully!'));
  console.info('The app is running at ' + chalk.cyan(URL));
  console.info();
}

function logCompilerErrors(errors) {
  let formattedErrors = errors.map(message =>
    'Error in ' + formatMessage(message)
  );
  console.error(chalk.red('Failed to compile.'));
  console.error();
  if (formattedErrors.some(isLikelyASyntaxError)) {
    // If there are any syntax errors, show just them.
    // This prevents a confusing ESLint parsing error
    // preceding a much more useful Babel syntax error.
    formattedErrors = formattedErrors.filter(isLikelyASyntaxError);
  }
  formattedErrors.forEach(message => {
    console.error(message);
    console.error();
  });
}

function logCompilerWarnings(warnings) {
  let formattedWarnings = warnings.map(message =>
    'Warning in ' + formatMessage(message)
  );
  console.warn(chalk.yellow('Compiled with warnings.'));
  console.warn();
  formattedWarnings.forEach(message => {
    console.warn(message);
    console.warn();
  });
}

// This is a little hacky.
// It would be easier if webpack provided a rich error object.
function formatMessage(message) {
  return message
    // Make some common errors shorter:
    .replace(
      // Babel syntax error
      'Module build failed: SyntaxError:',
      friendlySyntaxErrorLabel
    )
    .replace(
      // Webpack file not found error
      /Module not found: Error: Cannot resolve 'file' or 'directory'/,
      'Module not found:'
    )
    // Internal stacks are generally useless so we strip them
    .replace(/^\s*at\s.*:\d+:\d+[\s\)]*\n/gm, '') // at ... ...:x:y
    // Webpack loader names obscure CSS filenames
    .replace('./~/css-loader!./~/postcss-loader!', '');
}
