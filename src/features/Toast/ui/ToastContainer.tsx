import React from 'react';
import { useToastStore } from '../hooks/useToastStore';
import Toast from './Toast';
import { ToastContainerStyled } from './toastContainer.styled';

const ToastContainer = () => {
    const { toasts, removeToast } = useToastStore();

    return (
        <ToastContainerStyled>
            {toasts
                .slice()
                .reverse()
                .map((toast) => (
                    <Toast
                        key={toast.id}
                        variant={toast.variant}
                        onClose={() => removeToast(toast.id)}
                    >
                        {toast.message}
                    </Toast>
                ))}
        </ToastContainerStyled>
    );
};

export default ToastContainer;
