import React, { useEffect, useState } from 'react';
import { WriteDiaryContainerProps } from '../model/type';
import {
    Container,
    TitleContainer,
    ContentContainer,
    VisibilityControlsContainer,
    ButtonContainer,
    DateContainer,
    SelectDateContainer,
    DatePickeContainer
} from './WriteDiaryContainer.styled';
import InputForm from '@/shared/ui/InputForm/InputForm';
import Button from '@/shared/ui/Button/Button';
import { DatePicker } from '@/widgets/date-picker';
import { DiaryVisibilityControls } from '@/widgets/diary-visibility-controls';
import { setDateFormat } from '@/widgets/date-picker/ui/setDateFormat';

export const WriteDiaryContainer: React.FC<WriteDiaryContainerProps> = ({
    initialDate = new Date(), // 초기 날짜가 없으면 오늘 날짜 사용
    isActive,
    disabled,
    initialTitle = '',
    initialContent = '',
    initialIsPublic = true
}) => {
    const [selectedDate, setSelectedDate] = useState<Date>(initialDate);
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    const [isPublic, setIsPublic] = useState(initialIsPublic);
    const [isButtonActive, setIsButtonActive] = useState(false);

    const [existingDiaryDates, setExistingDiaryDates] = useState<string[]>([]); // 일기 작성된 날짜 배열
    const [isEditing, setIsEditing] = useState(false); // 일기 수정 페이지 인지, 초기 날짜(오늘)가 일기 작성된 날짜 배열에 있으면 일기 수정 페이지

    const userEmail = 'perfectTest@naver.com'; // 샘플 계정

    useEffect(() => {
        const fetchDisabledDates = async () => {
            try {
                const response = await fetch(
                    `https://td3axvf8x7.execute-api.ap-northeast-2.amazonaws.com/moodi/diary?limit=40&user_email=${userEmail}`
                ); // @ API 호출
                const data = await response.json();
                const dates = data.diaries.map(
                    (diary: { title_date: string | number | Date }) =>
                        setDateFormat(new Date(diary.title_date)) // 'YYYY. MM. DD.' 형식으로 -> 다시 문자열 형태로
                );

                setExistingDiaryDates(dates);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDisabledDates(); // 비활성화 날짜 데이터 가져오기
    }, []);

    useEffect(() => {
        setIsEditing(existingDiaryDates.includes(setDateFormat(initialDate)));
    }, [existingDiaryDates, initialDate]);

    useEffect(() => {
        setIsButtonActive(title.trim() !== '' && content.trim() !== '');
    }, [title, content]);

    useEffect(() => {
        if (isButtonActive) {
            onDiarySubmit({ selectedDate, title, content, isPublic });
        }
    }, [selectedDate, title, content, isPublic]);

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    const handleTitleChange = (value: string) => {
        setTitle(value);
    };

    const handleContentChange = (value: string) => {
        setContent(value);
    };

    return (
        <Container>
            <SelectDateContainer>
                <DateContainer>{setDateFormat(selectedDate)}</DateContainer>
                <DatePickeContainer>
                    {isEditing ? null : (
                        <DatePicker
                            initialDate={selectedDate}
                            onSelectDate={handleDateSelect}
                            disabledDates={existingDiaryDates}
                        />
                    )}
                </DatePickeContainer>
            </SelectDateContainer>
            <TitleContainer>
                <InputForm
                    label="제목"
                    placeholder="제목을 입력해주세요."
                    width="100%"
                    height="52px"
                    value={title}
                    onChange={handleTitleChange}
                />
            </TitleContainer>
            <ContentContainer>
                <InputForm
                    label="내용"
                    placeholder="내용을 입력해주세요."
                    isTextarea
                    width="100%"
                    height="400px"
                    value={content}
                    onChange={handleContentChange}
                />
            </ContentContainer>
            <VisibilityControlsContainer>
                <DiaryVisibilityControls
                    isPublic={isPublic}
                    onChange={(e) => setIsPublic(e)}
                />
            </VisibilityControlsContainer>
        </Container>
    );
};
