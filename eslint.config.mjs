import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
    baseDirectory: process.cwd()
});

export default [
    {
        // ESLint가 무시할 파일 패턴
        ignores: [
            '**/*stories*',
            '**/webpack*.js',
            '**/webpack/**/*.js',
            'src/stories/**',
            '.storybook'
        ]
    },
    ...compat.config({
        env: {
            browser: true,
            es2021: true
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
            'prettier'
        ],
        rules: {
            'prettier/prettier': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            '@typescript-eslint/no-require-imports': 'off',
            'global-require': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' }
            ],
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': [
                1,
                { extensions: ['.jsx', '.tsx'] }
            ],
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function'
                }
            ],
            'import/prefer-default-export': 'off',
            'import/order': 'off',
            'react/prop-types': 'off'
        },
        overrides: [
            {
                // Webpack 설정 파일에 대한 규칙
                files: ['webpack.*.js'],
                rules: {
                    '@typescript-eslint/no-require-imports': 'off',
                    'global-require': 'off',
                    '@typescript-eslint/no-unused-vars': 'off'
                }
            }
        ],
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx']
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx']
                },
                typescript: {
                    project: './tsconfig.json'
                }
            }
        }
    })
];
