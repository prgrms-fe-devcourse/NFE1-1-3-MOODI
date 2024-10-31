import { Emotions } from '@/shared/model/EmotionEnum';

export interface EmotionButtonGroupProps {
    initialKeywords?: (Emotions | null)[];
    onKeywordsChange?: (keywords: (Emotions | null)[]) => void;
}
