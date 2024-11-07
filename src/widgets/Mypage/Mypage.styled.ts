import styled from 'styled-components';

export const MypageSpan = styled.span`
    font-size: 16px;
    display: inline-block;
    padding: 1rem 0;
`;

export const ButtonStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    @media (max-width: 760px) {
        gap: 10px;
    }
`;

export const MypageStyled = styled.div`
    max-width: 500px;
    margin: auto;
    padding-bottom: 150px;
    @media (max-width: 760px) {
        width: 90%;
    }
`;
