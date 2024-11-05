import type { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from '../src/app/router';

const queryClient = new QueryClient();

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        (Story) => (
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </QueryClientProvider>
        )
    ]
};

export default preview;
