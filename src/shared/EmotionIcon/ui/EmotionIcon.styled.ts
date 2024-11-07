import styled from 'styled-components';

const breakpoints = {
    mobile: '550px',
    desktop: '1024px'
};

const media = {
    mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop})`
};

export const StyledEmotionIcon = styled.div<{ width: string; height: string }>`
    position: relative;

    ${media.mobile} {
    }

    ${media.desktop} {
        width: ${({ width }) => width};
        height: ${({ height }) => height};
    }

    & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`;
