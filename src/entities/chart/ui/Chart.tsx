import React from 'react';
import {
    DailyConditionType,
    WeeklyConditionSummaryType
} from '@/shared/model/conditionTypes';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import isDailyEmotion from '../lib/isDailyEmotion';

const emotions = ['매우 나쁨', '나쁨', '보통', '좋음', '매우 좋음'];

interface ChartProps {
    data: DailyConditionType[] | WeeklyConditionSummaryType[];
}

const Chart = ({ data }: ChartProps) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
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
                        />
                        <YAxis
                            type="category"
                            dataKey="mood"
                            tickLine={false}
                            axisLine={false}
                            domain={emotions}
                            ticks={emotions}
                            allowDuplicatedCategory={false}
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
                        />
                        <YAxis
                            type="category"
                            dataKey="mostFrequentEmotion"
                            tickLine={false}
                            axisLine={false}
                            domain={emotions}
                            ticks={emotions}
                            allowDuplicatedCategory={false}
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
