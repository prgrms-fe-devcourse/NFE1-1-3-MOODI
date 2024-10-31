import React from 'react';
import styled, { keyframes } from 'styled-components';

interface ToastStyledProps {
    variant: 'success' | 'warning' | 'error';
}

const slideIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    10% {
        opacity: 1;
        transform: translateY(0);
    }
    90% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-20px);
    }
`;

export const ToastStyled = styled.div<ToastStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    width: 514.05px;
    height: 77px;
    padding: 0 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 22px;
    letter-spacing: 0.7125px;
    position: relative;
    margin-bottom: 10px;
    background-color: ${({ variant }) => {
        switch (variant) {
            case 'success':
                return '#3BDE86';
            case 'warning':
                return '#FB4242';
            case 'error':
                return '#FED046';
            default:
                return '#ffffff';
        }
    }};
    animation: ${slideIn} 2s ease forwards;
`;
export const ToastMessageStlyed = styled.span`
    text-align: center;
    text-overflow: ellipsis;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    width: 350px;
`;
