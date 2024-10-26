// visibility-button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import {VisibilityButton} from './VisibilityButton';

const meta: Meta<typeof VisibilityButton> = {
    title: 'Features/DiaryVisibility/VisibilityButton',
    component: VisibilityButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VisibilityButton>;

export const Public: Story = {
    args: {
        isPublic: true,
        isActive: true,
        onClick: () => console.log('공개 버튼 클릭'),
    },
};

export const Private: Story = {
    args: {
        isPublic: false,
        isActive: false,
        onClick: () => console.log('비공개 버튼 클릭'),
    },
};