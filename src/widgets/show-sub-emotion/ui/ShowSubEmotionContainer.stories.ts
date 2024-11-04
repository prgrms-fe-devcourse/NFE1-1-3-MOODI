import type { Meta, StoryObj } from '@storybook/react';
import { ShowSubEmotionContainer } from './ShowSubEmotionContainer';
import { Emotions } from '@/shared/model/EmotionEnum';

const meta: Meta<typeof ShowSubEmotionContainer> = {
    title: 'Widgets/UI/ShowSubEmotionContainer',
    component: ShowSubEmotionContainer,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ShowSubEmotionContainer>;

export const Default: Story = {
    args: {
        subEmotions: [
            Emotions.Angry,
            Emotions.Sad,
            Emotions.Blank,
            Emotions.Excited
        ]
    }
};
