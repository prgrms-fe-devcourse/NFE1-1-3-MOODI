import { Emotions } from '@/shared/model/EmotionEnum';

export interface Reaction {
    emotion: Emotions;
    reactionCnt: number;
    isClicked: boolean;
}
