export type EmotionType =
    | '좋음'
    | '나쁨'
    | '보통'
    | '매우 좋음'
    | '매우 나쁨'
    | null;

export interface DailyEmotionType {
    day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
    mood: EmotionType;
}

export interface WeeklyDataType {
    period: string;
    mostFrequentEmotion: EmotionType;
    frequency: number | null;
    allEmotions: DailyEmotionType[];
}

export interface WeeklyEmotionSummaryType {
    week: number;
    mostFrequentEmotion: EmotionType;
}

export interface MonthlyDataType {
    period: string;
    weeklyResults: WeeklyEmotionSummaryType[];
    frequency: number | null;
    mostFrequentEmotion: EmotionType;
}
