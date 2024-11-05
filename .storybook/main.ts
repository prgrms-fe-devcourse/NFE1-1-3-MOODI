import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import React from 'react';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    staticDirs: ['../public'], // 정적 파일 디렉토리
    webpackFinal: async (config) => {
        // Webpack alias 설정 추가
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../src'), // '@'를 src 폴더로 매핑
            '@/components': path.resolve(__dirname, '../src/components') // '@/components'를 src/components로 매핑
        };

        return config;
    }
};

export default config;
