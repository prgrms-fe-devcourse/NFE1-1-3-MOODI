import styled from 'styled-components';

export const Box = styled.div<{ imgUrl: string }>`
    width: 135px;
    height: 115px;
    border-radius: 15px;
    background-image: url(${(props) => props.imgUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: gray;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: end;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
        transition: 0.2s;
        opacity: 0;
    }

    &:hover::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
        opacity: 1;
    }

    p {
        opacity: 0;
        z-index: 99;
        color: white;
        transition: 0.2s;
        font-size: 14px;
        padding-bottom: 8px;
    }

    &:hover > p {
        opacity: 1;
        z-index: 99;
        color: white;
    }
`;
