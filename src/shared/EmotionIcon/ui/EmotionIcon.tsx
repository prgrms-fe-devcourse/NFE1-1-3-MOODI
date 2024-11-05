import React from 'react';
import { Emotions, getEmotionInfo } from '../../model/EmotionEnum';
import { StyledEmotionIcon } from './EmotionIcon.styled';
import { emotionMap } from '@/shared/model/getEmotionPath';

interface EmotionProps {
    emotion: Emotions;
    width?: string;
    height?: string;
}
/**
 * 감정 이모티콘 이미지를 표시하는 컴포넌트입니다.
 */
export const EmotionIcon = ({
    emotion,
    width = '100px',
    height = '100px'
}: EmotionProps) => {
    const { description } = getEmotionInfo(emotion);

    return (
        <StyledEmotionIcon width={width} height={height}>
            <img src={emotionMap[description]} alt={description} />
        </StyledEmotionIcon>
    );
};

export default EmotionIcon;
