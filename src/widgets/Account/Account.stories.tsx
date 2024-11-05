import type { Meta, StoryObj } from '@storybook/react';

import Account from './Account';

const meta: Meta<typeof Account> = {
  component: Account,
  title: 'Account',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Account>;

export const Default: Story = {
  args: {},
};