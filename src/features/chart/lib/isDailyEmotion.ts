import {
    DailyEmotionType,
    WeeklyEmotionSummaryType
} from '@/shared/model/moodTypes';

const isDailyEmotion = (
    data: DailyEmotionType[] | WeeklyEmotionSummaryType[]
): data is DailyEmotionType[] => {
    return (data as DailyEmotionType[])[0]?.day !== undefined;
};

export default isDailyEmotion;
