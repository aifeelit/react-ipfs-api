const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },

  extends: ['airbnb-base', 'eslint:recommended', 'plugin:prettier/recommended'],

  rules: {
    'no-unused-vars': OFF,
    'prettier/prettier': ['error', { printWidth: 110, singleQuote: true }],
  },
};
