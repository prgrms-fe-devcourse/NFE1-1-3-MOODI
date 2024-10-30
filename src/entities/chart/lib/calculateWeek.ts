// 주차를 계산하는 유틸 함수
export const calculateWeekOfYear = (date: Date): number => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear =
        (date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000);
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
};
