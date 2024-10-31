// components/Toast.tsx
import React from 'react';
import { ToastStyled, ToastMessageStlyed } from './Toast.styeld';
import { IoIosWarning, IoMdClose } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa6';
import { MdOutlineError } from 'react-icons/md';

interface ToastProps {
    children: React.ReactNode;
    variant: 'success' | 'warning' | 'error';
    onClose: () => void;
}

const IconStyle = {
    width: 35,
    height: 35,
    position: 'absolute' as const,
    left: 30,
    top: 20
};

const CloseStlye = {
    width: 35,
    height: 35,
    position: 'absolute' as const,
    right: 30,
    top: 20
};

const iconComponents = {
    success: <FaCheck style={{ ...IconStyle }} />,
    warning: <IoIosWarning style={{ ...IconStyle }} />,
    error: <MdOutlineError style={{ ...IconStyle }} />
};

const Toast = ({ children, variant = 'success', onClose }: ToastProps) => {
    const Icon = iconComponents[variant];

    return (
        <ToastStyled variant={variant}>
            {Icon}
            <ToastMessageStlyed>{children}</ToastMessageStlyed>
            <IoMdClose onClick={onClose} style={CloseStlye} />
        </ToastStyled>
    );
};

export default Toast;
