import React from 'react';
import { StyledReactionButton } from './ReactionButton.styled';
import EmotionIcon from '../../EmotionIcon/ui/EmotionIcon';
import { Emotions } from '../../model/EmotionEnum';

interface ReactionButtonProps {
    emotion: Emotions;
    reactionCnt: number;
    isHorizontal: boolean;
    isClicked: boolean;
    onClick: (emotion: Emotions) => void;
}

/** 일기 작성물에 대한 반응을 표현하기 위한 버튼 컴포넌트입니다.
 * 반응에 대한 이모티콘과 반응수를 표현합니다.
 */
export const ReactionButton = ({
    emotion,
    reactionCnt,
    isHorizontal = true,
    isClicked,
    onClick
}: ReactionButtonProps) => {
    const width = isHorizontal ? '20px' : '60px';
    const height = isHorizontal ? '20px' : '60px';

    const handleClick = () => {
        onClick(emotion);
    };

    return (
        <StyledReactionButton
            isHorizontal={isHorizontal}
            clicked={isClicked}
            onClick={handleClick}
        >
            <EmotionIcon emotion={emotion} width={width} height={height} />
            <p>{reactionCnt.toLocaleString()}</p>
        </StyledReactionButton>
    );
};

export default ReactionButton;
