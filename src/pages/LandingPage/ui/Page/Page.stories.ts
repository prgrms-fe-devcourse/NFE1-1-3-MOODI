import type { Meta, StoryObj } from '@storybook/react';
import { LandingPage } from './Page';

const meta: Meta<typeof LandingPage> = {
    title: 'Page/LandingPage/Page',
    component: LandingPage,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: '미완성된 랜딩페이지 입니다.'
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
    args: {}
};
