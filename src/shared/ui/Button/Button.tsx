import React from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

const Button = ({
    children,
    isActive = true,
    hasBorder = false,
    borderradius = '10px',
    height,
    width,
    fontSize,
    onClick,
    type
}: ButtonProps) => {
    return (
        <StyledButton
            isActive={isActive}
            hasBorder={hasBorder}
            borderradius={borderradius}
            height={height}
            width={width}
            fontSize={fontSize}
            onClick={onClick}
            type={type}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
