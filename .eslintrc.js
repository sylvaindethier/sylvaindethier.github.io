module.exports = {
  root: true,

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  plugins: [
    'import',
  ],

  extends: [
    'eslint:recommended',
    'standard',
  ],
};
