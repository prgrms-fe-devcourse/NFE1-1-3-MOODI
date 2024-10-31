import React, { useState } from 'react';
import caculateEmotion from '../lib/caculateEmotion';

const useToday = () => {
    const { year, month, week } = caculateEmotion();

    const [currentYear, setCurrentYear] = useState<number>(year);
    const [currentMonth, setCurrentMonth] = useState<number>(month);
    const [currentWeek, setCurrentWeek] = useState<number | null>(week);
    const [viewMode, setViewMode] = useState<'week' | 'month'>('week');

    const handleChangeYear = ({ yearParmam }: { yearParmam: number }): void => {
        setCurrentYear(yearParmam);
    };

    const handleChangeMonth = ({
        monthParmam
    }: {
        monthParmam: number;
    }): void => {
        setCurrentMonth(monthParmam);
    };

    const handleChangeWeek = ({
        weekParmam
    }: {
        weekParmam: number | null;
    }): void => {
        setCurrentWeek(weekParmam);
    };

    const handleChangeViewMode = (newViewMode: 'week' | 'month'): void => {
        setViewMode(newViewMode);
    };

    return {
        currentYear,
        currentMonth,
        currentWeek,
        viewMode,
        handleChangeYear,
        handleChangeMonth,
        handleChangeWeek,
        handleChangeViewMode
    };
};

export default useToday;
