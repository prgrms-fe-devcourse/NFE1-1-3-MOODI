import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css'; // 기본 스타일 적용
import {
    StyledCalendarWrapper,
    StyledCalendar,
    StyledButton,
    StyledImg
} from './DatePicker.styled'; // 스타일드 컴포넌트 불러오기
import moment from 'moment';
import { DatePickerProps } from '../model/type';
import { setDateFormat } from './setDateFormat';

export const DatePicker: React.FC<DatePickerProps> = ({
    initialDate,
    disabledDates = [],
    onSelectDate
}) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        initialDate || new Date()
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const today = new Date();

    const handleDateChange = (
        date: Date | null | [Date | null, Date | null]
    ) => {
        if (Array.isArray(date)) {
            // 날짜 범위인 경우
            const [startDate, endDate] = date;
            if (startDate) {
                setSelectedDate(startDate);
                onSelectDate(startDate); // 부모 컴포넌트로 시작 날짜 전달
            }
        } else if (date) {
            // 단일 날짜인 경우
            setSelectedDate(date);
            onSelectDate(date); // 부모 컴포넌트로 선택된 날짜 전달
        }

        setIsModalOpen(false); // 날짜 선택 후 모달 닫기
    };

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    const isDateDisabled = (date: Date) => {
        const formattedDate = setDateFormat(date); // 문자열 형식으로 변환
        return (
            date > today || // 오늘 이후 날짜 비활성화
            disabledDates.includes(formattedDate) // 비활성화할 날짜 배열에 포함된 경우
        );
    };

    return (
        <StyledCalendarWrapper>
            <StyledButton onClick={toggleModal}>
                <StyledImg src="/calendar_icon.svg" />
            </StyledButton>
            {isModalOpen && (
                <StyledCalendar
                    value={selectedDate}
                    onChange={handleDateChange}
                    locale="ko-KR"
                    calendarType="gregory"
                    maxDate={today} // 오늘 이후 날짜 선택 불가
                    tileDisabled={({ date }) => isDateDisabled(date)} // 비활성화 날짜
                    formatDay={(locale, date) => moment(date).format('D')} // 일 제거 숫자만 보이게
                    formatYear={(locale, date) => moment(date).format('YYYY')} // 네비게이션 눌렀을때 숫자 년도만 보이게
                    formatMonthYear={(locale, date) =>
                        moment(date).format('YYYY. MM')
                    } // 네비게이션에서 2023. 12 이렇게 보이도록 설정
                    next2Label={null} // +1년 & +10년 이동 버튼 숨기기
                    prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
                    minDetail="month" // 10년단위 년도 숨기기
                    tileClassName={({ date, view }) => {
                        let classNames = '';
                        if (view === 'month') {
                            if (date > today) {
                                classNames = 'disabled'; // 선택 불가 날짜
                            }
                            if (date.toDateString() === today.toDateString()) {
                                classNames = 'today'; // 오늘 날짜
                            }
                            if (
                                selectedDate &&
                                date.toDateString() ===
                                    selectedDate.toDateString()
                            ) {
                                classNames = 'selected'; // 선택된 날짜
                            }
                            if (
                                disabledDates.some(
                                    (disabledDate) =>
                                        disabledDate === setDateFormat(date)
                                )
                            ) {
                                classNames = 'disabled'; // @ 비활성화 날짜 스타일 적용
                            }
                        }
                        return classNames;
                    }}
                />
            )}
        </StyledCalendarWrapper>
    );
};
