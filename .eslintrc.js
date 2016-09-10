module.exports = {
  root: true,

  env: {
    commonjs: true,
    es6: true,
    node: true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  plugins: [
    'import',
  ],

  extends: [
    'eslint:recommended',
    'standard',
  ],
};
