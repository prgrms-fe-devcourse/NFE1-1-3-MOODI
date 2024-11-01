import {
    DailyConditionType,
    WeeklyConditionSummaryType
} from '@/shared/model/conditionTypes';

const isDailyEmotion = (
    data: DailyConditionType[] | WeeklyConditionSummaryType[]
): data is DailyConditionType[] => {
    return (data as DailyConditionType[])[0]?.day !== undefined;
};

export default isDailyEmotion;
