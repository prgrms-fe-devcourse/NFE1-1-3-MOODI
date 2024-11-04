import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 35px;
    width: 100%;
    height: 400px;
`;

export const HiddenYoutubeContainer = styled.div`
    position: fixed;
    top: -9999px;
    left: -9999px;
    width: 1px;
    height: 1px;
    visibility: hidden;
`;

export const Loading = styled.div``;
