import styled from 'styled-components';

export const Container = styled.div`
    max-width: 960px;
    margin: auto;
    top: 63px;
    height: calc(100vh - 63px);
    padding-top: 200px;

    @media (max-width: 960px) {
        padding-top: 150px;
        padding-left: 20px;
        padding-right: 20px;
        height: auto;
    }
`;
export const PageContainer = styled.div`
    width: 100%;
`;

export const LandingContainer = styled.div`
    margin-bottom: 30px;

    @media (max-width: 960px) {
        margin-bottom: 40px;
    }
`;
export const SubTitleContainer = styled.div`
    margin-bottom: 80px;
`;
