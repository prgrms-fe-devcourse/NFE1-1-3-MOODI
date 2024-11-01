import type { Meta, StoryObj } from '@storybook/react';

import Sign from './Sign';

const meta: Meta<typeof Sign> = {
  component: Sign,
  title: 'widgets/ui/Sign',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Sign>;

export const Default: Story = {
  args: {},
};