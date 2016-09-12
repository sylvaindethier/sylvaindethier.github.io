module.exports = {
  env: {
    browser: true,
  },

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
    'eslint:recommended',
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
      'node': {
        'extensions': ['.js', '.json', '.jsx'],
      },
    },
  },

  rules: {
    // disable react/require-extension as this rule is deprecated
    'react/require-extension': 'off',
    // skip PropTypes.shape validation (not very accurate)
    'react/no-unused-prop-types': ['error', {
      'skipShapeProps': true
    }],
  }
}
