import type { Meta, StoryObj } from '@storybook/react';
import LandingTitle from './LandingTitle';

const meta: Meta<typeof LandingTitle> = {
    title: 'Page/LandingPage/LandingTitle',
    component: LandingTitle,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof LandingTitle>;

export const Default: Story = {
    args: {
        title: `Life's playlist, \nYour Story`
    }
};
