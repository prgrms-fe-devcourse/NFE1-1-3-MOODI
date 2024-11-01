import { EmotionType } from '@/shared/model/moodTypes';

export interface MoodDataType {
    mood: EmotionType;
    emotion: string | null;
    subEmotion: (string | null)[];
}
