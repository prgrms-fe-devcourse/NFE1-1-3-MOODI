import Calendar, { CalendarType } from 'react-calendar';
import styled from 'styled-components';

export const StyledCalendar = styled(Calendar).attrs({
    calendarType: 'gregory' as CalendarType
})`
    width: 100%;
    max-width: 960px;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    font-family: 'Pretendard', sans-serif;

    //년월컨테이너
    .react-calendar__navigation {
        display: flex;
        padding: 2rem 0;

        //년월선택ui
        button {
            border: none;
            border-radius: 10px;
            background-color: white;
            outline: none;
            font-size: 1.5rem;
            font-family: 'Pretendard', sans-serif;
            &:hover {
                background-color: rgba(0, 0, 0, 0.05);
                cursor: pointer;
            }
        }

        //년월텍스트
        .react-calendar__navigation__label {
            font-size: 1.2rem;
            border: 1px solid rgba();
        }
    }

    //날짜/년월/10년 아이템
    .react-calendar__tile {
        max-width: initial !important;
        padding: 15px;
        height: 100px;
        background-color: white;
        border-radius: 28px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
            cursor: pointer;
        }
    }

    //10년박스
    .react-calendar__century-view__decades {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 0.5rem;
        row-gap: 1rem;
    }

    //년박스
    .react-calendar__decade-view__years {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 0.5rem;
        row-gap: 1rem;
    }

    //월박스
    .react-calendar__year-view__months {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 0.5rem;
        row-gap: 1rem;
    }

    //날짜박스
    .react-calendar__month-view__days {
        display: grid !important;
        grid-template-columns: repeat(7, 1fr);
        column-gap: 0.5rem;
        row-gap: 1rem;

        // 체크된 날짜 스타일
        .diary-date {
            border: 1px solid rgba(0, 0, 0, 0.25);
        }

        // 체크되지 않은 날짜 스타일
        .nodiary-date {
            border: 1px solid rgba(0, 0, 0, 0.08);
            position: relative;
            &:hover {
                background-color: rgba(0, 0, 0, 0.1);
                cursor: pointer;
            }
            &:hover::after {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-40%, -40%);
                width: 20px;
                height: 20px;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url('calendar_plus.svg');
            }
        }

        // 앞뒤월의 날
        .react-calendar__month-view__days__day--neighboringMonth {
            visibility: hidden !important;
            pointer-events: none !important;
        }

        // 현재날짜
        .react-calendar__tile--now {
            background-color: #ffeee9;
            border: 1px solid #ff480e;
            color: black;
        }
    }

    //요일박스
    .react-calendar__month-view__weekdays {
        padding: 1rem 0;
        //요일아이템
        .react-calendar__month-view__weekdays__weekday {
            text-align: center;
            abbr {
                font-size: 14px;
                text-decoration: none;
            }
        }
    }
`;

interface DateInnerContentProps {
    emotion: string | null;
}

export const DateInnerContent = styled.div<DateInnerContentProps>`
    background-image: url(${(props) => props.emotion});
    width: 40px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    align-self: flex-end;
`;
