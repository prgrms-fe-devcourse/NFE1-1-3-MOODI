import styled from 'styled-components';

const breakpoints = {
    mobile: '550px',
    desktop: '1024px'
};

const media = {
    mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop})`
};

export const EmotionButtonContainer = styled.div`
    max-width: 960px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    ${media.mobile} {
        flex-direction: column;
    }

    ${media.desktop} {
        flex-direction: row;
    }
`;

export const MainKeywordContainer = styled.div`
    font-size: 14px;
    font-family: 'Pretendard', sans-serif;
    color: #8c8c8c;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
`;

export const SubKeywordContainer = styled.div`
    font-size: 14px;
    font-family: 'Pretendard', sans-serif;
    color: #8c8c8c;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
`;
