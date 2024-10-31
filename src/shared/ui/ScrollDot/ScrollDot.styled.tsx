import styled from 'styled-components';
import { ScrollDotProps } from './ScrollDot.type';

export const DotStyled = styled.div<ScrollDotProps>`
    width: 8px;
    height: 8px;
    border-radius: 50%; // 요소를 동그랗게 만듦
    background-color: ${({ isActive }) => (isActive ? '#FF480E' : '#f2f2f2')};
`;
