import React from 'react';
import {
    Container,
    EmotionContainer,
    SubContainer
} from './ShowMainEmotionContainer.styles';
import { ShowMainEmotionContainerProps } from '../model/type';
import { EmotionIcon } from '@/shared/EmotionIcon/ui/EmotionIcon';
import { getEmotionInfo } from '@/shared/model/EmotionEnum';

export const ShowMainEmotionContainer = ({
    emotion
}: ShowMainEmotionContainerProps) => {
    return (
        <Container>
            메인 감정 키워드
            <SubContainer>
                <EmotionContainer>
                    <EmotionIcon emotion={emotion} width="50px" height="50px" />
                    {getEmotionInfo(emotion).description}
                </EmotionContainer>
            </SubContainer>
        </Container>
    );
};
