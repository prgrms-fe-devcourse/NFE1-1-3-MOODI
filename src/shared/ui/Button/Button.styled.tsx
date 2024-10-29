import styled from 'styled-components';
import { ButtonProps } from './Button.types';

export const StyledButton = styled.button.withConfig({
    shouldForwardProp: (prop) => !['isActive', 'hasBorder'].includes(prop)
})<ButtonProps>`
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
    font-size: ${(props) => props.fontSize};
    font-family: 'Pretendard', sans-serif;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-radius: 10px;
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
