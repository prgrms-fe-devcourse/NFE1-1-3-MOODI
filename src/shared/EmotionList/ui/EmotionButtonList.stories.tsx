import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import EmotionButtonList from './EmotionButtonList';

const meta: Meta<typeof EmotionButtonList> = {
  component: EmotionButtonList,
  title: 'Shared/ui/EmotionButtonList',
  tags: ['autodocs'],
  argTypes: {
    onSelectionChange: {
        description: '선택된 감정 리스트가 변경될 때 호출되는 함수입니다.\n 이를 활용해 선택된 버튼 목록을 확인할 수있습니다.\n (StoryBook에서는 콘솔로 출력 확인 가능)',
      },
  },
};
export default meta;

type Story = StoryObj<typeof EmotionButtonList>;

export const Default: Story = {
    args: {
      onSelectionChange: (selectedEmotions) => {
        console.log('selected:', selectedEmotions);
      },
    },
  };
