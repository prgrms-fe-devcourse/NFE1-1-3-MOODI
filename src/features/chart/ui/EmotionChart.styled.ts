import { SkeletonProps } from '@/shared/model/skeletonPropsTpye';
import styled from 'styled-components';

export const ChartInfoStyled = styled.h4`
    margin-top: 12px;
    font-size: 20px;
    color: #a4a4a4;
    @media (max-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

export const ButtonContainer = styled.div<SkeletonProps>`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    justify-content: flex-end;
    width: 100%;
    @media (max-width: 760px) {
        margin-top: 5px;
        margin-bottom: 10px;
    }
`;

export const ChartButtonStlyed = styled.button`
    padding: 10px 20px;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.17);
    border-radius: 38px;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.04);
    }

    @media (max-width: 768px) {
        padding: 5px 5px;
        font-size: 10px;
    }
`;

export const ChartWrapper = styled.div<SkeletonProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: 0px 4px 20px 0px rgba(200, 200, 200, 0.3);
    padding: 50px 90px 90px 90px;
    @media (max-width: 760px) {
        padding: 30px 40px 50px 40px;
    }
`;

export const EmotionChartStlyed = styled.div`
    max-width: 960px;
    margin: auto;
    padding-top: 150px;
    height: 940px;
    @media (max-width: 760px) {
        width: 90%;
        height: 700px;
    }
`;
