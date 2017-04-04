// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

process.env.NODE_ENV = "production";

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require("dotenv").config({ silent: true });

const server = require("pushstate-server");
const chalk = require("chalk");
const detect = require("detect-port");
const clearConsole = require("react-dev-utils/clearConsole");
const getProcessForPort = require("react-dev-utils/getProcessForPort");
const openBrowser = require("react-dev-utils/openBrowser");
const prompt = require("react-dev-utils/prompt");
const paths = require("../config/paths");

const isInteractive = process.stdout.isTTY;

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 9000;

function run(port) {
  const protocol = process.env.HTTPS === "true" ? "https" : "http";
  const host = process.env.HOST || "localhost";

  // Launch the server.
  server.start({
    port: port,
    directory: paths.appBuild
  });
  console.log(chalk.cyan("Production server started."));
  openBrowser(`${protocol}://${host}:${port}/`);
}

// We attempt to use the default port but if it is busy, we offer the user to
// run on a different port. `detect()` Promise resolves to the next free port.
detect(DEFAULT_PORT).then(port => {
  if (port === DEFAULT_PORT) {
    run(port);
    return;
  }

  if (isInteractive) {
    clearConsole();
    const existingProcess = getProcessForPort(DEFAULT_PORT);
    const question = chalk.yellow(
      `Something is already running on port ${DEFAULT_PORT}.` +
        `${existingProcess ? ` Probably:\n  ${existingProcess}` : ""}`
    ) + "\n\nWould you like to run the app on another port instead?";

    prompt(question, true).then(shouldChangePort => {
      if (shouldChangePort) {
        run(port);
      }
    });
  } else {
    console.log(
      chalk.red(`Something is already running on port ${DEFAULT_PORT}.`)
    );
  }
});
