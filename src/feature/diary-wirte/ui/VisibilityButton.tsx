import React from 'react';
import { Container, StyledButton, StyledImg } from './VisibilityButton.styled';
import { VisibilityButtonProps } from '../model/type';

const VisibilityButton = ({ isPublic, isActive, onClick }: VisibilityButtonProps) => {
    return (
        <Container>
            <StyledButton isActive={isActive} onClick={onClick} type="button" aria-label={isPublic ? '공개' : '비공개'}>
                <StyledImg src={isPublic ? '/public.svg' : '/private.svg'} alt={isPublic ? '공개' : '비공개'} />
            </StyledButton>
        </Container>
    );
};

export default VisibilityButton;
