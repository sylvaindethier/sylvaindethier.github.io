const ghpages = require('gh-pages');
const path = require('path');

const defaults = {
  dist: 'dist',
  src: '**/*',
  branch: 'gh-pages',
  remote: 'origin',
  message: 'Updates',
  remove: '.',
};
const options = Object.assign({}, defaults, {
  dist: 'build',
  branch: 'master',
  message: 'Deploy updates'
});

ghpages.publish(path.join(process.cwd(), options.dist), {
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
    process.stderr.write(message + '\n');
  }
}, function(err) {
  if (err) {
    process.stderr.write(err.message + '\n');
    return process.exit(1);
  }
  process.stderr.write('Published\n');
});
