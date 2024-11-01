import type { Meta, StoryObj } from '@storybook/react';

import ScrollDot from './ScrollDot';

const meta: Meta<typeof ScrollDot> = {
  component: ScrollDot,
  title: 'shared/ui/ScrollDot',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ScrollDot>;

export const TrueDot: Story = {
  args: {
    isActive : false
  },
};

export const FalseDot: Story = {
    args: {
        isActive : true
    },
  };