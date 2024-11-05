import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EmotionButtonList from './EmotionButtonList'; 
import { Emotions } from '../../../shared/model/EmotionEnum';

const meta: Meta<typeof EmotionButtonList> = {
  component: EmotionButtonList,
  title: 'Shared/EmotionButtonList',
  tags: ['autodocs'],
  argTypes: {
    isPrimary: {
      control: { type: 'boolean' },
      description: '대표 감정 : true, 서브 감정 : false ',
    },
    maxSelections: {
      control: { type: 'number' },
      description: '사용자가 선택할 수 있는 최대 감정 버튼 개수',
    },
    initialSelectedEmotions: {
      control: { 
        type: 'select',
        options: Object.values(Emotions), 
      },
      description: '초기 선택된 감정 목록입니다.\n\n' + 
      '배열의 크기가 maxSelections 수량보다 클 경우, 앞에서부터 maxSelections 수량만큼 설정됩니다.',
    },
    onSelectionChange: {    
      description: '선택된 감정 목록이 변경될 때 호출되는 콜백 함수',
      action: 'onSelectionChange',
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
    maxSelections: 3,
    isPrimary: true,
    initialSelectedEmotions: [], 
  },
  parameters: {
    docs: {
      description: {
        story: '대표 감정을 선택하기 위한 모드입니다.',
      },
    },
  },
};

export const PrimaryMode_Selected: Story = {
  args: {
    onSelectionChange: (selectedEmotions) => {
      console.log('selected:', selectedEmotions);
    },
    maxSelections: 3,
    isPrimary: true,
    initialSelectedEmotions: [Emotions.Happy, Emotions.Sad],
  },
  parameters: {
    docs: {
      description: {
        story: '대표 감정을 선택하기 위한 모드입니다.\n\n' +
        '선택된 감정의 초기값을 설정할 수 있습니다.\n\n' +
        '단, 배열의 길이가 maxSelections보다 클 경우 맨 앞의 항목만 선택됩니다. (ex. 기뻐요, 슬퍼요 선택 => 기뻐요)',
      },
    },
  },
};

export const SubEmotionMode_Default: Story = {
  args: {
    onSelectionChange: (selectedEmotions) => {
      console.log('selected:', selectedEmotions);
    },
    maxSelections: 3,
    isPrimary: false,
    initialSelectedEmotions: [],
  },
  parameters: {
    docs: {
      description: {
        story: '서브 감정을 선택하기 위한 모드입니다. 초기 선택된 감정을 설정할 수 있습니다.\n\n' +
        '단, 배열의 길이가 maxSelections보다 클 경우 앞에서부터 maxSelections번째 항목까지 감정이 설정됩니다.\n\n' +
        '(ex) maxSelections = 3으로 설정',
      },
    },
  },
};

export const SubEmotionMode_Selected: Story = {
  args: {
    onSelectionChange: (selectedEmotions) => {
      console.log('selected:', selectedEmotions);
    },
    maxSelections: 3,
    isPrimary: false,
    initialSelectedEmotions: [Emotions.Happy, Emotions.Sad, Emotions.Awkward, Emotions.Blank],
  },
  parameters: {
    docs: {
      description: {
        story: '서브 감정을 선택하기 위한 모드입니다.\n\n' +
        'initialSelectedEmotions에 감정 키워드 배열을 넘기면 초기 설정이 가능합니다.\n\n' +
        '배열의 길이가 maxSelections를 초과할 경우, 앞에서부터 maxSelections 개수만큼 설정됩니다. (ex. 기뻐요, 슬퍼요, 곤란해요 초기값 설정)',
      },
    },
  },
};