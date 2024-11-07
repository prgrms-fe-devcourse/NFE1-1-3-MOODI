import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const StyledCalendarWrapper = styled.div`
    position: relative;
    width: 330px;
    display: flex;
    justify-content: right;
`;

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    background-color: #ffffff;
    border: 1px solid rgb(0, 0, 0, 0.2);
    border-radius: 1000px;
    cursor: pointer;

    &:hover {
        background-color: rgb(0, 0, 0, 0.05);
    }
`;

export const StyledImg = styled.img`
    height: 22px;
`;

export const StyledCalendar = styled(Calendar)`
    position: absolute;
    width: 330px;
    top: calc(100% + 5px); /* 버튼 아래로 5px 떨어지게 배치 */
    left: 0;
    z-index: 999;
    border: none;
    border-radius: 20px;
    box-shadow: 4px 2px 10px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    padding: 3% 5%;
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    color: #000000;

    .react-calendar__navigation button:disabled {
        background-color: #ffffff;
    }

    button:disabled {
        color: #000000;
    }

    /* 요일 밑줄 제거 */
    .react-calendar__month-view__weekdays abbr {
        text-decoration: none;
        font-weight: normal;
    }

    /* 선택된 날짜 스타일 */
    .react-calendar__tile.selected {
        background-color: #ff480e;
        color: #ffffff;
        border-radius: 10px;
    }

    .react-calendar__tile.react-calendar__month-view__days__day:hover {
        background-color: rgb(0, 0, 0, 0.1);
        color: #000000;
        border-radius: 10px;
    }
    .react-calendar__tile.react-calendar__month-view__days__day:focus {
        background-color: rgb(0, 0, 0, 0.1);
        color: #000000;
        border-radius: 10px;
    }

    .react-calendar__navigation__arrow.react-calendar__navigation__prev-button:hover,
    .react-calendar__navigation__arrow.react-calendar__navigation__next-button:hover {
        background-color: rgb(0, 0, 0, 0.1);
        border-radius: 10px;
    }

    .react-calendar__navigation__arrow.react-calendar__navigation__prev-button:focus,
    .react-calendar__navigation__arrow.react-calendar__navigation__next-button:focus {
        background-color: rgb(0, 0, 0, 0.1);
        border-radius: 10px;
    }

    /* 오늘 날짜 스타일 */
    .react-calendar__tile.today {
        border: 1px solid #ff480e;
        background: #ffffff;
        color: #000000;
        border-radius: 10px;
    }

    /* 선택 불가 날짜 스타일 */
    .react-calendar__tile.disabled {
        color: rgb(0, 0, 0, 0.2);
        background-color: #ffffff;
    }
`;
