const ghpages = require("gh-pages");
const path = require("path");

// gh-pages defaults options
const defaults = {
  dist: "dist",
  src: "**/*",
  branch: "gh-pages",
  remote: "origin",
  message: "Updates",
  remove: "."
};

// project options
const options = Object.assign({}, defaults, {
  dist: "build",
  // branch: 'master',
  message: "Deploy updates, see `react-app` branch"
});

ghpages.publish(
  path.join(process.cwd(), options.dist),
  {
    repo: options.repo,
    silent: !!options.silent,
    branch: options.branch,
    src: options.src,
    message: options.message,
    tag: options.tag,
    dotfiles: !!options.dotfiles,
    add: !!options.add,
    only: options.remove,
    remote: options.remote,
    push: !options.noPush,
    logger: function(message) {
      process.stdout.write(message + "\n");
    }
  },
  function(err) {
    if (err) {
      console.error(err.message);
      return process.exit(1);
    }
    console.log("Published");
  }
);
