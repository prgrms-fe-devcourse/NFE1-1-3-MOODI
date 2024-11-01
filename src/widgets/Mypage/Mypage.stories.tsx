import type { Meta, StoryObj } from '@storybook/react';

import Mypage from './Mypage';

const meta: Meta<typeof Mypage> = {
  component: Mypage,
  title: 'widgets/ui/Mypage',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Mypage>;

export const Default: Story = {
  args: {},
};