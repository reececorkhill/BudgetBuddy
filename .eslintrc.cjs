module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    'cypress/globals': true, // Add this for Cypress globals recognition
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
      'react-refresh',
      'cypress' // Include the 'cypress' plugin
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['cypress.config.js', 'cypress/**/*.js'], // Targeting Cypress config and all Cypress test files
      rules: {
        'no-unused-vars': 'off', // Turn off no-unused-vars rule for these files
      },
    },
  ],
}
