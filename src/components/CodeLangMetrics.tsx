"use client";

import React, { useEffect, useState } from "react";
import { RadialBarChart, PolarAngleAxis, RadialBar, Tooltip } from "recharts";
import { FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaJava, FaICursor } from "react-icons/fa";

const predefinedColors = ["#D27D7D", "#E8A76C", "#E0D070", "#8EBF8E", "#6FA3BF", "#7885BF", "#9B7FBF", "#BF6F92"];

const languageIcons: Record<string, (color: string) => JSX.Element> = {
    JavaScript: (color) => <FaJs color={color} />,
    Python: (color) => <FaPython color={color} />,
    HTML: (color) => <FaHtml5 color={color} />,
    CSS: (color) => <FaCss3Alt color={color} />,
    React: (color) => <FaReact color={color} />,
    Java: (color) => <FaJava color={color} />,
    TypeScript: (color) => <FaICursor color={color} />,
};

type WakaTimeData = {
    name: string;
    hours: number;
    text: string;
    fill: string;
};

type WakaTimeApiResponse = {
    name: string;
    percent: number;
    text: string;
    color: string;
    hours: number;
};

const CustomTooltip: React.FC<{ active?: boolean; payload?: any[] }> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-white p-2 border border-gray-300 rounded">
                <p className="font-bold m-0">{data.name}</p>
                <p className="m-0">{data.text}</p>
            </div>
        );
    }
    return null;
};

const CustomLegend: React.FC<{ payload?: { value: string; color: string }[] }> = ({ payload }) => {
    return (
        <div className="flex flex-wrap max-w-xs justify-start gap-2 mt-[-100px]">
            {payload?.map((entry, index) => (
                <div key={index} className="flex items-center">
                    {languageIcons[entry.value]?.(entry.color) || ""}
                    <span className="ml-1 font-bold" style={{ color: entry.color }}>{entry.value}</span>
                </div>
            ))}
        </div>
    );
};

const CodeLangMetrics: React.FC = () => {
    const [chartData, setChartData] = useState<WakaTimeData[]>([]);

    useEffect(() => {
        fetch(
            "https://wakatime.com/share/@d433fbcd-a22c-46e5-a337-915af96350af/a477488e-b36e-4cbd-bd41-a07b75dc07ad.json"
        )
            .then((response) => response.json())
            .then((data) => {
                if (!data || !Array.isArray(data.data)) return;

                const processedData: WakaTimeData[] = data.data
                    .filter((item: WakaTimeApiResponse) => item.hours > 5)
                    .map((item: WakaTimeApiResponse, index: number) => ({
                        name: item.name,
                        hours: item.hours,
                        text: item.text,
                        fill: predefinedColors[index % predefinedColors.length],
                    }))
                    .sort((a: WakaTimeData, b: WakaTimeData) => a.hours - b.hours);

                setChartData(processedData);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const maxHours = Math.max(...chartData.map((item) => item.hours), 10);

    return (
        <div className="flex flex-col items-center text-center mt-3 mb-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Code Clock</h2>
            <p className="text-md md:text-lg text-gray-700 mb-3">My Coding Adventure: Time Spent in Each Language</p>
            <div className="flex flex-row items-center justify-center">
                <RadialBarChart
                    width={500}
                    height={400}
                    innerRadius="30%"
                    outerRadius="85%"
                    data={chartData}
                    startAngle={180}
                    endAngle={0}
                >
                    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                    <RadialBar dataKey="hours" background data={chartData} />
                    <Tooltip content={<CustomTooltip />} />
                </RadialBarChart>
                <div className="ml-6 flex items-center">
                    <CustomLegend payload={chartData.slice().reverse().map(item => ({ value: item.name, color: item.fill }))} />
                </div>
            </div>
        </div>
    );
};

export default CodeLangMetrics;
