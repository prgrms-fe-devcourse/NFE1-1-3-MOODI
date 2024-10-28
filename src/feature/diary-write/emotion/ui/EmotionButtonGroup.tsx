import React from 'react';
import { Container } from './EmotionButtonGroup.styled';
import { EmotionButtonGroupProps, EMOTIONS } from '../model/type';
import { EmotionButton } from '../../../../entities/emotion';

// condition으로 네이밍 변경 해야합니다
export const EmotionButtonGroup = ({
    selectedEmotion, // 현재 선택되어있는 기분 상태
    onChange // 부모 컴포넌트로 선택된 기분 전달
}: EmotionButtonGroupProps) => {
    return (
        <Container>
            {EMOTIONS.map((emotion) => {
                return (
                    <EmotionButton
                        key={emotion}
                        isActive={selectedEmotion === emotion}
                        onClick={() => onChange(emotion)}
                    >
                        {emotion}
                    </EmotionButton>
                );
            })}
        </Container>
    );
};
