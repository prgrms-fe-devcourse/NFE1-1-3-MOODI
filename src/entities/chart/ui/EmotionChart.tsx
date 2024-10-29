import React from 'react';
import Title from '@/shared/ui/Title/Title';
import {
    ButtonContainer,
    ChartButtonStlyed,
    ChartInfoStyled,
    ChartWrapper,
    EmotionChartStlyed
} from './EmotionChart.styled';
import Chart from '@/features/chart/ui/Chart';
import { InfoStyled } from '@/shared/ui/Info/Info.styeld';

interface EmotionChart {
    userName: string;
}

// test
const month = 1;
const week = 2;
const feelingAverage = 3;

const EmotionChart = ({ userName = 'test' }: EmotionChart) => {
    return (
        <EmotionChartStlyed>
            <Title>{userName}</Title>
            <InfoStyled>{`${month}월 ${week}주차 ${userName}님의 평균 감정은 ${feelingAverage}입니다.`}</InfoStyled>
            <ChartWrapper>
                <ButtonContainer>
                    <ChartButtonStlyed>월간</ChartButtonStlyed>
                    <ChartButtonStlyed>주간</ChartButtonStlyed>
                </ButtonContainer>
                <Chart />
            </ChartWrapper>
        </EmotionChartStlyed>
    );
};

export default EmotionChart;
