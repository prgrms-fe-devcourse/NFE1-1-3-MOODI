import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactionSelector from '@/widgets/reaction-selector/ui/ReactionSelector';

const queryClient = new QueryClient();

const meta: Meta<typeof ReactionSelector> = {
    component: ReactionSelector,
    title: 'widgets/ReactionSelector',
    tags: ['autodocs'],
    argTypes: {
        diaryId: { control: 'number' },
        userEmail: { control: 'text' },
        isHorizontal: { control: 'boolean' },
        isAddBtnVisible: { control: 'boolean' },
        token: { control: 'text' },
    },
};
export default meta;

type Story = StoryObj<typeof ReactionSelector>;

export const Default: Story = {
    args: {
        diaryId: 31,
        userEmail: "annawa6@naver.com",
        isHorizontal: true,
        isAddBtnVisible: true,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pbmpvb24iLCJlbWFpbCI6ImFubmF3YTZAbmF2ZXIuY29tLmNvbSIsImlhdCI6MTczMDY4MDc2MywiZXhwIjoxNzMwNjkxNTYzfQ.REWAk04BSzMz81HMBEJY67GYwwV2s1CBPLrFkNvYB48", // Replace with a valid token for real testing
    },
    render: (args) => (
        <QueryClientProvider client={queryClient}>
            <ReactionSelector {...args} />
        </QueryClientProvider>
    ),
};
