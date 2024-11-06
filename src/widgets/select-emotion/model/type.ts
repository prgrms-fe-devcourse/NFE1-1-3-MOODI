import { MoodDataType } from '@/entities/music/model/type';
import { ConditionType } from '@/shared/model/conditionTypes';

export interface SelectEmotionContainerProps {
    onMoodSelect: (mood: MoodDataType) => void;
    onNext?: (mood: MoodDataType) => void;
    isActive: boolean;
    disabled: boolean;
    initialmood: ConditionType | undefined;
    initialemotion: string | null | undefined;
    initialsubemotions: (string | null)[] | undefined;
}

export interface MoodState {
    mood: ConditionType | undefined;
    emotion: string | null | undefined;
    subEmotions: (string | null)[] | undefined;
}

export const INITIAL_MOOD_STATE: MoodState = {
    mood: null,
    emotion: null,
    subEmotions: Array(4).fill(null)
};
