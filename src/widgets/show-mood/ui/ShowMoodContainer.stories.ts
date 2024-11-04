import type { Meta, StoryObj } from '@storybook/react';
import { ShowMoodContainer } from './ShowMoodContainer';

const meta: Meta<typeof ShowMoodContainer> = {
    title: 'Widgets/UI/ShowMoodContainer',
    component: ShowMoodContainer,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ShowMoodContainer>;

export const VeryGood: Story = {
    args: {
        mood: '매우 좋음'
    }
};
export const Good: Story = {
    args: {
        mood: '좋음'
    }
};
export const Normal: Story = {
    args: {
        mood: '보통'
    }
};
export const Bad: Story = {
    args: {
        mood: '나쁨'
    }
};
export const VeryBad: Story = {
    args: {
        mood: '매우 나쁨'
    }
};
