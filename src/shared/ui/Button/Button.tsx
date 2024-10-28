import React from 'react';
import { StyledButton } from './Button.styled';

export interface ButtonProps {
    children: React.ReactNode;
    fontSize: string;
    isActive: boolean;
    hasBorder: boolean;
    height: string;
    width: string;
    onClick: () => void;
}

const Button = ({
    children,
    isActive = true,
    hasBorder = false,
    height,
    width,
    fontSize,
    onClick
}: ButtonProps) => {
    return (
        <StyledButton
            isActive={isActive}
            hasBorder={hasBorder}
            height={height}
            width={width}
            fontSize={fontSize}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
