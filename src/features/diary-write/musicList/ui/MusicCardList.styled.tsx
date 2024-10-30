import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 35px;
    width: 100%;
    /* padding: 2rem; */
`;

export const HiddenYoutubeContainer = styled.div`
    position: fixed;
    top: -9999px;
    left: -9999px;
    width: 1px;
    height: 1px;
    visibility: hidden;
`;
