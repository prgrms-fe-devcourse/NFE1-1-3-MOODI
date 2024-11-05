import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Container,
    ContentContainer,
    Wrap,
    EmotionMoodWrap,
    EmotionWrap,
    MusicContainer,
    MoodContainer,
    MainEmotionContainer,
    SubEmotionContainer
} from './DetailPage.styled';
import { ShowMusicContainer } from '@/widgets/show-music';
import { ShowMoodContainer } from '@/widgets/show-mood';
import { ShowMainEmotionContainer } from '@/widgets/show-main-emotion';
import { ShowSubEmotionContainer } from '@/widgets/show-sub-emotion';

import { emotionMapping, Emotions } from '@/shared/model/EmotionEnum';
import { ConditionType } from '@/shared/model/conditionTypes';

interface DiaryData {
    title: string;
    content: string;
    is_public: boolean;
    title_date: Date;
    updated_date: Date;
    author_email: string;
    // author_username: string;

    mood: ConditionType;
    emotion: string;
    sub_emotion: string;
    music_url: string;
    music_imgurl: string;
    music_title: string;
    artist: string;

    reactions: string;
}

export const DetailPage = () => {
    const { id } = useParams();
    const [data, setData] = useState<DiaryData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://td3axvf8x7.execute-api.ap-northeast-2.amazonaws.com/moodi/diary/${id}`
                );
                const result: DiaryData = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!data) {
        return <div>Loading...</div>; // 데이터 로딩 중 표시
    }

    // 구조 분해로 변수 할당
    const {
        title,
        content,
        is_public: isPublic,

        mood,
        emotion,
        sub_emotion: subEmotion,
        title_date: titleDate,
        updated_date: updatedDate,

        music_url: youtubeId,
        music_imgurl: albumCover,
        music_title: songTitle,
        artist: artistName
    } = data;

    // 서브 감정을 매핑
    const transSubEmotion = JSON.parse(subEmotion).map(
        (emo: string) => emotionMapping[emo] ?? emo
    );

    return (
        <Container>
            <ContentContainer>{content}</ContentContainer>

            <Wrap>
                <EmotionMoodWrap>
                    <MoodContainer>
                        <ShowMoodContainer mood={mood} />
                    </MoodContainer>
                    <EmotionWrap>
                        <MainEmotionContainer>
                            <ShowMainEmotionContainer
                                emotion={emotionMapping[emotion]}
                            />
                        </MainEmotionContainer>
                        <SubEmotionContainer>
                            <ShowSubEmotionContainer
                                subEmotions={transSubEmotion}
                            />
                        </SubEmotionContainer>
                    </EmotionWrap>
                </EmotionMoodWrap>
                <MusicContainer>
                    <ShowMusicContainer
                        youtubeId={youtubeId}
                        thumbnailUrl={albumCover}
                        title={songTitle}
                        artist={artistName}
                    />
                </MusicContainer>
            </Wrap>

            {/* <ReactionContainer></ReactionContainer> */}

            {/* <ButtonContainer></ButtonContainer> */}
        </Container>
    );
};
