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
import { useNavigate, useParams } from 'react-router-dom';

export const WriteDiaryContainer: React.FC<WriteDiaryContainerProps> = ({
    initialDate = new Date(), // 초기 날짜가 없으면 오늘 날짜 사용
    isActive,
    disabled,
    initialTitle,
    initialContent,
    initialIsPublic,
    onDiarySubmit,
    editTargetDate
}) => {
    const [selectedDate, setSelectedDate] = useState<Date>(initialDate);
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    const [isPublic, setIsPublic] = useState(initialIsPublic);
    const [isButtonActive, setIsButtonActive] = useState(false);

    useEffect(() => {
        setTitle(initialTitle);
        setContent(initialContent);
        setIsPublic(initialIsPublic);
    }, [initialTitle, initialContent, initialIsPublic]);

    const { date } = useParams(); // 작성을 선택한 날짜
    const navigate = useNavigate();

    const [existingDiaryDates, setExistingDiaryDates] = useState<string[]>([]); // 일기 작성된 날짜 배열
    const [isEditing, setIsEditing] = useState(false); // 일기 수정 페이지 인지, 초기 날짜(오늘)가 일기 작성된 날짜 배열에 있으면 일기 수정 페이지

    const formatDateWithDot = (dateStr: string | undefined): string => {
        if (dateStr) {
            // "2024-11-05"
            const [year, month, day] = dateStr.split('-');
            // "2024. 11. 05"
            return `${year}. ${month}. ${day}`;
        }
        return `날짜 선택에 오류가 있어요.`;
    };

    const formatDateWithHy = (selecteddate: Date): string => {
        const year = selecteddate.getFullYear();
        const month = String(selecteddate.getMonth() + 1).padStart(2, '0');
        const day = String(selecteddate.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

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
        setIsButtonActive(title.trim() !== '' && content.trim() !== '');
    }, [title, content]);

    useEffect(() => {
        if (isButtonActive) {
            onDiarySubmit({ title, content, isPublic });
        }
    }, [title, content, isPublic]);

    const handleDateSelect = (selecteddate: Date) => {
        console.log(selecteddate);
        navigate(`/diaryWrite/${formatDateWithHy(selecteddate)}`);
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
                <DateContainer>
                    {formatDateWithDot(editTargetDate).split('T')[0] ||
                        formatDateWithDot(date)}
                </DateContainer>
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
