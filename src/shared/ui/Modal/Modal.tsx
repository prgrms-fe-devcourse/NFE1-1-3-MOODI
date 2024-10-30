import React from 'react';
import Overlay from '../Overlay/Overlay';
import { ModalStyled, ModalContent } from './Modal.styled';
import { IoCloseOutline } from 'react-icons/io5';

interface ModalProps {
    children: React.ReactNode;
    clickEvent: React.MouseEventHandler<HTMLOrSVGElement>;
}

const Modal = ({ children, clickEvent }: ModalProps) => {
    return (
        <Overlay>
            <ModalStyled>
                <IoCloseOutline onClick={clickEvent} />
                <ModalContent>{children}</ModalContent>
            </ModalStyled>
        </Overlay>
    );
};

export default Modal;
