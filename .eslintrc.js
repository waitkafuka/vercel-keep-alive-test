module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': 'off',
    'func-names': 'off',
    'no-restricted-syntax': 'off',
    'no-console': 'off',
    'no-unused-expressions': 0,
    'no-plusplus': 0,
    'react/react-in-jsx-scope': 'off',
  },
};
