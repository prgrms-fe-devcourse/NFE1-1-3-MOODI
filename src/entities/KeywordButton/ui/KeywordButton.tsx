import React from 'react';
import { KeywordButtonProps } from '../model/type';
import { StyledButton } from './KeywordButton.styled';
import { getEmotionInfo } from '../../../shared/model/EmotionEnum';
import EmotionIcon from '../../../shared/EmotionIcon/ui/EmotionIcon';

export const KeywordButton = ({
    isActive = false,
    selectedEmotion = null,
    onClick
}: KeywordButtonProps) => {
    const description = selectedEmotion
        ? getEmotionInfo(selectedEmotion).description
        : '';

    return (
        <StyledButton isActive={isActive} onClick={onClick}>
            {selectedEmotion !== null ? (
                <EmotionIcon
                    emotion={selectedEmotion}
                    width="70px"
                    height="70px"
                />
            ) : null}
            {description}
        </StyledButton>
    );
};
