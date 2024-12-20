import styled from 'styled-components';

const breakpoints = {
    mobile: '550px',
    desktop: '1024px'
};

const media = {
    mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop})`
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0 50px 0;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    gap: 50px;

    ${media.mobile} {
        width: 90%;
        gap: 50px;
    }

    ${media.desktop} {
        max-width: 960px;
        gap: 200px;
    }
`;

export const DisabledOverlay = styled.div<{ disabled: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    pointer-events: ${({ disabled }) => (disabled ? 'auto' : 'none')};
    opacity: ${({ disabled }) => (disabled ? 1 : 0)};
    transition: opacity 0.3s ease;
    z-index: 10;
`;

export const WidgetWrapper = styled.div`
    position: relative; // DisabledOverlay의 기준점
    width: 100%;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    gap: 0.5rem;
`;
