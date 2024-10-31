import type { Meta, StoryObj } from '@storybook/react';
import { EmotionButtonGroup } from './EmotionButtonGroup';
import { Emotions } from '@/shared/model/EmotionEnum'; // Emotions 타입을 임포트

const meta: Meta<typeof EmotionButtonGroup> = {
    title: 'Features/DiaryWrite/EmotionButtonGroup',
    component: EmotionButtonGroup,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof EmotionButtonGroup>;

export const Default: Story = {
    args: {
        initialKeywords: [null, null, null, null, null],
        onKeywordsChange: (e) => {
            console.log(e);
        }
    }
};
