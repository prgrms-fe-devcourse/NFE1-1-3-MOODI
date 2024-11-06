export type ConditionType =
    | '좋음'
    | '나쁨'
    | '보통'
    | '매우 좋음'
    | '매우 나쁨'
    | null
    | undefined;

export interface DailyConditionType {
    day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
    mood: ConditionType;
}

export interface WeeklyDataType {
    period: string;
    mostFrequentEmotion: ConditionType;
    frequency: number | null;
    allEmotions: DailyConditionType[];
}

export interface WeeklyConditionSummaryType {
    week: number;
    mostFrequentEmotion: ConditionType;
}

export interface MonthlyDataType {
    period: string;
    weeklyResults: WeeklyConditionSummaryType[];
    frequency: number | null;
    mostFrequentEmotion: ConditionType;
}
