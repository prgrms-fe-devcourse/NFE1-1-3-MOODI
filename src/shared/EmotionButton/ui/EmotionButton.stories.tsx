import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import EmotionButton from './EmotionButton';
import { Emotions } from '../../model/EmotionEnum'; // Emotions 열거형 import

const meta: Meta<typeof EmotionButton> = {
  component: EmotionButton,
  title: 'Shared/UI/EmotionButton',
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }, // 클릭 액션을 로그로 남기기
  },
};

export default meta;

type Story = StoryObj<typeof EmotionButton>;

export const Default: Story = {
  args: {
    emotion: Emotions.Happy,
    initialClicked: false, 
    onClick: () => {}, 
  },
};

export const Clicked: Story = {
  args: {
    emotion: Emotions.Sad, 
       initialClicked: true, 
    onClick: () => {}, 
  },
};