import { ConditionType } from '@/shared/model/conditionTypes';

export interface MoodDataType {
    mood: ConditionType;
    emotion: string | null;
    subEmotion: (string | null)[];
}
