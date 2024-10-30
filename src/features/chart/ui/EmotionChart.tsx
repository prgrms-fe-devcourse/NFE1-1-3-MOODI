import React from 'react';
import Title from '@/shared/ui/Title/Title';
import {
    ButtonContainer,
    ChartWrapper,
    EmotionChartStlyed,
    ChartButtonStlyed
} from './EmotionChart.styled';
import { InfoStyled } from '@/shared/ui/Info/Info.styeld';
import Chart from '@/entities/chart/ui/Chart';
import useGetMood from '@/shared/hooks/useGetMood';
import isWeekly from '../lib/isWeekly';
import useToday from '../hooks/useToday';
import DateSlider from '@/entities/dataSldier/DateSlider';

interface EmotionChartProps {
    userName: string;
}

const EmotionChart = ({ userName = 'test' }: EmotionChartProps) => {
    const {
        currentYear,
        currentMonth,
        currentWeek,
        viewMode,
        handleChangeWeek,
        handleChangeMonth,
        handleChangeYear,
        handleChangeViewMode
    } = useToday();

    const moodParams = {
        year: currentYear,
        month: currentMonth,
        ...(currentWeek !== null && { week: currentWeek })
    };

    const { data } = useGetMood(moodParams);

    return (
        <EmotionChartStlyed>
            <Title>{userName}</Title>
            <InfoStyled>
                {data
                    ? `${data.period} ${userName}님의 빈번한 감정은 ${data.mostFrequentEmotion === null ? '정보가 없습니다.' : data.mostFrequentEmotion}`
                    : '데이터를 불러오는 중입니다...'}
            </InfoStyled>

            <ButtonContainer>
                <ChartButtonStlyed
                    onClick={() => {
                        handleChangeViewMode('month');
                        handleChangeWeek({ weekParmam: null });
                    }}
                >
                    월간 변경
                </ChartButtonStlyed>
                <ChartButtonStlyed
                    onClick={() => {
                        handleChangeViewMode('week');
                        handleChangeWeek({ weekParmam: currentWeek || 1 });
                    }}
                >
                    주간 변경
                </ChartButtonStlyed>
            </ButtonContainer>
            <ChartWrapper>
                <DateSlider
                    year={currentYear}
                    month={currentMonth}
                    week={currentWeek}
                    viewMode={viewMode}
                    onDateChange={(newDate) => {
                        handleChangeYear({ yearParmam: newDate.year });
                        handleChangeMonth({ monthParmam: newDate.month });
                        handleChangeWeek({ weekParmam: newDate.week });
                        handleChangeViewMode(newDate.viewMode);
                    }}
                />
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
