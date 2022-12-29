module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
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
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 0,
    'no-unused-vars': 0,
    'react/prop-types': 'off',
    'default-param-last': 0,
    'no-plusplus': 0,
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': 0, // label input control error
  },
};
