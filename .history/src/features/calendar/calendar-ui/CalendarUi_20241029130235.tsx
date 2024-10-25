import { StyledCalendar } from './calendarUiCss'
import { Value } from 'react-calendar/dist/cjs/shared/types'
import { useState } from 'react'

const CalendarUi: React.FC = () => {
    const handleDateChange = (value: Value) => {
        alert(${value}의 페이지로 이동)
    }

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const checkedDates = ['2024-10-25', '2024-10-26', '2024-11-01', '2024-11-05']

    const getTileClassName = (dateparam: Date): string => {
        const dateString = dateparam.toISOString().split('T')[0] // YYYY-MM-DD 형식으로 변환
        return checkedDates.includes(dateString)
            ? 'unchecked-date' // 체크된 날짜의 클래스
            : 'checked-date' // 체크되지 않은 날짜의 클래스
    }

    return (
        <StyledCalendar
            onChange={handleDateChange}
            formatDay={(locale, d) => d.getDate().toString()}
            formatShortWeekday={(locale, d) => weekDays[d.getDay()]}
            tileClassName={({ date }) => getTileClassName(date)}
        />
    )
}