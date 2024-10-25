import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
})

export default [
  {
    ignores: ['**/*stories*', '**/webpack*.js', '**/webpack/**/*.js', 'src/stories/**'],
  },
  ...compat.config({
    env: {
      browser: true,
      es2021: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', '@emotion'],
    extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:prettier/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    rules: {
      'prettier/prettier': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
      'global-require': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
      'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'import/prefer-default-export': 'off',
      'import/order': 'off',
    },
    overrides: [
      {
        files: ['webpack.*.js'],
        rules: {
          '@typescript-eslint/no-require-imports': 'off',
          'global-require': 'off',
          '@typescript-eslint/no-unused-vars': 'off',
        },
      },
    ],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  }),
]
