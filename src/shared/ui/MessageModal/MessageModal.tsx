import React, { useState } from 'react';
import {
    StyledButtonContainer,
    StyledMessageModal,
    StyledMessageText
} from './MessageModal.styled';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

interface MessageModalProps {
    message: string;
    onClick: () => void;
    isCancelButtonVisible?: boolean;
}

/** 사용자에게 메시지를 보여주고 확인/취소를 선택할 수 있도록하는 컴포넌트입니다. */
const MessageModal = ({
    message,
    onClick,
    isCancelButtonVisible
}: MessageModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = () => {
        onClick();
        closeModal();
    };

    const handleCancel = () => {
        closeModal();
    };

    return (
        <div>
            <Button
                onClick={() => setIsModalOpen(true)}
                fontSize="16px"
                height="40px"
                width="150px"
                borderradius="5px"
            >
                모달 열기
            </Button>

            {isModalOpen && (
                <Modal clickEvent={closeModal}>
                    <StyledMessageModal>
                        <StyledMessageText>{message}</StyledMessageText>
                        <StyledButtonContainer>
                            <Button
                                onClick={handleConfirm}
                                fontSize="16px"
                                height="40px"
                                width="45%"
                                borderradius="5px"
                            >
                                확인
                            </Button>

                            {isCancelButtonVisible && (
                                <Button
                                    onClick={handleCancel}
                                    fontSize="16px"
                                    height="40px"
                                    width="45%"
                                    borderradius="5px"
                                    hasBorder
                                >
                                    취소
                                </Button>
                            )}
                        </StyledButtonContainer>
                    </StyledMessageModal>
                </Modal>
            )}
        </div>
    );
};

export default MessageModal;
