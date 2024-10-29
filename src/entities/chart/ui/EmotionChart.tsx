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
import useGetMood from '@/shared/hooks/useGetMood';
import isWeekly from '../lib/isWeekly';

interface EmotionChart {
    userName: string;
}

const EmotionChart = ({ userName = 'test' }: EmotionChart) => {
    const { year, month, week } = caculateEmotion();

    const { data, isLoading, error } = useGetMood({ year, month });

    if (isLoading) return <div>Loading...</div>;

    console.log(data);

    if (error)
        return <div>Error: 데이터를 불러오는 중 오류가 발생했습니다.</div>;

    return (
        <EmotionChartStlyed>
            <Title>{userName}</Title>
            <InfoStyled>
                {data
                    ? `${data.period} ${userName}님의 빈번한 감정은 ${data.mostFrequentEmotion === null ? '정보가 없습니다.' : data.mostFrequentEmotion}`
                    : '데이터를 불러오는 중입니다...'}
            </InfoStyled>
            <ChartWrapper>
                <ButtonContainer>
                    <ChartButtonStlyed>월간</ChartButtonStlyed>
                    <ChartButtonStlyed>주간</ChartButtonStlyed>
                </ButtonContainer>
                {data &&
                    (isWeekly(data) ? (
                        <Chart data={data.allEmotions} />
                    ) : (
                        <Chart data={data.weeklyResults} />
                    ))}
            </ChartWrapper>
        </EmotionChartStlyed>
    );
};

export default EmotionChart;
