import React from 'react';
import { DataType } from '../model/types';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const emotions = ['매우나쁨', '나쁨', '보통', '좋음', '매우좋음'];

const data: DataType[] = [
    { name: 'Sun', value: '매우나쁨' },
    { name: 'Mon', value: '나쁨' },
    { name: 'Tue', value: '보통' },
    { name: 'Wed', value: '좋음' },
    { name: 'Thu', value: '매우좋음' },
    { name: 'Fri', value: '나쁨' },
    { name: 'Sat', value: '매우나쁨' }
];

const Chart = () => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart
                data={data}
                margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="name"
                    angle={0}
                    dy={10}
                    height={50}
                    axisLine={false}
                />
                <YAxis
                    type="category"
                    dataKey="value"
                    tickLine={false}
                    axisLine={false}
                    ticks={emotions}
                />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#FF480E"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;
