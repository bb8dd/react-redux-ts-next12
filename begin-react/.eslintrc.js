module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'bb8dd'
  ],
  overrides: [
  ],
  parserOptions: {
    project: ['./tsconfig.json', './begin-react/tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [

  ],
  rules: {

  },
  ignorePatterns: ['.eslintrc.js']
}
