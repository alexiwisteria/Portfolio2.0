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

const WeeklyCodingInfo: React.FC = () => {
    const [data, setData] = useState<FormattedData[]>([]);
    const [chartHeight, setChartHeight] = useState(400);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://wakatime.com/share/@d433fbcd-a22c-46e5-a337-915af96350af/7ccee1d7-61d7-4a33-9fca-a74d015c1c81.json'
                );
                if (!response.ok) {
                    console.error('Failed to fetch data');
                    return;
                }
                const json = await response.json();

                const formattedData: FormattedData[] = json.data.map((entry: WakaTimeEntry) => {
                    const parts = entry.range.text.split(' ');
                    return {
                        name: window.innerWidth < 640 ? parts[0] : `${parts[0]} ${parts[1]} ${parts[2]}`,
                        hours: parseFloat(entry.grand_total.decimal),
                    };
                });

                setData(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData().catch((error) => console.error("Unhandled fetch error:", error));
    }, []);

    useEffect(() => {
        const updateChartSize = () => {
            if (window.innerWidth < 640) {
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
        <div className="flex justify-center items-center w-full p-4 md:p-6 lg:p-8">
            <div className="flex flex-col items-center w-full max-w-screen-lg">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
                    Code & Conquer: My Weekly Dev Stats
                </h2>
                <p className="text-sm md:text-lg text-gray-700 mb-4 text-center">
                    Analyzing my coding hours—because every keystroke counts!
                </p>
                <div className="w-full flex justify-center">
                    <ResponsiveContainer width="100%" height={chartHeight}>
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#8D99AA" />
                            <XAxis dataKey="name" stroke="#4C7F7E" />
                            <YAxis
                                label={{ value: 'Hours', angle: -90, position: 'insideLeft' }}
                                domain={[0, 'auto']}
                                allowDecimals={false}
                                stroke="#4C7F7E"
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: "#FFF3E0", color: "#4C7F7E" }}
                                formatter={(value) => Number(value).toFixed(2)}
                            />
                            <Area type="monotone" dataKey="hours" stroke="#F4A261" fill="#4C7F7E" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default WeeklyCodingInfo;
