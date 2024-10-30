import type { Meta, StoryObj } from '@storybook/react';
import Chart from './Chart';

const meta: Meta<typeof Chart> = {
  component: Chart,
  title: 'entities/UI/CHART',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Chart>;

const dailyEmotionData = [
  { day: 'Mon' as const, mood: null },
  { day: 'Tue' as const, mood: '나쁨' },
  { day: 'Wed' as const, mood: '나쁨' },
  { day: 'Thu' as const, mood: null },
  { day: 'Fri' as const, mood: null },
  { day: 'Sat' as const, mood: null },
  { day: 'Sun' as const, mood: null },
];


export const Default: Story = {
  args: {
    data: dailyEmotionData,
  },
};
