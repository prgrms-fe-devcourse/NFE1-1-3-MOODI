import { StyledReactionButton } from '../../ReactionButton/ui/ReactionButton.styled';
import React from 'react';

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
    const width = isHorizontal ? '20px' : '60px';
    const height = isHorizontal ? '20px' : '60px';

    const handleClick = () => {
        onClick();
    };

    return (
        <StyledReactionButton
            clicked={isClicked}
            isHorizontal={isHorizontal}
            onClick={handleClick}
        >
            <img
                src="./emoji_plus.svg"
                alt="추가"
                width={width}
                height={height}
            />
        </StyledReactionButton>
    );
};

export default ReactionAddButton;
