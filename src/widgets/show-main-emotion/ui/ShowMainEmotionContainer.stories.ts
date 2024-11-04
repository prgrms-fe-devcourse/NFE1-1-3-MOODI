import type { Meta, StoryObj } from '@storybook/react';
import { ShowMainEmotionContainer } from './ShowMainEmotionContainer';
import { Emotions } from '@/shared/model/EmotionEnum';

const meta: Meta<typeof ShowMainEmotionContainer> = {
    title: 'Widgets/UI/ShowMainEmotionContainer',
    component: ShowMainEmotionContainer,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ShowMainEmotionContainer>;

export const Default: Story = {
    args: {
        emotion: Emotions.Happy
    }
};
