import { StyledReactionButton } from '../../ReactionButton/ui/ReactionButton.styled';
import React from 'react';
import { StyledEmotionIcon } from '../../EmotionIcon/ui/EmotionIcon.styled';

interface ReactionAddButtonProps {
    isClicked: boolean;
    isHorizontal: boolean;
    onClick: () => void;
}

/** 일기 글에 대한 반응을 추가하기 위한 버튼입니다. */
const ReactionAddButton = ({
    isClicked,
    isHorizontal,
    onClick
}: ReactionAddButtonProps) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <StyledReactionButton
            isHorizontal={isHorizontal}
            clicked={isClicked}
            onClick={handleClick}
        >
            <StyledEmotionIcon width="80%" height="80%">
                <img src="./reaction_plus.svg" alt="이미지 추가" />
            </StyledEmotionIcon>
        </StyledReactionButton>
    );
};

export default ReactionAddButton;
