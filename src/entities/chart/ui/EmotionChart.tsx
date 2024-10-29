import React from 'react';
import Title from '@/shared/ui/Title/Title';
import {
    ButtonContainer,
    ChartButtonStlyed,
    ChartWrapper,
    EmotionChartStlyed
} from './EmotionChart.styled';
import { InfoStyled } from '@/shared/ui/Info/Info.styeld';
import Chart from '@/features/chart/ui/Chart';
import caculateEmotion from '../lib/caculateEmotion';
import useGetDiaries from '@/shared/hooks/useGetDiaries';
import useGetMood from '@/shared/hooks/useGetMood';

interface EmotionChart {
    userName: string;
}

const EmotionChart = ({ userName = 'test' }: EmotionChart) => {
    const { year, month, week } = caculateEmotion();
    const { data } = useGetMood({ year, month, week });
    return (
        <EmotionChartStlyed>
            <Title>{userName}</Title>
            <InfoStyled>{`${month}월 ${week}주차 ${userName}님의 평균 감정은 ${data.mostFrequentEmotion}입니다.`}</InfoStyled>
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
