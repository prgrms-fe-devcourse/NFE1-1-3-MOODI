import { StyledCalendar, DateContent } from './calendarUiCss';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { calendarDataFetch } from '../calendar-logic/calendarDataFetch';
import {
    getActiveMonth,
    handleTileClick
} from '../calendar-logic/calendarLogic';
import { getEmoticonPath } from '../get-emotion-path/getEmotionPath';

const CalendarUi: React.FC = () => {
    const curDate = new Date();
    const [vlu, onChange] = useState(curDate);
    const monthOfActiveDate = moment(vlu).format('YYYY-MM');
    const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);
    const [fetchedData, setFetchedData] = useState<
        { id: number; created_date: string; emotion: string | null }[]
    >([]);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // fetchedData에 데이터를 저장
    const loadDates = async () => {
        const data = await calendarDataFetch(activeMonth);
        if (data) {
            const dates = data.map(
                (entry: {
                    id: number;
                    created_date: string;
                    emotion: string | null;
                }) => ({
                    id: entry.id,
                    created_date: moment(entry.created_date).format(
                        'YYYY-MM-DD'
                    ),
                    emotion: entry.emotion
                })
            );
            setFetchedData(dates);
        }
    };

    // 일기 여부에 따라 class주어주기
    const getTileClassName = (dateparam: Date): string => {
        const dateString = moment(dateparam).format('YYYY-MM-DD');
        const isCheckedDate = fetchedData.some(
            (entry) => entry.created_date === dateString
        );

        return isCheckedDate ? 'unchecked-date' : 'checked-date';
    };

    // fetchedData에서 아이템마다 id와 emotion 데이터 넣기
    const getTileContent = ({ date }: { date: Date }) => {
        const dateString = moment(date).format('YYYY-MM-DD');
        const matchedEntry = fetchedData.find(
            (entry) => entry.created_date === dateString
        );

        if (matchedEntry && matchedEntry.emotion) {
            return (
                <div
                    data-id={matchedEntry.id}
                    data-emotion={getEmoticonPath(matchedEntry.emotion)}
                    className="custom-tile-content"
                />
            );
        }
        return null; // 해당 날짜와 일치하는 데이터가 없으면 null 반환
    };

    useEffect(() => {
        loadDates();
    }, [activeMonth]);

    return (
        <StyledCalendar
            onActiveStartDateChange={({ activeStartDate }) =>
                getActiveMonth(activeStartDate, setActiveMonth)
            }
            formatDay={(locale, d) => d.getDate().toString()}
            formatShortWeekday={(locale, d) => weekDays[d.getDay()]}
            tileClassName={({ date }) => getTileClassName(date)}
            onClickDay={(date, event) => handleTileClick(event)}
            tileContent={getTileContent}
        />
    );
};

export default CalendarUi;
