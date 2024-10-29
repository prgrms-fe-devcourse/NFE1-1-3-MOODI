// features/diary-write/ui/EmotionButton/EmotionButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ConditionButton } from './ConditionButton';

const meta = {
 title: 'Entities/Condition/ConditionButton',
 component: ConditionButton,
 parameters: {
   layout: 'centered',
 },
 tags: ['autodocs'],
} satisfies Meta<typeof ConditionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
 args: {
   children: '좋음',
   isActive: true,
   onClick: () => alert('좋음'),
 },
};

export const Inactive: Story = {
 args: {
   children: '나쁨',
   isActive: false,
   onClick: () => alert('나쁨'),
 },
};
