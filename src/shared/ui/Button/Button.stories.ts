import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Shared/UI/Button',
    component: Button,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: '로그인',
        isActive: true,
        hasBorder: false,
        borderradius: '10px',
        height: '44px',
        width: '300px',
        fontSize: '16px',
        onClick: () => console.log('Button clicked')
    }
};

export const HasBorder: Story = {
    args: {
        children: '회원가입',
        isActive: true,
        hasBorder: true,
        height: '44px',
        width: '300px',
        fontSize: '16px',
        onClick: () => console.log('Button clicked')
    }
};

export const DeActive: Story = {
    args: {
        children: '다음',
        isActive: false,
        hasBorder: false,
        height: '44px',
        width: '300px',
        fontSize: '16px',
        onClick: () => console.log('Button clicked')
    }
};
