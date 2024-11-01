import React, { useState } from 'react';
import { fetchMusicRecommendation } from '@/entities/music';
import { gptAnswerType, MusicItem } from '@/entities/music/model/type';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import { SelectMusicContainer } from '@/widgets/select-music';
import { SelectEmotionContainer } from '@/widgets/select-emotion';
import { Container, Section } from './DiaryWritePage.styled';
import { MoodDataType } from '../model/type';

// TODO - 리팩토링 (로직 분리)
export const DiaryWritePage = () => {
    const { addToast } = useToastStore();
    // const [diaryData, setDiaryData] = useState();
    const [userEmotionState, setUserEmotionState] =
        useState<MoodDataType | null>(null);
    const [selectedMusic, setSelectedMusic] = useState<MusicItem | null>(null);
    const [recommendedMusicList, setRecommendedMusicList] =
        useState<gptAnswerType>([]);

    // // 일기 데이터가 넘어오면 셋팅
    // const handleDiarySubmit = (diaryData) => {
    //     setDiaryData(diaryData);
    // };

    const handleEmotionSubmit = (submittedEmotion: MoodDataType) => {
        console.log('사용자 감정 데이터 저장:', submittedEmotion);
        setUserEmotionState(submittedEmotion);
    };

    const handleMusicSelection = (selectedMusicItem: MusicItem | null) => {
        console.log('선택된 음악 데이터 저장:', selectedMusicItem);
        setSelectedMusic(selectedMusicItem);
    };

    const handleFetchRecommendations = async (
        emotionData: MoodDataType | null
    ) => {
        await fetchMusicRecommendation(emotionData, {
            onSuccess: setRecommendedMusicList,
            onError: () => addToast('음악 추천 요청에 실패했습니다.', 'error'),
            onValidationError: () =>
                addToast('먼저 감정을 선택해주세요!', 'warning')
        });
    };

    return (
        <Container>
            <Section>
                {/* <WriteDiaryContainer onSubmit={handleDiarySubmit} /> */}
                <SelectEmotionContainer
                    onMoodSelect={handleEmotionSubmit}
                    onNext={handleFetchRecommendations}
                />
                <SelectMusicContainer
                    onMusicSelect={handleMusicSelection}
                    gptRecommendMusicList={recommendedMusicList}
                />
            </Section>
        </Container>
    );
};
