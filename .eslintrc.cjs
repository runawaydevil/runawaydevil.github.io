module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-unused-vars': 'warn'
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.vitepress/dist/',
    'tests/',
    'scripts/',
    'in/',
    '*.json'
  ]
}
