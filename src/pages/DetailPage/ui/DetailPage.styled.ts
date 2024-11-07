import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 100px;
`;

export const ContentContainer = styled.div`
    max-width: 960px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;

    @media (max-width: 550px) {
        margin-top: 50px;
    }
`;

export const Wrap = styled.div`
    max-width: 960px;
    width: 90%;
    display: flex;
    align-items: stretch;

    gap: 10px;

    @media (max-width: 550px) {
        flex-direction: column;
    }
`;

export const MusicContainer = styled.div`
    flex: 1;
`;

export const EmotionMoodWrap = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;

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

    @media (max-width: 550px) {
        flex: 1;
    }
`;
export const SubEmotionContainer = styled.div`
    flex: 2;

    @media (max-width: 550px) {
        flex: 1;
    }
`;

export const ReactionShareWrap = styled.div`
    max-width: 960px;
    width: 90%;
    margin: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 550px) {
        flex-direction: column;
        margin: 50px 0;
        gap: 20px;
    }
`;

export const ReactionContainer = styled.div`
    // background-color: rgb(0, 0, 0, 0.1);
`;

export const ShareButtonContainer = styled.div`
    position: absolute;
    right: 0;

    @media (max-width: 550px) {
        position: static;
    }
`;

export const ButtonContainer = styled.div`
    // background-color: rgb(0, 0, 0, 0.1);
    max-width: 960px;
    width: 100%;

    display: flex;
    gap: 30px;
    padding: 0 30px;
`;
