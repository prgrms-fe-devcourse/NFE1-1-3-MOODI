import { StyledCalendar } from './calendarUiCss';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { useState } from 'react';
import moment from 'moment';

const CalendarUi: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

    const handleDateChange = (value: Date | Date[]) => {
        const date = Array.isArray(value) ? value[0] : value; // 다중 선택이 아닌 경우, 단일 날짜 선택
        const dateString = moment(date).format('YYYY-MM-DD');

        // 선택된 날짜와 일치하는 id 찾기
        const matchedEntry = fetchedData.find(
            (entry) => entry.created_date === dateString
        );

        if (matchedEntry) {
            navigate(`/your-path/${matchedEntry.id}`); // 찾은 id로 navigate
        } else {
            alert('선택한 날짜에 해당하는 데이터가 없습니다.');
        }
    };

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
