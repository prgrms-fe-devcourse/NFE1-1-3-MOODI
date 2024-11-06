import React, { useEffect, useState } from 'react';
import {
    MonthWeekSelectorWrapper,
    ArrowButton,
    Display,
    SliderInfoContainer
} from './DateSlider.styled';
import {
    startOfMonth,
    endOfMonth,
    addWeeks,
    getWeeksInMonth,
    getYear,
    getMonth,
    addMonths,
    subMonths,
    startOfWeek,
    differenceInCalendarWeeks
} from 'date-fns';

interface MonthWeekSelectorProps {
    year: number;
    month: number;
    week: number | null;
    viewMode: 'week' | 'month';
    onDateChange: (date: {
        year: number;
        month: number;
        week: number | null;
        viewMode: 'week' | 'month';
    }) => void;
}

const getCurrentWeek = (date: Date) => {
    const start = startOfMonth(date);
    const currentWeekStart = startOfWeek(date, { weekStartsOn: 0 });
    return (
        differenceInCalendarWeeks(currentWeekStart, start, {
            weekStartsOn: 0
        }) + 1
    );
};

const DateSlider = React.memo(
    ({
        year,
        month,
        week,
        viewMode: currentViewMode,
        onDateChange
    }: MonthWeekSelectorProps) => {
        const [currentDate, setCurrentDate] = useState(
            new Date(year, month - 1, 1)
        );

        useEffect(() => {
            const newYear = getYear(currentDate);
            const newMonth = getMonth(currentDate) + 1;
            const newWeek =
                currentViewMode === 'week' ? getCurrentWeek(currentDate) : null;

            if (onDateChange) {
                onDateChange({
                    year: newYear,
                    month: newMonth,
                    week: newWeek,
                    viewMode: currentViewMode
                });
            }
        }, [currentDate, currentViewMode, onDateChange]);

        const handlePrev = () => {
            if (currentViewMode === 'week') {
                const newDate = addWeeks(currentDate, -1);
                const newMonth = getMonth(newDate) + 1;
                const currentMonth = getMonth(currentDate) + 1;

                if (newMonth !== currentMonth) {
                    const prevMonthLastWeekDate = endOfMonth(
                        subMonths(currentDate, 1)
                    );
                    setCurrentDate(prevMonthLastWeekDate);
                } else {
                    setCurrentDate(newDate);
                }
            } else if (currentViewMode === 'month') {
                const newDate = subMonths(currentDate, 1);
                setCurrentDate(newDate);
            }
        };

        const handleNext = () => {
            if (currentViewMode === 'week') {
                const newDate = addWeeks(currentDate, 1);
                const newMonth = getMonth(newDate) + 1;
                const currentMonth = getMonth(currentDate) + 1;

                if (newMonth !== currentMonth) {
                    const nextMonthFirstWeekDate = startOfMonth(
                        addMonths(currentDate, 1)
                    );
                    setCurrentDate(nextMonthFirstWeekDate);
                } else {
                    setCurrentDate(newDate);
                }
            } else if (currentViewMode === 'month') {
                const newDate = addMonths(currentDate, 1);
                setCurrentDate(newDate);
            }
        };

        return (
            <MonthWeekSelectorWrapper>
                <SliderInfoContainer>
                    <ArrowButton onClick={handlePrev}>&lt;</ArrowButton>
                    <Display>
                        {currentViewMode === 'week'
                            ? `${year}년 ${month}월 ${week}주차`
                            : `${year}년 ${month}월`}
                    </Display>
                    <ArrowButton onClick={handleNext}>&gt;</ArrowButton>
                </SliderInfoContainer>
            </MonthWeekSelectorWrapper>
        );
    }
);

export default DateSlider;
