import { Emotions } from '../../../shared/model/EmotionEnum';

export interface ReactionList {
    emotion: Emotions;
    reactionCnt: number;
    isClicked: boolean;
}
