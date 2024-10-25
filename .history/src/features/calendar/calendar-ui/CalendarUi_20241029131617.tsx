import { StyledCalendar } from './calendarUiCss'
import { Value } from 'react-calendar/dist/cjs/shared/types'
import { useState, useEffect } from 'react'
import moment from 'moment'
import 

const CalendarUi: React.FC = () => {
    const curDate = new Date() // 현재 날짜
    const [vlu, onChange] = useState(curDate) // 클릭한 날짜 (초기값으로 현재 날짜 넣어줌)
    const monthOfActiveDate = moment(vlu).format('YYYY-MM')
    const [activeMonth, setActiveMonth] = useState(monthOfActiveDate)

    const handleDateChange = (value: Value) => {
        alert(${value}의 페이지로 이동)
    }

    const getActiveMonth = (activeStartDate: moment.MomentInput) => {
        const newActiveMonth = moment(activeStartDate).format('YYYY-MM')
        setActiveMonth(newActiveMonth)
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
        <>
            <h2>{activeMonth}</h2>
            <StyledCalendar
                onChange={handleDateChange}
                onActiveStartDateChange={({ activeStartDate }) => getActiveMonth(activeStartDate)}
                formatDay={(locale, d) => d.getDate().toString()}
                formatShortWeekday={(locale, d) => weekDays[d.getDay()]}
                tileClassName={({ date }) => getTileClassName(date)}
            />
        </>
    )
}

export default CalendarUi