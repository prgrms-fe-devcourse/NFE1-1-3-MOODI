import React from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

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
