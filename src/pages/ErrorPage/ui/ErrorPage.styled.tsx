import styled from 'styled-components';

export const ErrorPageStyled = styled.div`
    max-width: 960px;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0 20px;
    }
`;

export const ErrorImage = styled.img`
    object-fit: cover;
    margin: auto;
    width: 100%;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const ErrorTilte = styled.h2`
    text-align: center;
    font-size: 50px;

    a {
        text-decoration: none;
        color: black;
    }
    @media (max-width: 768px) {
        font-size: 36px;
    }

    @media (max-width: 480px) {
        font-size: 28px;
    }
`;
