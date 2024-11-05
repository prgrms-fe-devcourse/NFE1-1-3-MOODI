// import React from 'react';
// import type { Meta, StoryObj } from '@storybook/react';
// import DiaryText from './DiaryText';

// const meta: Meta<typeof DiaryText> = {
//   component: DiaryText,
//   title: 'Widgets/DiaryText', 
//   tags: ['autodocs'],
//   argTypes: {
//     titleDate: { 
//         control: 'text',
//         description : '일기 주제 날짜' 
//       },
//       title: { 
//         control: 'text',  
//         description : '일기 제목' 
//       },
//       author: { 
//         control: 'text', 
//         description : '작성자 이름' 
//       },
//       updateDate: { 
//         control: 'text',
//         description : '일기를 작성한 날짜' 
//       },
//       diaryContent: { 
//         control: 'text',  
//         description : '일기 내용' 
//       },
//       isPublic: { 
//         control: 'boolean',  
//       },
//     onVisibilityChange: { action: 'visibilityChanged' }, 
//   },
// };

// export default meta;

// type Story = StoryObj<typeof DiaryText>;

// export const Default: Story = {
//   args: {
//     titleDate: '2024-11-05',
//     title: '오늘 나의 일기',
//     author: '홍길동',
//     updateDate: '2024-11-05',
//     diaryContent: `오늘은끝나고 카페에 가야지.\n스타벅스 뱅쇼를 사먹어야지.\n신난다.\n오예\n몇시에 갈까`,
//     isPublic: true, 
//     onVisibilityChange: (newVisibility: boolean) => {
//     },
//   },
// };
