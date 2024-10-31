import type { Meta, StoryObj } from '@storybook/react';
import MoveTopButton from './MoveTopButton';

const meta: Meta<typeof MoveTopButton> = {
    title: 'shared/UI/MoveTopButton',
    component: MoveTopButton,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof MoveTopButton>;

export const Default: Story = {};
