// processReactions.ts
import { ReactionType } from '@/shared/model/reactionType';
import { ReactionList } from '../model/reactionListType';
import { emotionMapping, Emotions } from '@/shared/model/EmotionEnum';

export const processReactions = (
    reactionsArray: ReactionType[],
    userEmail: string
): ReactionList[] => {
    const reactionMap: Record<string, ReactionList> = {};

    reactionsArray.forEach((reaction) => {
        const reactionType = reaction.reaction_type;
        const reactionEmail = reaction.user_email;
        const emotion = emotionMapping[reactionType];
        if (!emotion) return;

        if (!reactionMap[emotion]) {
            reactionMap[emotion] = {
                emotion,
                reactionCnt: 0,
                isClicked: false
            };
        }

        reactionMap[emotion].reactionCnt += 1;

        if (reactionEmail === userEmail) {
            reactionMap[emotion].isClicked = true;
        }
    });

    // Sort By EmotionEnum
    return Object.values(reactionMap).sort((a, b) => {
        const indexA = Object.values(Emotions).indexOf(a.emotion);
        const indexB = Object.values(Emotions).indexOf(b.emotion);
        return indexA - indexB;
    });
};
