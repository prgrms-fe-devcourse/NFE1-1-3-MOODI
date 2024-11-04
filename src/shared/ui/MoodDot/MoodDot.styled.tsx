import styled from 'styled-components';
import { MoodDotProps } from './MoodDot.type';

const dotColors = {
    '매우 좋음': '#2797FF',
    좋음: '#09AB01',
    보통: '#FFEE00',
    나쁨: '#F39E20',
    '매우 나쁨': '#EB0606'
};

export const DotStyled = styled.div<MoodDotProps>`
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: ${({ isActive, mood }) =>
        isActive && mood ? dotColors[mood] : '#f2f2f2'};
`;
