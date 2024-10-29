import React from 'react';
import { Container } from './DiaryVisibilityControls.styled';
import { VisibilityButton } from '../../../features/diary-write';
import { DiaryVisibilityControlsProps } from '../model/type';

export const DiaryVisibilityControls = ({
    isPublic,
    onChange
}: DiaryVisibilityControlsProps) => {
    return (
        <Container>
            <VisibilityButton
                isPublic
                isActive={isPublic}
                onClick={() => onChange(true)}
            />
            <VisibilityButton
                isPublic={false}
                isActive={!isPublic}
                onClick={() => onChange(false)}
            />
        </Container>
    );
};
