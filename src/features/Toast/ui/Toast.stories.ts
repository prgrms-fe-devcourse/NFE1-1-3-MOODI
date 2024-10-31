import type { Meta, StoryObj } from '@storybook/react';

import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'features/UI/Toast',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {children :"화이팅"},
};

export const Waring: Story = {
    args: {children :"화이팅",variant: "warning"},
  };

  export const Error: Story = {
    args: {children :"화이팅", variant : 'error'},
  };