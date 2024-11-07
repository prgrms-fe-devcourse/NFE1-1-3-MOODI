import styled from 'styled-components';

export const MonthWeekSelectorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

export const ArrowButton = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

export const Display = styled.span`
    margin: 0 140px;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 16px;
        margin: 0 100px;
    }
    @media (max-width: 480px) {
        font-size: 12px;
        margin: 0 60px;
    }
`;

export const SliderInfoContainer = styled.div`
    margin-bottom: 100px;
    @media (max-width: 768px) {
        margin-bottom: 60px;
    }
    @media (max-width: 480px) {
        margin-bottom: 20px;
    }
`;
