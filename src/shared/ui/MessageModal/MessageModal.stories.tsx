// import React, { useState } from 'react';
// import type { Meta, StoryObj } from '@storybook/react';

// import MessageModal from './MessageModal';
// import Button from '../Button/Button';  // Button 컴포넌트 경로 확인

// const meta: Meta<typeof MessageModal> = {
//   component: MessageModal,
//   title: 'shared/ui/MessageModal',
//   tags: ['autodocs'],
//   parameters: {
//   },
//   argTypes: {
//     message: {
//       control: 'text',
//       description: '메시지 박스에 표시될 문구',
//       defaultValue: '이 파일을 삭제하시겠습니까?',  
//     },
//     onClick: {
//       action: 'confirmed',
//       description: '확인 버튼을 클릭했을 때 실행되는 콜백 함수',
//     },
//     isCancelButtonVisible: {
//       control: 'boolean',
//       description: '취소 버튼을 표시할지 여부',
//       defaultValue: true,  
//     },
//   },
// };
// export default meta;

// type Story = StoryObj<typeof MessageModal>;

// const Template: Story = (args) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsModalOpen(true)} fontSize="16px" height="40px" width="150px" borderradius="5px">
//         모달 열기
//       </Button>

//       <MessageModal
//         {...args}
//         isModalOpen={isModalOpen}
//         setIsModalOpen={setIsModalOpen}
//       />
//     </div>
//   );
// };

// export const Default: Story = {
//   args: {
//     message: '이 파일을 삭제하시겠습니까?',
//     onClick: () => console.log('삭제 확인!'),  
//     isCancelButtonVisible: true,  
//   },
// };

// export const ConfirmOnly: Story = {
//   args: {
//     message: '정말로 삭제하시겠습니까?',  
//     onClick: () => console.log('삭제 확인!'),  
//     isCancelButtonVisible: false, 
//   },
// };
