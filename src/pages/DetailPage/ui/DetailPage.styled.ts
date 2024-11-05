import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentContainer = styled.div`
    background-color: rgb(0, 0, 0, 0.3);
    height: 400px;
    width: 100%
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrap = styled.div`
    width: 100%;
    max-width: 960px;
    display: flex;
    // flex-direction: column; // 모바일 버전일 때
    align-items: stretch;

    gap: 10px;
`;

export const MusicContainer = styled.div`
    flex: 1;
`;

export const EmotionMoodWrap = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    gap: 10px;
`;

export const MoodContainer = styled.div`
    flex: 1;
    width: 100%;
`;

export const EmotionWrap = styled.div`
    flex: 1;
    width: 100%;
    display: flex;

    gap: 10px;
`;

export const MainEmotionContainer = styled.div`
    flex: 1.2;
`;
export const SubEmotionContainer = styled.div`
    flex: 2;
`;
