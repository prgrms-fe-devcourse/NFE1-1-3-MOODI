import React, { useEffect, useState } from 'react';
import { SelectMusicContainer } from '@/widgets/select-music/ui/SelectMusicContainer';
import Header from '@/widgets/header/ui/Header';
import { Container, Section } from './DiaryWritePage.styled';
import { SelectEmotionContainer } from '@/widgets/select-emotion';
import { WriteDiaryContainer } from '@/widgets/write-diary';
import { fetchGptRecommend } from '@/entities/music/api/fetchGptRecommend';
import { gptAnswerType, gptQueryParamsType } from '@/entities/music/model/type';

export const DiaryWritePage = () => {
    // 테스트 데이터
    const testdiary: gptQueryParamsType = {
        mood: '매우 나쁨',
        emotion: '슬픔',
        subemotion: ['슬픔'],
        title: '우울해',
        content: '너무 우울해서 빵샀어'
    };
    // const testdata = '뉴진스 supernatural';

    const [diaryData, setDiaryData] = useState();
    const [emotionData, setEmotionData] = useState();

    const [gptRecommendMusicList, setGptRecommendMusicList] =
        useState<gptAnswerType>([]);

    // // 일기 데이터가 넘어오면 셋팅
    // const handleDiarySubmit = (diaryData) => {
    //     setDiaryData(diaryData);
    // };

    // // 감정 데이터가 넘어오면 셋팅
    // const handleEmotionSelect = (emotionData) => {
    //     setEmotionData(emotionData);
    // };

    // const checkAndFetchRecommendations = async () => {
    //     const recommendations = await fetchGptRecommend(testdiary);
    //     setGptRecommendMusicList(recommendations);
    // };

    const testFunction = async () => {
        const recommendations = await fetchGptRecommend(testdiary);
        setGptRecommendMusicList(recommendations);
    };

    return (
        <Container>
            <Header />
            <Section>
                {/* <WriteDiaryContainer onDiarySubmit={handleDiarySubmit} />
                <SelectEmotionContainer onEmotionSelect={handleEmotionSelect} /> */}
                <button type="button" onClick={() => testFunction()}>
                    테스트 버튼
                </button>
                <SelectMusicContainer
                    gptRecommendMusicList={gptRecommendMusicList}
                />
            </Section>
        </Container>
    );
};
