import { StyledCalendar, DateInnerContent } from './calendarUiCss';
import { useState, useEffect } from 'react';
import { calendarDataFetch } from '../calendar-logic/calendarDataFetch';
import {
    getActiveMonth,
    handleTileClick
} from '../calendar-logic/calendarLogic';
import { getEmoticonPath } from '@/shared/model/getEmotionPath';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/features/login/hooks/useAuthStore';

const CalendarUi: React.FC = () => {
    const navigate = useNavigate();
    const curDate = new Date();
    const [vlu, onChange] = useState(curDate);
    const monthOfActiveDate = moment(vlu).format('YYYY-MM');
    const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);
    const [fetchedData, setFetchedData] = useState<
        { id: number; title_date: string; emotion: string | null }[]
    >([]);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const { email, userName, isLoggedin, setUserInfo } = useAuthStore();

    // 오늘날짜 이후로 클릭 불가
    const isFutureDate = (date: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // 오늘 날짜의 시간을 0으로 설정하여 비교
        return date > today; // 미래 날짜인지 확인
    };

    // fetchedData에 데이터를 저장
    const loadDates = async () => {
        const data = await calendarDataFetch(activeMonth, email);
        if (data) {
            const dates = data.diaries.map(
                (entry: {
                    id: number;
                    title_date: string;
                    emotion: string | null;
                }) => ({
                    id: entry.id,
                    title_date: moment(entry.title_date).format('YYYY-MM-DD'),
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
            (entry) => entry.title_date === dateString
        );

        if (isFutureDate(dateparam)) {
            return 'futureDate';
        }
        return isCheckedDate ? 'diary-date' : 'nodiary-date';
    };

    // fetchedData에서 아이템마다 id와 emotion 데이터 넣기
    const getTileContent = ({ date }: { date: Date }) => {
        const dateString = moment(date).format('YYYY-MM-DD');
        const matchedEntry = fetchedData.find(
            (entry) => entry.title_date === dateString
        );

        if (matchedEntry && matchedEntry.emotion) {
            return (
                <DateInnerContent
                    data-id={matchedEntry.id}
                    data-date={matchedEntry.title_date}
                    emotion={getEmoticonPath(matchedEntry.emotion)}
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
            onClickDay={(date, event) =>
                handleTileClick(date, event, (path) => navigate(path))
            }
            tileContent={getTileContent}
            tileDisabled={({ date }) => isFutureDate(date)}
        />
    );
};

export default CalendarUi;
