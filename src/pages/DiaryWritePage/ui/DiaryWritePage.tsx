import React, { useEffect, useState } from 'react';
import { SelectMusicContainer } from '@/widgets/select-music/ui/SelectMusicContainer';
import Header from '@/widgets/header/ui/Header';
import { Container, Section } from './DiaryWritePage.styled';
import { SelectEmotionContainer } from '@/widgets/select-emotion';
import { WriteDiaryContainer } from '@/widgets/write-diary';
import { fetchGptRecommend } from '@/entities/music/api/fetchGptRecommend';
import {
    gptAnswerType,
    gptQueryParamsType,
    MusicItem
} from '@/entities/music/model/type';
import { EmotionType } from '@/shared/model/moodTypes';
import { Emotions } from '@/shared/model/EmotionEnum';
import { MoodDataType } from '../model/type';

// TODO - 리팩토링 (로직 분리)
export const DiaryWritePage = () => {
    // 테스트 다이러리
    const diary = {
        title: '우울해',
        content: '너무 우울해서 빵샀어'
    };

    // const [diaryData, setDiaryData] = useState();
    const [emotionData, setEmotionData] = useState<MoodDataType | null>(null);
    const [musicData, setMusicData] = useState<MusicItem | null>(null);

    const [gptRecommendMusicList, setGptRecommendMusicList] =
        useState<gptAnswerType>([]);

    // // 일기 데이터가 넘어오면 셋팅
    // const handleDiarySubmit = (diaryData) => {
    //     setDiaryData(diaryData);
    // };

    const handleMoodSelect = (moodState: MoodDataType) => {
        console.log('감정 데이터 셋팅 : ', moodState);
        setEmotionData(moodState);
    };

    const handleMusicSelect = (music: MusicItem | null) => {
        console.log('음악 데이터 셋팅 : ', music);
        setMusicData(music);
    };

    // TODO - diary 파라미터 넣어야함
    const createGptQuery = (mood: MoodDataType) => {
        const gptQuery: gptQueryParamsType = {
            title: '우울해',
            content: '너무 우울해서 빵샀어',
            ...(mood?.mood && { mood: mood.mood }),
            ...(mood?.emotion && { emotion: mood.emotion }),
            ...(mood?.subEmotion && {
                subemotion: mood.subEmotion.filter(
                    (item): item is string => item !== null
                )
            })
        };
        return gptQuery;
    };

    const testFunction = async (mood: MoodDataType | null) => {
        console.log('테스트 함수 실행됨');
        if (mood === null) {
            console.log('감정 선택을 먼저 완료해주세요');
        } else {
            const gptQuery = createGptQuery(mood);
            const recommendations = await fetchGptRecommend(gptQuery);
            setGptRecommendMusicList(recommendations);
        }
    };

    return (
        <Container>
            <Header />
            <Section>
                {/* <WriteDiaryContainer onDiarySubmit={handleDiarySubmit} /> */}
                <SelectEmotionContainer
                    onMoodSelect={handleMoodSelect}
                    onNext={testFunction}
                />
                <SelectMusicContainer
                    onMusicSelect={handleMusicSelect}
                    gptRecommendMusicList={gptRecommendMusicList}
                />
            </Section>
        </Container>
    );
};
