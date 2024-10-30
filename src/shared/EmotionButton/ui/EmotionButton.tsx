import React, { useEffect, useState } from 'react';
import EmotionIcon from '../../EmotionIcon/ui/EmotionIcon';
import { Emotions, getEmotionInfo } from '../../model/EmotionEnum';
import { StyledEmotionButton } from './EmotionButton.styled';

interface EmotionButtonProps {
    emotion: Emotions;
    initialClicked: boolean;
    onClick: () => void;
    disabled: boolean;
}

const EmotionButton: React.FC<EmotionButtonProps> = ({
    emotion,
    onClick,
    initialClicked,
    disabled
}) => {
    const [isClicked, setIsClicked] = useState(initialClicked);

    useEffect(() => setIsClicked(initialClicked), [initialClicked]);

    return (
        <StyledEmotionButton
            clicked={isClicked}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
        >
            <EmotionIcon emotion={emotion} width="20px" height="20px" />
            <p>{getEmotionInfo(emotion).description}</p>
        </StyledEmotionButton>
    );
};

export default EmotionButton;
