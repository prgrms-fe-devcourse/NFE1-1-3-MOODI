import React, { useEffect, useState } from 'react';
import {
    StyledEmotionContainer,
    StyledReactionContainer,
    StyledCloseButton,
    StyledReactionBtnContainer
} from './ReactionButtonContainer.styled';
import { Emotions } from '../../../shared/model/EmotionEnum';
import ReactionButton from '../../../shared/ReactionButton/ui/ReactionButton';
import ReactionAddButton from '../../../shared/ReactionAddButton/ui/ReactionAddButton';
import useModal from '@/shared/hooks/useModal';
import EmotionList from '@/shared/EmotionButtonList/ui/EmotionButtonList';
import { Reaction } from '../model/reaction';

interface ReactionListProps {
    reactions: Reaction[];
    isHorizontal: boolean;
    isAddBtnVisible: boolean;
    onReactionUpdate: (
        emotion: Emotions,
        count: number,
        isAlreadyClicked: boolean
    ) => void;
    onSelectedEmotionsChange: (selectedEmotions: Emotions[]) => void;
}

const ReactionButtonContainer: React.FC<ReactionListProps> = ({
    reactions = [],
    isHorizontal,
    isAddBtnVisible = false,
    onReactionUpdate,
    onSelectedEmotionsChange
}) => {
    const [clickedEmotions, setClickedEmotions] = useState<Emotions[]>([]);
    const [updatedReactions, setUpdatedReactions] =
        useState<Reaction[]>(reactions);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { openModal, ModalComponent } = useModal();

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

                    onReactionUpdate(emotion, newCount, isAlreadyClicked);

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

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    const handleOnClickAddButton = () => {
        toggleModal();
    };

    const onClickTest = (selectedEmotions: Emotions[]) => {
        onSelectedEmotionsChange(selectedEmotions);
    };

    const initialSelectedEmotions = reactions
        .filter((reaction) => reaction.isClicked)
        .map((reaction) => reaction.emotion);

    return (
        <StyledReactionContainer>
            <StyledReactionBtnContainer>
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
                        onClick={handleOnClickAddButton}
                    />
                )}
            </StyledReactionBtnContainer>

            {isModalOpen && (
                <StyledEmotionContainer>
                    <StyledCloseButton onClick={toggleModal}>
                        x
                    </StyledCloseButton>
                    <EmotionList
                        isPrimary={false}
                        maxSelections={22}
                        initialSelectedEmotions={initialSelectedEmotions}
                        onSelectionChange={onClickTest}
                    />
                </StyledEmotionContainer>
            )}
        </StyledReactionContainer>
    );
};

export default ReactionButtonContainer;
