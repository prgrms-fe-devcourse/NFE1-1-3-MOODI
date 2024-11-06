import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    margin-top: 150px;
    margin-bottom: 100px;
`;

export const ContentContainer = styled.div`
    max-width: 960px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrap = styled.div`
    max-width: 960px;
    width: 100%;
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

export const ReactionShareWrap = styled.div`
    max-width: 960px;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const ReactionContainer = styled.div`
    // background-color: rgb(0, 0, 0, 0.1);
`;

export const ShareButtonContainer = styled.div`
    position: absolute;
    right: 0;
`;

export const ButtonContainer = styled.div`
    // background-color: rgb(0, 0, 0, 0.1);
    max-width: 960px;
    width: 100%;

    display: flex;
    gap: 30px;
    padding: 0 30px;
`;
