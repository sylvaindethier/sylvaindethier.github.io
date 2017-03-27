var server = require("pushstate-server");
var chalk = require("chalk");
var detect = require("detect-port");
var clearConsole = require("react-dev-utils/clearConsole");
var getProcessForPort = require("react-dev-utils/getProcessForPort");
var openBrowser = require("react-dev-utils/openBrowser");
var prompt = require("react-dev-utils/prompt");
var paths = require("../config/paths");

var isInteractive = process.stdout.isTTY;
var DEFAULT_PORT = process.env.PORT || 9000;

function run(port) {
  var protocol = process.env.HTTPS === "true" ? "https" : "http";
  var host = process.env.HOST || "localhost";
  var url = protocol + "://" + host + ":" + port + "/";

  server.start({
    port: port,
    directory: paths.appBuild
  });
  console.log("Listenning at " + chalk.cyan(url));
  if (isInteractive) {
    openBrowser(url);
  }
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
    var existingProcess = getProcessForPort(DEFAULT_PORT);
    var question = chalk.yellow(
      "Something is already running on port " +
        DEFAULT_PORT +
        "." +
        (existingProcess ? " Probably:\n  " + existingProcess : "")
    ) + "\n\nWould you like to run the app on another port instead?";

    prompt(question, true).then(shouldChangePort => {
      if (shouldChangePort) {
        run(port);
      }
    });
  } else {
    console.log(
      chalk.red("Something is already running on port " + DEFAULT_PORT + ".")
    );
  }
});
