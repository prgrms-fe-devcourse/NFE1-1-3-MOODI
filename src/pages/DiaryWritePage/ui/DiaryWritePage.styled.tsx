import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 960px;
    gap: 200px;
`;

export const DisabledOverlay = styled.div<{ disabled: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7); // 흰색 반투명
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
