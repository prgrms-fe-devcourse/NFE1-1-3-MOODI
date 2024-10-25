import Calendar from 'react-calendar';
import styled from 'styled-components';

export const StyledCalendar = styled(Calendar)`
    width: 100%;
    max-width: 960px;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    font-family: 'Pretendard', sans-serif;

    //년월 컨테이너
    .react-calendar__navigation {
        display: flex;
        padding: 2rem 0;
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
        //년월 컨텐츠
        .react-calendar__navigation__label {
            font-size: 1rem;
        }
    }

    .react-calendar__month-view__days {
        display: grid !important;
        grid-template-columns: repeat(7, 1fr);
        grid-row-gap: 1.5rem;
    }

    .react-calendar__month-view__weekdays {
        display: grid;
        grid-template-columns: repeat(7, 1fr);

        .react-calendar__month-view__weekdays__weekday {
            text-align: center;

            abbr {
                display: inline-block;
                width: 100%;
                font-size: 14px;
            }
        }
    }

    .react-calendar__tile {
        max-width: initial !important;
        text-align: left;
        padding: 15px;
        background-color: white;
        border-radius: 28px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
            cursor: pointer;
        }
        &::after {
            content: '';
            display: block;
            width: 50px;
            height: 50px;
            border: 1px solid black;
        }
    }

    .react-calendar__tile--now {
        background-color: #ffeee9;
        border: 1px solid #ff480e;
        color: black;
    }

    .react-calendar__tile--active {
        background: #ff480e;
        color: white;
        &:hover {
            background-color: #ff480e;
            cursor: pointer;
        }
    }
`;
