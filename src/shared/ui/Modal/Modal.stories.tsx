import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import React from 'react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'shared/ui/Modal',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children : <>즐겁다</>
  },
};