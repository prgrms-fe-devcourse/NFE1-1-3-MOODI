import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectMusicContainer } from './SelectMusicContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

// Wrapper 컴포넌트
const WithQueryClient = (Story: React.ComponentType) => (
   <QueryClientProvider client={queryClient}>
       <Story />
   </QueryClientProvider>
);

const meta = {
   title: 'Widgets/SelectMusicContainer',
   component: SelectMusicContainer,
   decorators: [
       (Story) => WithQueryClient(Story)
   ],
   parameters: {
       layout: 'centered'
   },
   tags: ['autodocs']
} satisfies Meta<typeof SelectMusicContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
   args: {}
};