import { SkeletonProps } from '@/shared/model/skeletonPropsTpye';
import styled from 'styled-components';

export const ChartInfoStyled = styled.h4`
    margin-top: 12px;
    font-size: 20px;
    color: #a4a4a4;
`;

export const ButtonContainer = styled.div<SkeletonProps>`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: flex-end;
    width: 100%;
`;

export const ChartButtonStlyed = styled.button`
    padding: 10px 20px;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.17);
    border-radius: 38px;
    font-weight: bold;
`;

export const ChartWrapper = styled.div<SkeletonProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: 0px 4px 20px 0px rgba(200, 200, 200, 0.3);
    padding: 50px 90px 90px 90px;
`;

export const EmotionChartStlyed = styled.div`
    max-width: 960px;
    margin: auto;
    padding-top: 150px;
`;
