/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { StyledReactionSelector } from './ReactionSelector.styled';
import { fetchReactionData } from '../api/fetchReactionData';
import { DiaryType } from '@/shared/model/diaryType';
import { ReactionList } from '../model/reactionListType';
import { emotionMapping, Emotions } from '@/shared/model/EmotionEnum';
import ReactionButtonContainer from '@/entities/ReactionButtonContainer/ui/ReactionButtonContainer';
import { ReactionType } from '@/shared/model/reactionType';

interface ReactBtnProps {
    diaryId: number;
    userEmail: string;
    isHorizontal: boolean;
    isAddBtnVisible: boolean;
}

const ReactionSelector = ({
    diaryId,
    userEmail,
    isHorizontal,
    isAddBtnVisible
}: ReactBtnProps) => {
    const [diary, setDiary] = useState<DiaryType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [reactions, setReactions] = useState<ReactionList[]>([]);
    const [selected_reaction, setSelectReaction] = useState<string>(); // temp

    const processReactions = (reactionsArray: ReactionType[]) => {
        const reactionMap: Record<string, ReactionList> = {};

        reactionsArray.forEach((reaction) => {
            const { reaction_type } = reaction;
            const reaction_userEmail = reaction.user_email;

            console.log(
                'reaction_type:',
                reaction_type,
                ', reaction_user_email:',
                reaction_userEmail
            );

            if (reaction_userEmail === userEmail) {
                setSelectReaction(reaction_type);
            }

            const emotion = emotionMapping[reaction_type];
            if (!emotion) return;

            if (!reactionMap[emotion]) {
                reactionMap[emotion] = {
                    emotion,
                    reactionCnt: 0,
                    isClicked: false
                };
            }

            reactionMap[emotion].reactionCnt += 1;

            if (reaction_userEmail === userEmail) {
                reactionMap[emotion].isClicked = true;
            }
        });

        setReactions(Object.values(reactionMap));
    };

    useEffect(() => {
        const getDiaryData = async () => {
            const data = await fetchReactionData(diaryId);
            if (data) {
                setDiary(data);
                processReactions(data.reactions);
            } else {
                setError('일기를 불러오는 데 실패했습니다.');
            }
            setLoading(false);
        };

        getDiaryData();
    }, [diaryId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const args = {
        isHorizontal: { isHorizontal },
        isAddBtnVisible: { isAddBtnVisible },
        reactions,
        onReactionUpdate: (
            emotion: Emotions,
            count: number,
            isAlreadyClicked: boolean
        ) => {
            console.log(`Emotion: ${emotion}, Updated Count: ${count}`);

            if (isAlreadyClicked) {
                console.log('-1했음');
            } else {
                console.log('+1했음');
            }
        }
    };

    return (
        <StyledReactionSelector>
            <ReactionButtonContainer
                reactions={args.reactions}
                isHorizontal={isHorizontal}
                isAddBtnVisible={isAddBtnVisible}
                onReactionUpdate={args.onReactionUpdate}
            />
        </StyledReactionSelector>
    );
};

export default ReactionSelector;
