import type { Meta, StoryObj } from '@storybook/react';

import Info from './Info';

const meta: Meta<typeof Info> = {
  component: Info,
  title: 'SHARED/UI/Info',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Info>;

export const Default: Story = {
  args: {children : "피고내"},
};