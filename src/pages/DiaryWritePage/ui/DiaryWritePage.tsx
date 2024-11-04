import React, { useEffect, useMemo, useState } from 'react';
import { fetchMusicRecommendation } from '@/entities/music';
import { gptAnswerType, MusicItem } from '@/entities/music/model/type';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import { SelectMusicContainer } from '@/widgets/select-music';
import { SelectEmotionContainer } from '@/widgets/select-emotion';
import { WriteDiaryContainer } from '@/widgets/write-diary';
import { DiaryDescDataType } from '@/widgets/write-diary/model/type';
import {
    ButtonContainer,
    Container,
    DisabledOverlay,
    Section,
    WidgetWrapper
} from './DiaryWritePage.styled';
import { MoodDataType } from '../model/type';
import Button from '@/shared/ui/Button/Button';
import { postDiaryApi } from '@/shared/api/diary';
import { DiaryData, DiaryType, PostDiaryType } from '@/shared/model/diaryType';

export const DiaryWritePage = () => {
    // 테스트 유저 이메일 : 전역 스토어에서 받아옵니다
    const testUserEmail = 'wookgod01@naver.com.com';
    // 테스트 날짜 : 쿼리스트링으로 넘어옵니다
    const testDate = '2024-11-04';
    // 작성 단계
    const [currentStep, setCurrentStep] = useState<number>(1);

    const { addToast } = useToastStore();

    const [userDiaryState, setUserDiaryState] =
        useState<DiaryDescDataType | null>(null);
    const [userEmotionState, setUserEmotionState] =
        useState<MoodDataType | null>(null);
    const [selectedMusic, setSelectedMusic] = useState<MusicItem | null>(null);

    const [recommendedMusicList, setRecommendedMusicList] =
        useState<gptAnswerType>([]);

    const handleFetchRecommendations = async (
        diaryData: DiaryDescDataType | null,
        emotionData: MoodDataType | null
    ) => {
        const combinedData = {
            ...(diaryData?.title && { title: diaryData.title }),
            ...(diaryData?.content && { content: diaryData.content }),
            ...(emotionData?.mood && { mood: emotionData.mood }),
            ...(emotionData?.emotion && { emotion: emotionData.emotion }),
            ...(emotionData?.subEmotions && {
                subemotion: emotionData.subEmotions.filter(
                    (emotion): emotion is string => emotion !== null
                )
            })
        };

        await fetchMusicRecommendation(combinedData, {
            onSuccess: setRecommendedMusicList,
            onError: () => addToast('음악 추천 요청에 실패했습니다.', 'error'),
            onValidationError: () =>
                addToast('먼저 감정을 선택해주세요!', 'warning')
        });
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handleNextStep = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const handleDiarySubmit = (submittedDiary: DiaryDescDataType) => {
        console.log('사용자 일기 데이터 저장:', submittedDiary);
        setUserDiaryState(submittedDiary);
    };

    const handleEmotionSubmit = async (submittedEmotion: MoodDataType) => {
        console.log('사용자 감정 데이터 저장:', submittedEmotion);
        setUserEmotionState(submittedEmotion);
    };

    const handleMusicSelection = (selectedMusicItem: MusicItem | null) => {
        console.log('선택된 음악 데이터 저장:', selectedMusicItem);
        setSelectedMusic(selectedMusicItem);
    };

    // 유효성 체크
    const checkNullOrUndefined = (obj: unknown): boolean => {
        if (obj === null || obj === undefined) {
            return false;
        }

        if (typeof obj === 'object') {
            return !Object.values(obj).some(
                (value) =>
                    value === null ||
                    value === undefined ||
                    (typeof value === 'object' && !checkNullOrUndefined(value))
            );
        }

        return true;
    };

    const isValidForm = useMemo(() => {
        return (
            checkNullOrUndefined(userDiaryState) &&
            checkNullOrUndefined(userEmotionState) &&
            checkNullOrUndefined(selectedMusic)
        );
    }, [userDiaryState, userEmotionState, selectedMusic]);

    const handleSubmitAll = () => {
        console.log('백엔드에 일기 데이터 제출됨');
        const diary: PostDiaryType = {
            title: userDiaryState?.title || '',
            content: userDiaryState?.content || '',
            is_public: userDiaryState?.isPublic ?? false,

            music_url: selectedMusic?.youtubeId || '',

            author_email: testUserEmail || '',

            mood: userEmotionState?.mood || '',
            emotion: userEmotionState?.emotion || '',
            sub_emotion: userEmotionState?.subEmotions
                ? JSON.stringify(
                      userEmotionState.subEmotions.filter(
                          (emotion) => emotion !== null
                      )
                  )
                : '',

            date: testDate,

            music_title: selectedMusic?.title || '',
            music_imgurl: selectedMusic?.thumbnailUrl || '',
            artist: selectedMusic?.artist || '',
            music_id: selectedMusic?.youtubeId || ''
        };
        try {
            postDiaryApi(diary);
            addToast('일기를 작성했어요.', 'success');
        } catch (error) {
            addToast('일기 작성에 실패했습니다.', 'error');
        }
    };

    return (
        <Container>
            <Section>
                <WidgetWrapper>
                    <WriteDiaryContainer
                        onDiarySubmit={handleDiarySubmit}
                        isActive={currentStep === 1}
                        disabled={currentStep !== 1}
                    />
                    <DisabledOverlay disabled={currentStep !== 1} />
                    <ButtonContainer>
                        <Button
                            borderradius="10px"
                            fontSize="16px"
                            height="60px"
                            isActive={checkNullOrUndefined(userDiaryState)}
                            onClick={() => {
                                handleNextStep();
                            }}
                            width="200px"
                        >
                            다음
                        </Button>
                    </ButtonContainer>
                </WidgetWrapper>

                <WidgetWrapper>
                    <SelectEmotionContainer
                        onMoodSelect={handleEmotionSubmit}
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
                            isActive={
                                checkNullOrUndefined(userEmotionState?.mood) &&
                                checkNullOrUndefined(userEmotionState?.emotion)
                            }
                            onClick={() => {
                                handleNextStep();
                                handleFetchRecommendations(
                                    userDiaryState,
                                    userEmotionState
                                );
                            }}
                            width="200px"
                        >
                            다음
                        </Button>
                    </ButtonContainer>
                </WidgetWrapper>

                <WidgetWrapper>
                    <SelectMusicContainer
                        onMusicSelect={handleMusicSelection}
                        gptRecommendMusicList={recommendedMusicList}
                        isActive={currentStep === 3}
                        disabled={currentStep !== 3}
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
                            isActive={
                                checkNullOrUndefined(userDiaryState) &&
                                checkNullOrUndefined(userEmotionState) &&
                                checkNullOrUndefined(selectedMusic)
                            }
                            onClick={() => {
                                handleSubmitAll();
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
