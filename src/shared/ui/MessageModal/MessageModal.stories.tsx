import type { Meta, StoryObj } from '@storybook/react';

import MessageModal from './MessageModal';

const meta: Meta<typeof MessageModal> = {
  component: MessageModal,
  title: 'MessageModal',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof MessageModal>;

export const Default: Story = {
  args: {},
};