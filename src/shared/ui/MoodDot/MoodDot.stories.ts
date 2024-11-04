import type { Meta, StoryObj } from '@storybook/react';

import MoodDot from './MoodDot';

const meta: Meta<typeof MoodDot> = {
    component: MoodDot,
    title: 'shared/ui/MoodDot',
    tags: ['autodocs'],
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof MoodDot>;

export const VeryGood: Story = {
    args: {
        mood: '매우 좋음',
        isActive: true
    }
};

export const Good: Story = {
    args: {
        mood: '좋음',
        isActive: true
    }
};

export const Normal: Story = {
    args: {
        mood: '보통',
        isActive: true
    }
};

export const Bad: Story = {
    args: {
        mood: '나쁨',
        isActive: true
    }
};

export const VeryBad: Story = {
    args: {
        mood: '매우 나쁨',
        isActive: true
    }
};
