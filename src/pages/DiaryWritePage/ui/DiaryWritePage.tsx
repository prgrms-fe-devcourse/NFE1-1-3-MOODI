import { useNavigate, useParams } from 'react-router-dom';
import { useDiaryForm } from '../hooks/useDiaryForm';
import { useStepNavigation } from '../hooks/useStepNavigation';
import { useMusicRecommendation } from '../hooks/useMusicRecommendation';
import Button from '@/shared/ui/Button/Button';
import { diaryService } from '@/entities/diary/diaryService';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import { SelectMusicContainer } from '@/widgets/select-music';
import { SelectEmotionContainer } from '@/widgets/select-emotion';
import { WriteDiaryContainer } from '@/widgets/write-diary';
import {
    ButtonContainer,
    Container,
    DisabledOverlay,
    Section,
    WidgetWrapper
} from './DiaryWritePage.styled';
import { useEffect, useRef } from 'react';

export const DiaryWritePage = () => {
    const testUserEmail = 'wookgod01@naver.com.com';
    const { date } = useParams();
    const navigate = useNavigate();
    const { addToast } = useToastStore();
    const {
        userDiaryState,
        userEmotionState,
        selectedMusic,
        setUserDiaryState,
        setUserEmotionState,
        setSelectedMusic,
        validators
    } = useDiaryForm();

    const { currentStep, handlePrevStep, handleNextStep } =
        useStepNavigation(3);
    const { recommendedMusicList, fetchRecommendations, isLoading } =
        useMusicRecommendation();

    const diaryRef = useRef<HTMLDivElement>(null);
    const emotionRef = useRef<HTMLDivElement>(null);
    const musicRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
            ref.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        };

        switch (currentStep) {
            case 1:
                scrollToRef(diaryRef);
                break;
            case 2:
                scrollToRef(emotionRef);
                break;
            case 3:
                scrollToRef(musicRef);
                break;
            default:
                scrollToRef(diaryRef);
                break;
        }
    }, [currentStep]);

    useEffect(() => {
        console.log(currentStep);
    }, [currentStep]);

    const handleSubmitAll = async () => {
        try {
            const diaryData = diaryService.formatDiaryData(
                userDiaryState!,
                userEmotionState!,
                selectedMusic!,
                testUserEmail,
                date || ''
            );

            const { success, error } =
                await diaryService.submitDiary(diaryData);

            if (success) {
                addToast('일기를 작성했어요.', 'success');
                navigate('/');
            } else {
                addToast('일기 작성에 실패했습니다.', 'error');
            }
        } catch (error) {
            addToast('일기 작성에 실패했습니다.', 'error');
        }
    };

    const handleEmotionNext = async () => {
        if (!validators.isEmotionValid(userEmotionState)) {
            return;
        }

        handleNextStep();
        await fetchRecommendations(
            userDiaryState,
            userEmotionState,
            (errorMessage) => addToast(errorMessage, 'error')
        );
    };

    return (
        <Container>
            <Section>
                <WidgetWrapper ref={diaryRef}>
                    <WriteDiaryContainer
                        onDiarySubmit={setUserDiaryState}
                        isActive={currentStep === 1}
                        disabled={currentStep !== 1}
                    />
                    <DisabledOverlay disabled={currentStep !== 1} />
                    <ButtonContainer>
                        <Button
                            borderradius="10px"
                            fontSize="16px"
                            height="60px"
                            isActive={validators.isDiaryValid(userDiaryState)}
                            onClick={() => {
                                if (validators.isDiaryValid(userDiaryState)) {
                                    handleNextStep();
                                }
                            }}
                            width="200px"
                        >
                            다음
                        </Button>
                    </ButtonContainer>
                </WidgetWrapper>

                <WidgetWrapper ref={emotionRef}>
                    <SelectEmotionContainer
                        onMoodSelect={setUserEmotionState}
                        isActive={currentStep === 2}
                        disabled={currentStep !== 2}
                    />
                    <DisabledOverlay disabled={currentStep !== 2} />
                    <ButtonContainer>
                        <Button
                            borderradius="10px"
                            fontSize="16px"
                            height="60px"
                            isActive
                            hasBorder
                            onClick={handlePrevStep}
                            width="200px"
                        >
                            이전
                        </Button>
                        <Button
                            borderradius="10px"
                            fontSize="16px"
                            height="60px"
                            isActive={validators.isEmotionValid(
                                userEmotionState
                            )}
                            onClick={() => {
                                if (
                                    validators.isEmotionValid(userEmotionState)
                                ) {
                                    handleEmotionNext();
                                }
                            }}
                            width="200px"
                        >
                            다음
                        </Button>
                    </ButtonContainer>
                </WidgetWrapper>

                <WidgetWrapper ref={musicRef}>
                    <SelectMusicContainer
                        onMusicSelect={setSelectedMusic}
                        gptRecommendMusicList={recommendedMusicList}
                        isActive={currentStep === 3}
                        disabled={currentStep !== 3}
                        isLoading={isLoading}
                    />
                    <DisabledOverlay disabled={currentStep !== 3} />
                    <ButtonContainer>
                        <Button
                            borderradius="10px"
                            fontSize="16px"
                            height="60px"
                            isActive
                            hasBorder
                            onClick={handlePrevStep}
                            width="200px"
                        >
                            이전
                        </Button>
                        <Button
                            borderradius="10px"
                            fontSize="16px"
                            height="60px"
                            isActive={validators.isMusicValid(selectedMusic)}
                            onClick={() => {
                                if (validators.isMusicValid(selectedMusic)) {
                                    handleSubmitAll();
                                }
                            }}
                            width="200px"
                        >
                            게시하기
                        </Button>
                    </ButtonContainer>
                </WidgetWrapper>
            </Section>
        </Container>
    );
};
