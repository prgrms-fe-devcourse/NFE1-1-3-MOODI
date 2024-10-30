import type { Meta, StoryObj } from '@storybook/react';

import ReactionAddButton from './ReactionAddButton';

const meta: Meta<typeof ReactionAddButton> = {
  component: ReactionAddButton,
  title: 'shared/ReactionAddButton',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ReactionAddButton>;

export const Default: Story = {
  args: {},
};