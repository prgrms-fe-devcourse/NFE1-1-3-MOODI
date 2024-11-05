/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
import React, { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { StyledReactionSelector } from './ReactionSelector.styled';
import { fetchReactionData } from '../api/fetchReactionData';
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
import deleteReaction from '../api/deleteReactionData';

interface ReactBtnProps {
    diaryId: number;
    userEmail: string;
    isHorizontal: boolean;
    isAddBtnVisible: boolean;
    token: string;
    align?: string;
}

const ReactionSelector = ({
    diaryId,
    userEmail,
    isHorizontal,
    isAddBtnVisible,
    token,
    align = 'left' // (ex) left, center, right
}: ReactBtnProps) => {
    const [diary, setDiary] = useState<DiaryType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [reactions, setReactions] = useState<ReactionList[]>([]);
    const [previousEmotions, setPreviousEmotions] = useState<Emotions[]>([]);

    const updateReactions = async (selectedEmotions: Emotions[]) => {
        const updatedReactions = [...reactions];

        for (const emotion of selectedEmotions) {
            const existingReaction = updatedReactions.find(
                (reaction) => reaction.emotion === emotion
            );

            if (existingReaction) {
                if (!existingReaction.isClicked) {
                    await handlePostReaction({
                        diary_id: diaryId,
                        reaction_type: emotionDescriptions[emotion],
                        user_email: userEmail
                    });
                }
            } else {
                await handlePostReaction({
                    diary_id: diaryId,
                    reaction_type: emotionDescriptions[emotion],
                    user_email: userEmail
                });
            }
        }

        for (const reaction of updatedReactions) {
            if (
                reaction.isClicked &&
                !selectedEmotions.includes(reaction.emotion as Emotions)
            ) {
                const selectedReactions: ReactionType[] =
                    diary?.reactions.filter(
                        (e) =>
                            e.reaction_type ===
                                emotionDescriptions[reaction.emotion] &&
                            e.user_email === userEmail
                    ) || [];

                if (selectedReactions.length > 0) {
                    const selectedReaction = selectedReactions[0];
                    await deleteReaction({
                        id: selectedReaction.reaction_id,
                        token
                    });
                }
            }
        }

        await getDiaryData();
    };

    const handleSelectedEmotions = (selectedEmotions: Emotions[]) => {
        if (
            JSON.stringify(selectedEmotions) !==
            JSON.stringify(previousEmotions)
        ) {
            setPreviousEmotions(selectedEmotions);
            updateReactions(selectedEmotions);
        }
    };

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

        const sortedReactions = Object.values(reactionMap).sort((a, b) => {
            const indexA = Object.values(Emotions).indexOf(a.emotion);
            const indexB = Object.values(Emotions).indexOf(b.emotion);
            return indexA - indexB;
        });

        setReactions(sortedReactions);
    };

    const getDiaryData = async () => {
        setLoading(true);
        try {
            const data = await fetchReactionData(diaryId);

            if (data) {
                setDiary(data);
                processReactions(data.reactions);
            }
        } catch (e) {
            console.log(
                `ReactionSelectorError : 일기를 불러오는데 실패했습니다. ${e}`
            );
        } finally {
            setLoading(false);
        }
    };

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
            await postReaction(reaction, token);
            await getDiaryData();
        } catch (e) {
            console.error('Failed to post reaction:', e);
        }
    };

    useEffect(() => {
        getDiaryData();
    }, [diaryId]);

    const memoizedReactions = useMemo(() => {
        return reactions.map((reaction) => ({
            ...reaction
        }));
    }, [reactions]);

    if (loading) {
        return null;
    }

    const args = {
        isHorizontal,
        isAddBtnVisible,
        reactions: memoizedReactions,
        align,
        onReactionUpdate: async (
            emotion: Emotions,
            count: number,
            isAlreadyClicked: boolean
        ) => {
            if (isAlreadyClicked) {
                if (diary) {
                    const selectedReactions: ReactionType[] =
                        diary.reactions.filter(
                            (e) =>
                                e.reaction_type ===
                                    emotionDescriptions[emotion] &&
                                e.user_email === userEmail
                        );

                    if (selectedReactions.length > 0) {
                        const selectedReaction = selectedReactions[0];
                        await deleteReaction({
                            id: selectedReaction.reaction_id,
                            token
                        });
                        await getDiaryData();
                    }
                }
            } else {
                await handlePostReaction({
                    diary_id: diaryId,
                    reaction_type: emotionDescriptions[emotion],
                    user_email: userEmail
                });
                await getDiaryData();
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
                onSelectedEmotionsChange={handleSelectedEmotions}
                align={args.align}
            />
        </StyledReactionSelector>
    );
};

export default ReactionSelector;
