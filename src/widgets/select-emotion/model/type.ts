import { MoodDataType } from '@/pages/DiaryWritePage/model/type';
import { ConditionType } from '@/shared/model/conditionTypes';

export interface SelectEmotionContainerProps {
    onMoodSelect: (mood: MoodDataType) => void;
    onNext?: (mood: MoodDataType) => void;
    isActive: boolean;
    disabled: boolean;
}

export interface MoodState {
    mood: ConditionType;
    emotion: string | null;
    subEmotions: (string | null)[];
}

export const INITIAL_MOOD_STATE: MoodState = {
    mood: null,
    emotion: null,
    subEmotions: Array(4).fill(null)
};
