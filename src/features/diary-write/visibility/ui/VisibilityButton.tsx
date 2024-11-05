import React from 'react';
import { Container, StyledButton, StyledImg } from './VisibilityButton.styled';
import { VisibilityButtonProps } from '../model/type';
import privateIcon from '@/shared/assets/private.svg';
import publickIcon from '@/shared/assets/public.svg';

export const VisibilityButton = ({
    isPublic,
    isActive,
    onClick
}: VisibilityButtonProps) => {
    return (
        <Container>
            <StyledButton
                isActive={isActive}
                onClick={onClick}
                type="button"
                aria-label={isPublic ? '공개' : '비공개'}
            >
                <StyledImg
                    src={isPublic ? `${publickIcon}` : `${privateIcon}`}
                    alt={isPublic ? '공개' : '비공개'}
                />
            </StyledButton>
        </Container>
    );
};
