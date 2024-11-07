import React from 'react';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { ScaleLoader } from 'react-spinners';
import {
    DailyConditionType,
    WeeklyConditionSummaryType
} from '@/shared/model/conditionTypes';
import isDailyEmotion from '../lib/isDailyEmotion';
import { useMediaQuery } from 'react-responsive';

const emotions = ['매우 나쁨', '나쁨', '보통', '좋음', '매우 좋음'];

interface ChartProps {
    data: DailyConditionType[] | WeeklyConditionSummaryType[];
    isLoading: boolean;
}

const Chart = ({ data, isLoading }: ChartProps) => {
    const isMobile = useMediaQuery({ maxWidth: 640 }); // 화면 너비가 600px 이하인 경우

    return isLoading ? (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '400px'
            }}
        >
            <ScaleLoader color="#DBDBDB" />
        </div>
    ) : (
        <ResponsiveContainer width="100%" height={isMobile ? 300 : 400}>
            <LineChart
                data={data}
                margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
            >
                <CartesianGrid vertical={false} />
                {isDailyEmotion(data) ? (
                    <>
                        <XAxis
                            dataKey="day"
                            angle={0}
                            dy={10}
                            height={50}
                            axisLine={false}
                            tick={{ fontSize: isMobile ? 10 : 12 }}
                        />
                        <YAxis
                            type="category"
                            dataKey="mood"
                            tickLine={false}
                            axisLine={false}
                            domain={emotions}
                            ticks={emotions}
                            allowDuplicatedCategory={false}
                            tick={{ fontSize: isMobile ? 10 : 12 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="mood"
                            stroke="#FF480E"
                            activeDot={{ r: 8 }}
                            connectNulls
                        />
                    </>
                ) : (
                    <>
                        <XAxis
                            dataKey="week"
                            angle={0}
                            dy={10}
                            height={50}
                            axisLine={false}
                            tick={{ fontSize: isMobile ? 10 : 12 }}
                        />
                        <YAxis
                            type="category"
                            dataKey="mostFrequentEmotion"
                            tickLine={false}
                            axisLine={false}
                            domain={emotions}
                            ticks={emotions}
                            allowDuplicatedCategory={false}
                            tick={{ fontSize: isMobile ? 10 : 12 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="mostFrequentEmotion"
                            stroke="#FF480E"
                            activeDot={{ r: 8 }}
                            connectNulls
                        />
                    </>
                )}
                <Tooltip
                    formatter={(value) =>
                        value === '정보 없음' || value === null
                            ? '정보 없음'
                            : value
                    }
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;
