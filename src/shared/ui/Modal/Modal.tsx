import React from 'react';
import Overlay from '../Overlay/Overlay';
import { ModalStyled, ModalContent } from './Modal.styled';
import { IoCloseOutline } from 'react-icons/io5';

interface ModalProps {
    children: React.ReactNode;
    clickEvent: () => void;
}

const Modal = ({ children, clickEvent }: ModalProps) => {
    return (
        <Overlay>
            <ModalStyled>
                <button onClick={clickEvent} type="button">
                    <IoCloseOutline />
                </button>
                <ModalContent>{children}</ModalContent>
            </ModalStyled>
        </Overlay>
    );
};

export default Modal;
