// EmotionButtonGroup.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ConditionButtonGroup } from './ConditionButtonGroup';
import { CONDITIONS } from '../model/type';

const meta = {
    title: 'Features/DiaryWrite/ConditionButtonGroup',
    component: ConditionButtonGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        selectedCondition: {
            control: 'select',
            options: [...CONDITIONS, null],
            description: '현재 선택되어있는 기분',
        },
        onConditionChange: {
            description: '기분 버튼 클릭시 호출 : 부모 컴포넌트로 선택된 기분 전달'
        }
    }
} satisfies Meta<typeof ConditionButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 - 초기 감정 선택되지 않은 상태
export const Default: Story = {
    args: {
        selectedCondition: null,
        onConditionChange: (condition) => {
           console.log(condition);
        },
    },
};

// 감정 선택된 상태
export const Selected: Story = {
    args: {
        selectedCondition: '보통',
        onConditionChange: (condition) => {
            console.log(condition);
        },
    },
};

export const Interactive: Story = {
    args: {
        selectedCondition: null,
        onConditionChange: (condition) => {
            alert(`${condition}`);
        },
    },
    parameters: {
        docs: {
            description: {
                story: '버튼 클릭',
            },
        },
    },
};