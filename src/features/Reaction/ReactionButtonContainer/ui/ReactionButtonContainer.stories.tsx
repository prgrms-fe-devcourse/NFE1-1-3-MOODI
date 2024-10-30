import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ReactionButtonContainer from './ReactionButtonContainer';
import { Emotions } from '../../../../shared/model/EmotionEnum';

const meta: Meta<typeof ReactionButtonContainer> = {
  component: ReactionButtonContainer,
  title: 'features/ReactionButtonContainer',
  tags: ['autodocs'],
  argTypes: {   
    isHorizontal: {
      description: '버튼 배열 방식: true일 경우 가로 배열, false일 경우 세로 배열입니다.',
    },
    isAddBtnVisible: {
      description: '이모티콘 추가 버튼을 추가하세요 (기본 : false)',
    },
    reactions: {
      description: '감정 버튼 목록입니다. 각 버튼의 감정, 반응 수, 클릭 상태를 포함합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReactionButtonContainer>;

export const Default: Story = {
  args: {
    isHorizontal: true,
    isAddBtnVisible: true,
    reactions: [
      { emotion: Emotions.Happy, reactionCnt: 10, isClicked: false },
      { emotion: Emotions.Angry, reactionCnt: 5, isClicked: false },
      { emotion: Emotions.Annoyed, reactionCnt: 8, isClicked: false },
      { emotion: Emotions.Awkward, reactionCnt: 10, isClicked: false },
      { emotion: Emotions.Blank, reactionCnt: 5, isClicked: false },
      { emotion: Emotions.Comfortable, reactionCnt: 8, isClicked: false },
      { emotion: Emotions.Confident, reactionCnt: 10, isClicked: false },
      { emotion: Emotions.Depressed, reactionCnt: 5, isClicked: false },
      { emotion: Emotions.Disappointed, reactionCnt: 8, isClicked: false },
      { emotion: Emotions.Embarrassed, reactionCnt: 10, isClicked: false },
      { emotion: Emotions.Excited, reactionCnt: 5, isClicked: false },
      { emotion: Emotions.Fun, reactionCnt: 8, isClicked: false },
      { emotion: Emotions.Grateful, reactionCnt: 10, isClicked: false },
      { emotion: Emotions.Lonely, reactionCnt: 5, isClicked: false },
      { emotion: Emotions.Lovely, reactionCnt: 8, isClicked: false },
      { emotion: Emotions.Not_sure, reactionCnt: 10, isClicked: false },
      { emotion: Emotions.Sad, reactionCnt: 8, isClicked: false },
    ],
    onReactionUpdate: (emotion: Emotions, count: number) => {
      console.log(`Emotion: ${emotion}, Updated Count: ${count}`);
    }, 
  },
  
  play: ({ args }) => {
    const logReactionUpdate = (emotion: Emotions, count: number) => {
      console.log(`Updated ${emotion}: ${count}`);
    };

    args.onReactionUpdate = logReactionUpdate;
  },
};

export const Vertical: Story = {
  args: {
    isHorizontal: false,
    isAddBtnVisible: true,
    reactions: [
      { emotion: Emotions.Angry, reactionCnt: 3, isClicked: false },
      { emotion: Emotions.Surprised, reactionCnt: 12, isClicked: false },
    ],
    onReactionUpdate: (emotion: Emotions, count: number) => {
      console.log(`Emotion: ${emotion}, Updated Count: ${count}`);
    }, 
  },
};