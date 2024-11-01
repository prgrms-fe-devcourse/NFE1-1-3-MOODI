import { MoodDataType } from '@/pages/DiaryWritePage/model/type';
import { EmotionType } from '@/shared/model/moodTypes';

export interface SelectEmotionContainerProps {
    onMoodSelect: (mood: MoodDataType) => void;
    onNext?: (mood: MoodDataType) => void;
}

export interface MoodState {
    mood: EmotionType;
    emotion: string | null;
    subEmotion: (string | null)[];
}

export const INITIAL_MOOD_STATE: MoodState = {
    mood: null,
    emotion: null,
    subEmotion: Array(4).fill(null)
};
