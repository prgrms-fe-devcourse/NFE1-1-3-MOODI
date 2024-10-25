import { StyledCalendar } from './calendarUiCss';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { useState } from 'react';
import moment from 'moment';

const CalendarUi: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

    const handleDateChange = (value: Value) => {
        alert(`${value}의 페이지로 이동`);
    };

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const checkedDates = [
        '2024-10-25',
        '2024-10-26',
        '2024-11-01',
        '2024-11-05'
    ];

    const getTileContent = ({ date }: { date: Date }) => {
        const dateString = moment(date).format('YYYY-MM-DD');
        const matchedEntry = fetchedData.find(
            (entry) => entry.created_date === dateString
        );

        if (matchedEntry) {
            const emotionPath = matchedEntry.emotion
                ? getEmoticonPath(matchedEntry.emotion)
                : 'img/emoji/default.svg';
            return (
                <DateInnerContent emotion={emotionPath} id={matchedEntry.id} />
            );
        }
        return null; // 해당 날짜와 일치하는 데이터가 없으면 null 반환
    };

    return (
        <>
            <h2>
                현재 월:{' '}
                {currentMonth.toLocaleString('ko-KR', {
                    year: 'numeric',
                    month: 'long'
                })}
            </h2>
            <StyledCalendar
                onChange={handleDateChange}
                onActiveStartDateChange={({ activeStartDate }) =>
                    getActiveMonth(activeStartDate, setActiveMonth)
                }
                formatDay={(locale, d) => d.getDate().toString()}
                formatShortWeekday={(locale, d) => weekDays[d.getDay()]}
                tileClassName={({ date }) => getTileClassName(date)}
            />
        </>
    );
};

export default CalendarUi;
