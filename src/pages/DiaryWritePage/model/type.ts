import { ConditionType } from '@/shared/model/conditionTypes';
import { DiaryData } from '@/shared/model/diaryType';

export interface MoodDataType {
    mood: ConditionType;
    emotion: string | null;
    subEmotions: (string | null)[];
}

export interface DiaryWritePageProps {
    mode: 'create' | 'edit';
}
