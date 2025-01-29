"use client";

import React, { useEffect, useState } from "react";
import { RadialBarChart, PolarAngleAxis, RadialBar, Tooltip } from "recharts";
import { FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaJava, FaICursor } from "react-icons/fa";

const predefinedColors = ["#D27D7D", "#E8A76C", "#E0D070", "#8EBF8E", "#6FA3BF", "#7885BF", "#9B7FBF", "#BF6F92"];

const languageIcons: Record<string, (color: string) => JSX.Element> = {
    JavaScript: (color) => <FaJs className="text-lg md:text-xl" style={{ color }} />,
    Python: (color) => <FaPython className="text-lg md:text-xl" style={{ color }} />,
    HTML: (color) => <FaHtml5 className="text-lg md:text-xl" style={{ color }} />,
    CSS: (color) => <FaCss3Alt className="text-lg md:text-xl" style={{ color }} />,
    React: (color) => <FaReact className="text-lg md:text-xl" style={{ color }} />,
    Java: (color) => <FaJava className="text-lg md:text-xl" style={{ color }} />,
    TypeScript: (color) => <FaICursor className="text-lg md:text-xl" style={{ color }} />,
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
            <div className="bg-white p-2 border border-gray-300 rounded shadow-md text-sm">
                <p className="font-semibold">{data.name}</p>
                <p>{data.text}</p>
            </div>
        );
    }
    return null;
};

const CustomLegend: React.FC<{ payload?: { value: string; color: string }[] }> = ({ payload }) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {payload?.map((entry, index) => (
                <div key={index} className="flex items-center gap-1">
                    {languageIcons[entry.value]?.(entry.color)}
                    <span className="text-sm md:text-base font-semibold" style={{ color: entry.color }}>
                        {entry.value}
                    </span>
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

    return (
        <div className="flex flex-col items-center text-center p-4 md:p-6 lg:p-8 w-full max-w-5xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">Code Clock</h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4">My Coding Adventure: Time Spent in Each Language</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
                <RadialBarChart
                    width={350}
                    height={300}
                    className="md:w-[400px] md:h-[350px] lg:w-[600px] lg:h-[500px]"
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

                <CustomLegend payload={chartData.slice().reverse().map(item => ({ value: item.name, color: item.fill }))} />
            </div>
        </div>
    );
};

export default CodeLangMetrics;
