export const EMOTIONS = [
    '매우 나쁨',
    '나쁨',
    '보통',
    '좋음',
    '매우 좋음'
] as const;

export type Emotion = (typeof EMOTIONS)[number];

export interface EmotionButtonGroupProps {
    selectedEmotion: Emotion | null;
    onChange: (emotion: Emotion) => void;
}
