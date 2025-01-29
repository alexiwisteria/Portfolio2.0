"use client";

import React, { useState, useEffect } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

interface WakaTimeEntry {
    range: {
        text: string;
    };
    grand_total: {
        decimal: string;
    };
}

interface FormattedData {
    name: string;
    hours: number;
}

const WakaTimeChart: React.FC = () => {
    const [data, setData] = useState<FormattedData[]>([]);
    const [chartHeight, setChartHeight] = useState(400);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://wakatime.com/share/@d433fbcd-a22c-46e5-a337-915af96350af/7ccee1d7-61d7-4a33-9fca-a74d015c1c81.json'
                );
                const json = await response.json();

                const formattedData: FormattedData[] = json.data.map((entry: WakaTimeEntry) => {
                    const parts = entry.range.text.split(' ');
                    return {
                        name: `${parts[0]} ${parts[1]} ${parts[2]}`, // Extract day, month, and date
                        hours: parseFloat(entry.grand_total.decimal), // Keep decimal values for accuracy
                    };
                });

                setData(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const updateChartSize = () => {
            if (window.innerWidth < 768) {
                setChartHeight(250);
            } else if (window.innerWidth < 1024) {
                setChartHeight(350);
            } else {
                setChartHeight(400);
            }
        };

        updateChartSize();
        window.addEventListener('resize', updateChartSize);
        return () => window.removeEventListener('resize', updateChartSize);
    }, []);

    return (
        <ResponsiveContainer width="100%" height={chartHeight}>
            <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                    label={{ value: 'Hours', angle: -90, position: 'insideLeft' }}
                    domain={[0, 'auto']}
                    allowDecimals={false}
                />
                <Tooltip formatter={(value) => Number(value).toFixed(2)} />
                <Area type="monotone" dataKey="hours" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default WakaTimeChart;
