import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    webpackFinal: async (webpackConfig) => {
        return {
            ...webpackConfig,
            resolve: {
                ...webpackConfig.resolve,
                alias: {
                    ...webpackConfig.resolve?.alias,
                    '@': path.resolve(__dirname, '../src')
                },
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
            }
        };
    },
    staticDirs: ['../public']
};
export default config;
