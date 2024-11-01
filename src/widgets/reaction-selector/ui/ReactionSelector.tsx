/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { StyledReactionSelector } from './ReactionSelector.styled';
import { fetchReactionData } from '../api/addReactionData';
import { DiaryType } from '@/shared/model/diaryType';
import { ReactionList } from '../model/reactionListType';
import {
    emotionDescriptions,
    emotionMapping,
    Emotions
} from '@/shared/model/EmotionEnum';
import ReactionButtonContainer from '@/entities/ReactionButtonContainer/ui/ReactionButtonContainer';
import { ReactionType } from '@/shared/model/reactionType';
import { postReaction, ReactionData } from '../api/updateReactionData';

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

    const processReactions = (reactionsArray: ReactionType[]) => {
        const reactionMap: Record<string, ReactionList> = {};

        reactionsArray.forEach((reaction) => {
            const { reaction_type } = reaction;
            const reaction_userEmail = reaction.user_email;
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

    /// /////////////
    const handlePostReaction = async ({
        diary_id,
        reaction_type,
        user_email
    }: ReactionData) => {
        const reaction: ReactionData = {
            diary_id,
            reaction_type,
            user_email
        };

        try {
            const result = await postReaction(reaction);
            console.log('Reaction posted successfully:', result);
        } catch (e) {
            console.error('Failed to post reaction:', e);
        }
    };

    /// //////////

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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const args = {
        isHorizontal: { isHorizontal },
        isAddBtnVisible: { isAddBtnVisible },
        reactions,
        onReactionUpdate: (
            emotion: Emotions,
            count: number,
            isAlreadyClicked: boolean
        ) => {
            if (isAlreadyClicked) {
                // Sub emotion (선택해제)

                // 리엑션 삭제요청

                console.log(`${emotion} -1했음 ===> ${count}`);
            } else {
                // Add emtoion (선택)
                // 함수 호출
                handlePostReaction({
                    diary_id: diaryId,
                    reaction_type: emotionDescriptions[emotion],
                    user_email: 'annawa6@naver.com.com'
                });

                // 리액션 추가 요청

                console.log(`${emotion} +1했음 ===> ${count}`);
            }
        }
    };
    const hasSelectedEmotion = (selectedEmotion: Emotions) =>
        reactions.some((reaction) => reaction.emotion === selectedEmotion);

    //
    console.log('ReactionSelector-Reactions:', reactions);

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
