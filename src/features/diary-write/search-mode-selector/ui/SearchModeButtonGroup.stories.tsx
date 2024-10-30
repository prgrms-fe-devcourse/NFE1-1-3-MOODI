// EmotionButtonGroup.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { SearchModeButtonGroup } from './SearchModeButtonGroup';
import { SEARCH_TYPE } from '../model/type';

const meta = {
    title: 'Features/DiaryWrite/SearchModeButtonGroup',
    component: SearchModeButtonGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        selectedType: {
            control: 'select',
            options: Object.values(SEARCH_TYPE),
            description: '현재 선택되어있는 기분',
        },
        onChange: {
            description: '기분 버튼 클릭시 호출 : 부모 컴포넌트로 선택된 기분 전달'
        }
    }
} satisfies Meta<typeof SearchModeButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 - gpt
export const Default: Story = {
    args: {
        selectedType: SEARCH_TYPE.GPT,
        onChange: (condition) => {
           console.log(condition);
        },
    },
};

// 유저 검색
export const Selected: Story = {
    args: {
        selectedType: SEARCH_TYPE.USER,
        onChange: (condition) => {
            console.log(condition);
        },
    },
};