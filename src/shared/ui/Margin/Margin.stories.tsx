import type { Meta, StoryObj } from '@storybook/react';

import Margin from './Margin';

const meta: Meta<typeof Margin> = {
  component: Margin,
  title: 'shared/ui/Margin',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Margin>;

export const Default: Story = {
  args: {},
};