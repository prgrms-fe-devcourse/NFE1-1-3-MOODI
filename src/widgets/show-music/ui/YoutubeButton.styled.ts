import styled from 'styled-components';

export const YoutubeButtonContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 50px;
    background-color: #d80700;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;

    color: #ffffff;
    font-weight: normal;

    &:hover {
        background-color: #b80600;
    }
`;
