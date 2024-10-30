// visibility-button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {DiaryVisibilityControls} from './DiaryVisibilityControls';

const meta: Meta<typeof DiaryVisibilityControls> = {
    title: 'Widgets/UI/DiaryVisibilityControls',
    component: DiaryVisibilityControls,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DiaryVisibilityControls>;

export const Public: Story = {
    args: {
        isPublic: true,
        onChange: action('visibility changed')
    }
};

export const Private: Story = {
    args: {
        isPublic: false,
        onChange: action('visibility changed')
    }
};