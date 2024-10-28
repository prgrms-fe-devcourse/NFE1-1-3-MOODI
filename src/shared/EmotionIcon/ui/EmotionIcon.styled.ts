import styled from 'styled-components';

export const StyledEmotionIcon = styled.div<{ width: string; height: string }>`
    position: relative;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`;
