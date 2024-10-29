import {
    WeeklyDataType,
    MonthlyDataType
} from '../../../shared/model/moodTypes';

const isWeekly = (
    data: WeeklyDataType | MonthlyDataType
): data is WeeklyDataType => {
    return 'allEmotions' in data;
};

export default isWeekly;
