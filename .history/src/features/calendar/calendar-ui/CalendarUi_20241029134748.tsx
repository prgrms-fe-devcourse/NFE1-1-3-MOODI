import { StyledCalendar } from './calendarUiCss';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { fetchData } from '../calendar-logic/fetchData';
import {
    getActiveMonth,
    handleTileClick
} from '../calendar-logic/calendarLogic';

const CalendarUi: React.FC = () => {
    const curDate = new Date();
    const [vlu, onChange] = useState(curDate);
    const monthOfActiveDate = moment(vlu).format('YYYY-MM');
    const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);
    const [fetchedDates, setFetchedDates] = useState<
        { id: number; created_date: string; emotion: string | null }[]
    >([]);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const loadDates = async () => {
        const data = await fetchData(activeMonth);
        if (data) {
            // created_date를 YYYY-MM-DD 형식으로 변환하여 fetchedDates에 저장
            const dates = data.map((entry: { created_date: string }) =>
                moment(entry.created_date).format('YYYY-MM-DD')
            );
            setFetchedDatas(dates);
        }
    };

    const getTileClassName = (dateparam: Date): string => {
        const dateString = dateparam.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 변환
        return fetchedDatas.includes(dateString)
            ? 'unchecked-date' // 체크된 날짜의 클래스
            : 'checked-date'; // 체크되지 않은 날짜의 클래스
    };

    const getTileContent = ({ date }: { date: Date }) => {
        const dateString = moment(date).format('YYYY-MM-DD');
        const matchedEntry = fetchedDatas.find(
            (entry) => entry.created_date === dateString
        );

        if (matchedEntry) {
            return (
                <div
                    data-id={matchedEntry.id}
                    data-emotion={matchedEntry.emotion}
                    className="custom-tile-content"
                >
                    <span>{matchedEntry.emotion}</span>
                    {/* 필요한 데이터 추가 */}
                </div>
            );
        }
        return null; // 해당 날짜와 일치하는 데이터가 없으면 null 반환
    };

    useEffect(() => {
        loadDates();
    }, [activeMonth]);

    return (
        <>
            <h2>{activeMonth}</h2>
            <StyledCalendar
                onActiveStartDateChange={({ activeStartDate }) =>
                    getActiveMonth(activeStartDate, setActiveMonth)
                }
                formatDay={(locale, d) => d.getDate().toString()}
                formatShortWeekday={(locale, d) => weekDays[d.getDay()]}
                tileClassName={({ date }) => getTileClassName(date)}
                onClickDay={(date, event) => handleTileClick(event)}
            />
        </>
    );
};

export default CalendarUi;
