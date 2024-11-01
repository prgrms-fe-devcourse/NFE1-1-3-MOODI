import type { Meta, StoryObj } from '@storybook/react';

import Span from './Span';

const meta: Meta<typeof Span> = {
  component: Span,
  title: 'shared/ui/Span',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Span>;

export const Default: Story = {
  args: {children : "즐겁다!"},
};