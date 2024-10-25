import React, { useState, MouseEvent } from 'react';
import { StyledCalendar } from './calendarUiCss';
import { Value } from 'react-calendar/dist/cjs/shared/types';

const CalendarUi: React.FC = () => {
    const [date, setDate] = useState<Value>(null);

    const handleDateChange = (
        value: Value,
        event: MouseEvent<HTMLButtonElement>
    ) => {
        setDate(value);
    };

    // 요일 레이블 설정
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div>
            <h2>Calendar Component</h2>
            <StyledCalendar
                onChange={handleDateChange}
                value={date}
                formatDay={(locale, d) => d.getDate().toString()}
                formatShortWeekday={(locale, d) => weekDays[d.getDay()]}
            />
            <p>Selected Date: </p>
        </div>
    );
};

export default CalendarUi;
