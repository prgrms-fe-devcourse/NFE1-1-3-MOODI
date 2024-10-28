import React from 'react';
import { Container, StyledButton } from './EmotionButton.styled';
import { EmotionButtonProps } from '../model/type';

export const EmotionButton = ({
    children,
    isActive,
    onClick
}: EmotionButtonProps) => {
    return (
        <Container>
            <StyledButton isActive={isActive} onClick={onClick} type="button">
                {children}
            </StyledButton>
        </Container>
    );
};
