import React, { useEffect } from 'react';
import { StyledReactionContainer } from './ReactionButtonContainer.styled';
import { Emotions } from '../../../../shared/model/EmotionEnum';
import ReactionButton from '../../../../shared/ReactionButton/ui/ReactionButton';
import ReactionAddButton from '../../../../shared/ReactionAddButton/ui/ReactionAddButton';

interface Reaction {
    emotion: Emotions;
    reactionCnt: number;
    isClicked: boolean;
}

interface ReactionListProps {
    reactions: Reaction[];
    isHorizontal: boolean;
    isAddBtnVisible: boolean;
    onReactionUpdate: (emotion: Emotions, count: number) => void; // 추가
}

const ReactionButtonContainer = ({
    reactions = [],
    isHorizontal,
    isAddBtnVisible = false,
    onReactionUpdate
}: ReactionListProps) => {
    const [clickedEmotions, setClickedEmotions] = React.useState<Emotions[]>(
        []
    );
    const [updatedReactions, setUpdatedReactions] =
        React.useState<Reaction[]>(reactions);

    useEffect(() => {
        const initialClickedEmotions = reactions
            .filter((reaction) => reaction.isClicked)
            .map((reaction) => reaction.emotion);

        setClickedEmotions(initialClickedEmotions);
    }, [reactions]);

    const handleClick = (emotion: Emotions) => {
        setClickedEmotions((prev) => {
            const isAlreadyClicked = prev.includes(emotion);
            const updatedCount = updatedReactions.map((reaction) => {
                if (reaction.emotion === emotion) {
                    const newCount = isAlreadyClicked
                        ? reaction.reactionCnt - 1
                        : reaction.reactionCnt + 1;

                    onReactionUpdate(emotion, newCount);

                    return {
                        ...reaction,
                        reactionCnt: newCount
                    };
                }
                return reaction;
            });

            setUpdatedReactions(updatedCount);

            return isAlreadyClicked
                ? prev.filter((e) => e !== emotion)
                : [...prev, emotion];
        });
    };

    const handleOnClick = () => {};

    return (
        <StyledReactionContainer>
            {updatedReactions.map(({ emotion, reactionCnt }) => (
                <ReactionButton
                    key={emotion}
                    emotion={emotion}
                    reactionCnt={reactionCnt}
                    isHorizontal={isHorizontal}
                    isClicked={clickedEmotions.includes(emotion)}
                    onClick={handleClick}
                />
            ))}

            {isAddBtnVisible && (
                <ReactionAddButton
                    isHorizontal={isHorizontal}
                    isClicked={false}
                    onClick={handleOnClick}
                />
            )}
        </StyledReactionContainer>
    );
};

export default ReactionButtonContainer;
