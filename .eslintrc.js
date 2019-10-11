module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/eslint-config-airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-shadow': 'off',
    'object-curly-newline': ['error', {
      // 'ObjectExpression': 'always',
      'ObjectPattern': { 'multiline': true },
      'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
      'ExportDeclaration': { 'multiline': true, 'minProperties': 3 },
    }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
