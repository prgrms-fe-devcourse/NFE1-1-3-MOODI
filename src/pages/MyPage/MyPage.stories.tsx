import type { Meta, StoryObj } from '@storybook/react';

import MyPage from './MyPage';

const meta: Meta<typeof MyPage> = {
  component: MyPage,
  title: 'pages/UI/MyPage',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof MyPage>;

export const Default: Story = {
  args: {},
};