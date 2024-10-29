import type { Meta, StoryObj } from '@storybook/react';

import EmotionChart from './EmotionChart';

const meta: Meta<typeof EmotionChart> = {
  component: EmotionChart,
  title: 'entities/ui/EmotionChart',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof EmotionChart>;

export const Default: Story = {
  args: {},
};