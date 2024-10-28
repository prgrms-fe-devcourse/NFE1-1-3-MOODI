// features/diary-write/ui/EmotionButton/EmotionButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { EmotionButton } from './EmotionButton';

const meta = {
 title: 'Entities/Emotion/EmotionButton',
 component: EmotionButton,
 parameters: {
   layout: 'centered',
 },
 tags: ['autodocs'],
} satisfies Meta<typeof EmotionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
 args: {
   children: '좋음',
   isActive: true,
   onClick: () => alert('보통 감정 클릭'),
 },
};

export const Inactive: Story = {
 args: {
   children: '나쁨',
   isActive: false,
   onClick: () => alert('나쁨 감정 클릭!'),
 },
};
