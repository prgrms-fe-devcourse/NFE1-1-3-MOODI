// EmotionButtonGroup.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { EmotionButtonGroup } from './EmotionButtonGroup';
import { EMOTIONS } from '../model/type';

const meta = {
    title: 'Features/DiaryWrite/EmotionButtonGroup',
    component: EmotionButtonGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        selectedEmotion: {
            control: 'select',
            options: [...EMOTIONS, null],
            description: '현재 선택되어있는 기분',
        },
        onChange: {
            description: '기분 버튼 클릭시 호출 : 부모 컴포넌트로 선택된 기분 전달'
        }
    }
} satisfies Meta<typeof EmotionButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 - 초기 감정 선택되지 않은 상태
export const Default: Story = {
    args: {
        selectedEmotion: null,
        onChange: (emotion) => {
           console.log(emotion);
        },
    },
};

// 감정 선택된 상태
export const Selected: Story = {
    args: {
        selectedEmotion: '보통',
        onChange: (emotion) => {
            console.log(emotion);
        },
    },
};

export const Interactive: Story = {
    args: {
        selectedEmotion: null,
        onChange: (emotion) => {
            alert(`${emotion}`);
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