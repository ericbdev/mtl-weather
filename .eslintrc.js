module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended'
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  plugins: [
    'react',
    'jsx-a11y',
    'flowtype'
  ],
  rules: {
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 'off',
  },
};
