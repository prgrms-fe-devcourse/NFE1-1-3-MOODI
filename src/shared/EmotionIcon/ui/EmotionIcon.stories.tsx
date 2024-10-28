import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EmotionIcon from './EmotionIcon';
import { Emotions } from '../model/EmotionEnum';

const meta: Meta<typeof EmotionIcon> = {
  title: 'Shared/EmotionIcon',
  component: EmotionIcon,
  tags: ['autodocs'],
  argTypes: {
    emotion : {
        control : {
            type : 'select',
            options : Object.values(Emotions),
          },
          description: '감정 Enum값 입력 (ex. Emotions.Happy)',
    },
    width : {
        control : 'text',
        description : '이모티콘 이미지 가로 스타일'
    },
    height : {
        control : 'text',
        description : '이모티콘 이미지 세로 스타일'
    }

  },
};

export default meta;
type Story = StoryObj<typeof EmotionIcon>;

export const Default: Story = {
    args: {
      emotion : Emotions.Happy,
      width : '100px',
      height : '100px',
    },
};
  

export const Sad: Story = {
  args: {
    emotion : Emotions.Sad,
    width : '100px',
    height : '100px',
  },
};

export const Grateful: Story = {
  args: {
    emotion : Emotions.Grateful,
    width : '100px',
    height : '100px',
  },
};


