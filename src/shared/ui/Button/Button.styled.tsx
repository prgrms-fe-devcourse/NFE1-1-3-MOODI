import styled from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => {
        if (!props.isActive) {
            return '#BCBCBC'; // isActive, 활성이 false인 경우
        }
        return props.hasBorder ? '#FFFFFF' : '#FF480E'; // hasBorder에 따른 배경색
    }};
    border: ${(props) =>
        props.hasBorder && props.isActive ? '1px solid #FF480E' : 'none'};
    color: ${(props) =>
        props.hasBorder && props.isActive ? '#FF480E' : '#FFFFFF'};
    font-size: ${(props) => props.fontSize || '16px'};
    height: ${(props) => props.height || '44px'};
    width: ${(props) => props.width || '300px'};
    border-radius: 10px; // 고정 값
    transition: background-color 0.2s ease;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => {
            if (!props.isActive) {
                return 'none'; // isActive, 활성이 false인 경우
            }
            return props.hasBorder ? '#FFF4F1' : '#E13600'; // hasBorder에 따른 배경색
        }};
    }
`;
