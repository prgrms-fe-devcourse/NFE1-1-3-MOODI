import React from 'react';
import {
    Container,
    EmotionContainer,
    EmotionsContainer
} from './ShowSubEmotionContainer.styled';
import { ShowSubEmotionContainerProps } from '../model/type';
import { EmotionIcon } from '@/shared/EmotionIcon/ui/EmotionIcon';
import { getEmotionInfo } from '@/shared/model/EmotionEnum';

export const ShowSubEmotionContainer = ({
    subEmotions
}: ShowSubEmotionContainerProps) => {
    return (
        <Container>
            서브 감정 키워드
            <EmotionsContainer>
                {subEmotions.map((emotion) => {
                    return (
                        <EmotionContainer>
                            <EmotionIcon
                                emotion={emotion}
                                width="25px"
                                height="25px"
                            />
                            {getEmotionInfo(emotion).description}
                        </EmotionContainer>
                    );
                })}
            </EmotionsContainer>
        </Container>
    );
};
