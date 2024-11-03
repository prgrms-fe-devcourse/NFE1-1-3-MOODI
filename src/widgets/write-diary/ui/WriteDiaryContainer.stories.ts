import type { Meta, StoryObj } from '@storybook/react';
import { WriteDiaryContainer } from './WriteDiaryContainer';

const meta: Meta<typeof WriteDiaryContainer> = {
    title: 'Widgets/UI/WriteDiaryContainer',
    component: WriteDiaryContainer,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof WriteDiaryContainer>;

export const Default: Story = {
    args: {
        onDiarySubmit: (diaryData) => {
            console.log(diaryData); // 다이어리 데이터가 제출될 때 콘솔에 출력
        },
        initialDate: new Date('2024 10 11')
    }
};

export const Editing: Story = {
    args: {
        onDiarySubmit: (diaryData) => {
            console.log(diaryData); // 다이어리 데이터가 제출될 때 콘솔에 출력
        },
        initialDate: new Date()
        // initialDate: new Date('2024 10 11')
    }
};
