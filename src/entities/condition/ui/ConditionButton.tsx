import React from 'react';
import { Container, StyledButton } from './ConditionButton.styled';
import { ConditionButtonProps } from '../model/type';

export const ConditionButton = ({
    children,
    isActive,
    onClick
}: ConditionButtonProps) => {
    return (
        <Container>
            <StyledButton isActive={isActive} onClick={onClick} type="button">
                {children}
            </StyledButton>
        </Container>
    );
};
