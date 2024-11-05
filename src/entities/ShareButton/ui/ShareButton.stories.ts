import type { Meta, StoryObj } from '@storybook/react';
import { ShareButton } from './ShareButton';

const meta: Meta<typeof ShareButton> = {
    title: 'Entities/ShareButton/ShareButton',
    component: ShareButton,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ShareButton>;

export const Default: Story = {
    args: {}
};
