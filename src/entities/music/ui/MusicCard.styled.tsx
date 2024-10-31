import styled, { keyframes, css } from 'styled-components';

interface ContainerProps {
    $isSelected: boolean;
}

interface ThumbnailProps {
    $isPlaying: boolean;
}

const colorAnimation = keyframes`
    0% {
        border-color: #FF480E;
    }
    50% {
        border-color:  #ffc5b3;
    }
    100% {
        border-color:  #FF480E;
    }
`;

export const Container = styled.div<ContainerProps>`
    width: 250px;
    /* height: 300px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    transition: all 0.2s ease;
    border: ${(props) => (props.$isSelected ? '2px solid #a6a6a6' : 'none')};
    background-color: ${(props) => (props.$isSelected ? '#efefef' : 'none')};
    &:hover {
        background-color: #f2f2f2;
        cursor: pointer;
    }
    padding: 1rem;
    justify-content: center;
    gap: 0.5rem;
`;

export const ThumbnailContainer = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconWrapper = styled.div<{ $show: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    opacity: ${(props) => (props.$show ? 1 : 0)};
    transition: opacity 0.2s ease;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .material-symbols-outlined {
        font-size: 35px;
        color: #ffffff;
    }
`;

export const Thumbnail = styled.div<ThumbnailProps>`
    border-radius: 100%;
    width: 220px;
    height: 220px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    ${IconWrapper} {
        opacity: ${(props) => (props.$isPlaying ? 1 : 0)};
    }

    &:hover ${IconWrapper} {
        opacity: 1;
    }

    &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border-radius: 100%;
        border: 15px solid transparent;
        pointer-events: none;
        transition: all 0.2s ease;
        z-index: 2;

        ${(props) =>
            props.$isPlaying &&
            css`
                animation: ${colorAnimation} 2s ease-in-out infinite;
            `}
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${(props) =>
            props.$isPlaying ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)'};
        transition: background-color 0.2s ease;
        z-index: 1;
    }

    &:hover {
        cursor: pointer;
        &::after {
            background-color: ${(props) =>
                props.$isPlaying ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.2)'};
        }
    }
`;

export const StyledImg = styled.img`
    object-fit: cover;
    width: 220px;
    height: 220px;
    z-index: 0;
`;

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 20px;
    display: flex;
    width: 100%;
    text-align: center;
`;

export const Artist = styled.div`
    color: #939393;
    font-size: 14px;
`;
