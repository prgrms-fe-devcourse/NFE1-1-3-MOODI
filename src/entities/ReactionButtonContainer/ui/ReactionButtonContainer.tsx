import React, { useEffect } from 'react';
import { StyledReactionContainer } from './ReactionButtonContainer.styled';
import { Emotions } from '../../../shared/model/EmotionEnum';
import ReactionButton from '../../../shared/ReactionButton/ui/ReactionButton';
import ReactionAddButton from '../../../shared/ReactionAddButton/ui/ReactionAddButton';
import useModal from '@/shared/hooks/useModal';
import EmotionList from '@/shared/EmotionButtonList/ui/EmotionButtonList';

interface Reaction {
    emotion: Emotions;
    reactionCnt: number;
    isClicked: boolean;
}

interface ReactionListProps {
    reactions: Reaction[];
    isHorizontal: boolean;
    isAddBtnVisible: boolean;
    onReactionUpdate: (
        emotion: Emotions,
        count: number,
        isAlreadyClicked: boolean
    ) => void;
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
    const { openModal, ModalComponent } = useModal(); // useModal 훅 호출

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

    const handleOnClick = () => {
        openModal(); // 모달 열기
    };

    // 모달 안에서 선택한 옵션을 확인할 수 있는 부분
    const onClickTest = (selectedEmotions: Emotions[]) => {
        console.log('선택된 감정:', selectedEmotions);
    };

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

            <ModalComponent>
                <div>
                    <EmotionList
                        isPrimary
                        maxSelections={1}
                        initialSelectedEmotions={[Emotions.Happy]}
                        onSelectionChange={onClickTest}
                    />
                </div>
            </ModalComponent>
        </StyledReactionContainer>
    );
};

export default ReactionButtonContainer;
