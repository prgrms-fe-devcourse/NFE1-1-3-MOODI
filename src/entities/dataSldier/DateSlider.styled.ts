import styled from 'styled-components';

export const MonthWeekSelectorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;

export const ArrowButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

export const Display = styled.span`
    margin: 0 140px;
    font-size: 20px;
`;

export const SliderInfoContainer = styled.div`
    margin-bottom: 100px;
`;
