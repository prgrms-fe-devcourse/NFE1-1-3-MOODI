import type { Meta, StoryObj } from '@storybook/react';

import Chart from './Chart';

const meta: Meta<typeof Chart> = {
  component: Chart,
  title: 'shared/UI/CHART',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Chart>;

export const Default: Story = {
  args: {},
};