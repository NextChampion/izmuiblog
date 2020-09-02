module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks'],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    'no-console': ['error'],
    'no-var': 'error',
    'global-require': 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': 'off',
    'lines-between-class-members': 'error',
    'prefer-destructuring': 'warn',
    'react/prop-types': 'error',
    'react/jsx-key': 'warn',
    'react/no-unused-state': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/require-default-props': 'warn',
    'import/no-unresolved': 'warn',
    'import/namespace': 'error',
    'import/export': 'warn',
  },
};
