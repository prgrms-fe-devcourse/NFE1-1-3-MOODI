import type { Meta, StoryObj } from '@storybook/react';
import { KeywordButton } from './KeywordButton';
import { Emotions } from '../../../shared/model/EmotionEnum';

const meta: Meta<typeof KeywordButton> = {
    title: 'Entities/Keyword/KeywordButton',
    component: KeywordButton,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof KeywordButton>;

export const Active: Story = {
    args: {
        isActive: true,
        selectedEmotion: Emotions.Happy
    }
};

export const DeActive: Story = {
    args: {
        isActive: false,
        selectedEmotion: Emotions.Happy
    }
};

export const NothingSelected: Story = {
    args: {
        isActive: false,
        selectedEmotion: null
    }
};
