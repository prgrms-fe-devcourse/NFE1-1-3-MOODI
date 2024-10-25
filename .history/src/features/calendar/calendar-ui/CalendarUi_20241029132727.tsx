import { StyledCalendar } from './calendarUiCss'
import { Value } from 'react-calendar/dist/cjs/shared/types'
import { useState, useEffect } from 'react'
import moment from 'moment'
import { fetchData } from '../calendar-logic/fetchData'
import {getActiveMonth} from '../calendar-logic/calendarLogic'

const CalendarUi: React.FC = () => {
    const curDate = new Date();
    const [vlu, onChange] = useState(curDate);
    const monthOfActiveDate = moment(vlu).format('YYYY-MM');
    const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);
    const [fetchedDates, setFetchedDates] = useState<string[]>([]);

    const handleDateChange = (value: Value) => {
        alert(${value}의 페이지로 이동)
    }

    const loadDates = async () => {
        const data = await fetchData(activeMonth);
        if (data) {
            // created_date를 YYYY-MM-DD 형식으로 변환하여 fetchedDates에 저장
            const dates = data.map((entry: { created_date: string }) =>
                moment(entry.created_date).format('YYYY-MM-DD')
            );
            setFetchedDates(dates);
        }
    };

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const getTileClassName = (dateparam: Date): string => {
        const dateString = dateparam.toISOString().split('T')[0] // YYYY-MM-DD 형식으로 변환
        return checkedDates.includes(dateString)
            ? 'unchecked-date' // 체크된 날짜의 클래스
            : 'checked-date' // 체크되지 않은 날짜의 클래스
    }

    useEffect(() => {
        const loadDates = async () => {
            const data = await fetchData(activeMonth);
            if (data) {
                setFetchedDates(data); // 가져온 데이터를 상태에 저장
            }
        };
        loadDates();
    }, [activeMonth]);

    return (
        <>
            <h2>{activeMonth}</h2>
            <StyledCalendar
                onChange={handleDateChange}
                onActiveStartDateChange={({ activeStartDate }) => getActiveMonth(activeStartDate,setActiveMonth)}
                formatDay={(locale, d) => d.getDate().toString()}
                formatShortWeekday={(locale, d) => weekDays[d.getDay()]}
                tileClassName={({ date }) => getTileClassName(date)}
            />
        </>
    )
}

export default CalendarUi