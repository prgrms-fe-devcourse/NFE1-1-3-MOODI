import type { Meta, StoryObj } from '@storybook/react';

import scrollDotContainer from './ScrollDotContainer';

const meta: Meta<typeof scrollDotContainer> = {
  component: scrollDotContainer,
  title: 'entities/ui/scrollDotContainer',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof scrollDotContainer>;


const test =  [{isActive : true},{isActive : false},{isActive :false}]
const test2 =  [{isActive : true},{isActive : true},{isActive :false}]

export const Default: Story = {
  args: {
    dots : test
  },
};

export const Sceonadary: Story = {
  args: {
    dots : test2
  },
};



