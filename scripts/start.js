/* This file runs a webpack-dev-server */
// force NODE_ENV to be 'development'
process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.config.dev');
// color the log messages
const chalk = require('chalk');

// Tools like Cloud9 rely on this
const DEFAULT_PORT = process.env.PORT || 3000;
const SERVER_URL = `htt://localhost:${DEFAULT_PORT}/`;
let compiler;

function setupCompiler() {
  compiler = webpack(config);

  compiler.plugin('invalid', logCompilerInvalid);

  compiler.plugin('done', function(stats) {
    // clearConsole();
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
}

function runDevServer() {
  new WebpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true, // Note: only CSS is currently hot reloaded
    publicPath: config.output.publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }).listen(DEFAULT_PORT, (err, result) => {
    if (err) {
      return console.log(err);
    }

    console.log(chalk.cyan('Starting the development server'));
  });
}

// setup compiler
setupCompiler();
// and run dev server
runDevServer();


// Compiler log functions
const friendlySyntaxErrorLabel = 'Syntax error:';
function isLikelyASyntaxError(message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1;
}

// function clearConsole() { process.stdout.write('\x1bc'); }

function logCompilerInvalid() {
  // clearConsole();
  console.log('Compiling...');
}

function logCompilerSuccess() {
  // clearConsole();
  console.log(chalk.green('Compiled successfully!'));
  console.log('The app is running at ' + chalk.cyan(SERVER_URL));
  console.log();
}

function logCompilerErrors(errors) {
  let formattedErrors = errors.map(message =>
    'Error in ' + formatMessage(message)
  );
  console.log(chalk.red('Failed to compile.'));
  console.log();
  if (formattedErrors.some(isLikelyASyntaxError)) {
    // If there are any syntax errors, show just them.
    // This prevents a confusing ESLint parsing error
    // preceding a much more useful Babel syntax error.
    formattedErrors = formattedErrors.filter(isLikelyASyntaxError);
  }
  formattedErrors.forEach(message => {
    console.log(message);
    console.log();
  });
}

function logCompilerWarnings(warnings) {
  let formattedWarnings = warnings.map(message =>
    'Warning in ' + formatMessage(message)
  );
  console.log(chalk.yellow('Compiled with warnings.'));
  console.log();
  formattedWarnings.forEach(message => {
    console.log(message);
    console.log();
  });

  console.log('You may use special comments to disable some warnings.');
  console.log('Use ' + chalk.yellow('// eslint-disable-next-line') + ' to ignore the next line.');
  console.log('Use ' + chalk.yellow('/* eslint-disable */') + ' to ignore all warnings in a file.');
  console.log();
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
