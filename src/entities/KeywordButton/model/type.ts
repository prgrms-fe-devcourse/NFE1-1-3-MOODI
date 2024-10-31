import { Emotions } from '../../../shared/model/EmotionEnum';

export interface KeywordButtonProps {
    isActive: boolean;
    selectedEmotion?: Emotions | null;
    onClick: () => void;
}
