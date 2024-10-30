

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ReactionButton from './ReactionButton';
import { Emotions } from '../../../shared/model/EmotionEnum';

const meta: Meta<typeof ReactionButton> = {
  component: ReactionButton,
  title: 'shared/ReactionButton',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ReactionButton>;

export const Default: Story = {
    args: {
        emotion: Emotions.Happy, 
        reactionCnt: 10,  
        isClicked : true,
        isHorizontal : true,             
      },
};