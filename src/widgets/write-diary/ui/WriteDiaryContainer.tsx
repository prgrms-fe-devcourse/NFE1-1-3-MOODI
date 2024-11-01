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

export const WriteDiaryContainer: React.FC<WriteDiaryContainerProps> = ({
    onDiarySubmit,
    initialDate = new Date() // 초기 날짜가 없으면 오늘 날짜 사용
}) => {
    const [selectedDate, setSelectedDate] = useState<Date>(initialDate);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [isButtonActive, setIsButtonActive] = useState(false);

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
                <DateContainer>
                    {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : '날짜를 선택하세요.'}
                </DateContainer>
                <DatePickeContainer>
                    <DatePicker onSelectDate={handleDateSelect} />
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
            <ButtonContainer>
                <Button
                    width="214px"
                    height="59px"
                    isActive={isButtonActive}
                    fontSize="16px"
                    onClick={() => {
                        if (isButtonActive) {
                            onDiarySubmit({
                                selectedDate,
                                title,
                                content,
                                isPublic
                            });
                            console.log(selectedDate, title, content, isPublic);
                        }
                    }}
                >
                    다음
                </Button>
            </ButtonContainer>
        </Container>
    );
};
