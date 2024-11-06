import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
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
import { useAuthStore } from '@/features/login/hooks/useAuthStore';
import { DiaryWritePageProps } from '../model/type';
import { DiaryType } from '@/shared/model/diaryType';
import { ConditionType } from '@/shared/model/conditionTypes';

export const DiaryWritePage = ({ mode }: DiaryWritePageProps) => {
    const userEmail = useAuthStore((state) => state.email);
    const { date } = useParams();

    const { id } = useParams();
    const preLoadDiaryData = useLoaderData() as DiaryType;

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
        console.log(userDiaryState, userEmotionState, selectedMusic);
    }, [userDiaryState, userEmotionState, selectedMusic]);

    // 수정 모드 초기값
    const initialdiary = {
        title: preLoadDiaryData.title || '',
        content: preLoadDiaryData.content || '',
        isPublic: preLoadDiaryData.is_public || false
    };

    const parsedSubEmotions = preLoadDiaryData.sub_emotion
        ? (JSON.parse(preLoadDiaryData.sub_emotion) as (string | null)[])
        : [];

    const initialEmotion = {
        mood: (preLoadDiaryData.mood as ConditionType) || null,
        emotion: preLoadDiaryData.emotion || '',
        subEmotions: parsedSubEmotions
    };

    const initialMusic = {
        title: preLoadDiaryData.music_id || '',
        artist: preLoadDiaryData.artist || '',
        thumbnailUrl: preLoadDiaryData.music_imgurl || '',
        youtubeId: preLoadDiaryData.music_id || ''
    };

    // 위젯 단계
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

    // 제출
    const handleSubmitAll = async () => {
        try {
            const diaryData = diaryService.formatDiaryData(
                userDiaryState!,
                userEmotionState!,
                selectedMusic!,
                userEmail,
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

    // 수정
    const handleEditSubmit = async () => {
        try {
            if (!id) {
                throw new Error('일기 ID를 가져올 수 없어요.');
            }

            const diaryData = diaryService.formatDiaryEditData(
                userDiaryState!,
                userEmotionState!,
                selectedMusic!,
                userEmail,
                id
            );

            const { success, error } = await diaryService.editDiary(diaryData);

            if (success) {
                addToast('일기를 수정했어요.', 'success');
                navigate('/');
            } else {
                addToast('일기 수정에 실패했습니다.', 'error');
            }
        } catch (error) {
            addToast('일기 수정에 실패했습니다.', 'error');
        }
    };

    // gpt 추천
    const callFetchRecommendations = async () => {
        try {
            await fetchRecommendations(
                userDiaryState,
                userEmotionState,
                (errorMessage) => addToast(errorMessage, 'error')
            );
        } catch (error) {
            addToast(
                '음악 추천에 실패했어요. 잠시 후 다시 시도해주세요.',
                'error'
            );
        }
    };

    // 다름 버튼 클릭
    const handleEmotionNext = async () => {
        if (!validators.isEmotionValid(userEmotionState)) {
            return;
        }
        handleNextStep();
        callFetchRecommendations();
    };

    const handleButtonClick = () => {
        if (!validators.isMusicValid(selectedMusic)) {
            return;
        }

        if (mode === 'edit') {
            handleEditSubmit();
        } else {
            handleSubmitAll();
        }
    };

    return (
        <Container>
            <Section>
                <WidgetWrapper ref={diaryRef}>
                    <WriteDiaryContainer
                        onDiarySubmit={setUserDiaryState}
                        isActive={currentStep === 1}
                        disabled={currentStep !== 1}
                        initialTitle={initialdiary?.title || ''}
                        initialContent={initialdiary?.content || ''}
                        initialIsPublic={initialdiary?.isPublic || false}
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
                        initialmood={initialEmotion?.mood}
                        initialemotion={initialEmotion?.emotion}
                        initialsubemotions={initialEmotion?.subEmotions}
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
                        onRecommend={callFetchRecommendations}
                        initialData={initialMusic}
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
                            onClick={handleButtonClick}
                            width="200px"
                        >
                            {mode === 'edit' ? '수정하기' : '게시하기'}
                        </Button>
                    </ButtonContainer>
                </WidgetWrapper>
            </Section>
        </Container>
    );
};
