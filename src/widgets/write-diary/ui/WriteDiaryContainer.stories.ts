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
        // onDiarySubmit: (e) => {
        //     console.log(e);
        // }
    }
};
