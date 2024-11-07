import type { Meta, StoryObj } from '@storybook/react';

import ErrorPage from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
  component: ErrorPage,
  title: 'ErrorPage',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const Default: Story = {
  args: {},
};