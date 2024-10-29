import type { Meta, StoryObj } from '@storybook/react';
import SubTitle from './SubTitle';

const meta: Meta<typeof SubTitle> = {
    title: 'Page/LandingPage/SubTitle',
    component: SubTitle,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SubTitle>;

export const Default: Story = {
    args: {
        subTitle: `무디에서 감정을 담은 일기를 작성해보세요.`
    }
};
