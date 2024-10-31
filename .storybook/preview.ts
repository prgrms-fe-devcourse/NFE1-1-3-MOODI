/* eslint-disable import/no-extraneous-dependencies */
import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';

// MSW 초기화
initialize();

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    },
    loaders: [mswLoader]
};

export default preview;
