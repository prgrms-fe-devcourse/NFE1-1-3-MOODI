import styled, { keyframes } from 'styled-components';

const moveAnimation = keyframes`
    0%, 100% {
        // transform: translateY(0);
        background-color: #ff480e;
    }
    50% {
        // transform: translateY(-5px);
        background-color: #ff480ebb;
    }
`;

const moveImgAnimation = keyframes`
    0%, 100% {
        transform: translateY(0) rotate(-45deg);
    }
    50% {
        transform: translateY(-5px) rotate(-45deg);
    }
`;

export const StyledButton = styled.button`
    position: fixed;
    bottom: 60px;
    right: 90px;
    width: 91px;
    height: 91px;
    border: none;
    border-radius: 100px;
    background-color: #ff480e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: -20px;
    cursor: pointer;
    z-index: 1000;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 85%;
        height: 85%;
        border: 1px solid #ffffff;
        border-radius: 100px;
        transform: translate(-50%, -50%);
        z-index: -1;
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        height: 70%;
        border: 1px solid #ffffff4c;
        border-radius: 100px;
        transform: translate(-50%, -50%);
        z-index: -1;
    }

    &:hover {
        animation: ${moveAnimation} 1s ease-in-out infinite;
    }

    // &:hover text {
    //     animation: ${moveAnimation} 1s ease-in-out infinite;
    // }

    &:hover img {
        animation: ${moveImgAnimation} 1s ease-in-out infinite;
    }
`;

export const StyledText = styled.span`
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    font-family: 'Pretendard', sans-serif;
`;

export const Container = styled.div`
    width: 100%;
`;

export const StyledImg = styled.img`
    height: 25px;
    width: 25px;
    transform: rotate(-45deg);
    display: inline-block;
    cursor: pointer;
`;
