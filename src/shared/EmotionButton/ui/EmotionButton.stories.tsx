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

// 기본 스토리
export const Default: Story = {
  args: {
    emotion: Emotions.Happy, // Emotions 열거형에서 감정 값 사용
    initialClicked: false, // 기본값으로 클릭되지 않은 상태
    onClick: () => {}, // 기본 onClick 핸들러
  },
};

// 클릭된 상태 스토리
export const Clicked: Story = {
  args: {
    emotion: Emotions.Sad, // Emotions 열거형에서 감정 값 사용
    initialClicked: true, // 클릭된 상태
    onClick: () => {}, // 기본 onClick 핸들러
  },
};