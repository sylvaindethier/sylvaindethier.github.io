module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'flowtype',
  ],

  extends: [
    'plugin:react/recommended',
    'airbnb',
    'standard',
    'standard-react',
  ],

  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$',
    ],
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
      },
    },
  },

  rules: {
    // disable react/require-extension as this rule is deprecated
    'react/require-extension': 'off',
  }
}
