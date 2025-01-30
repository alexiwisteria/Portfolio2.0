"use client";

import React, { useState, useEffect } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

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

// Custom Tooltip Component (Fix for Tailwind Styling)
const CustomTooltip: React.FC<{ active?: boolean; payload?: any[] }> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-orange-100 text-gray-700 p-2 border border-gray-300 rounded shadow-md">
                <p className="font-bold">{payload[0].payload.name}</p>
                <p>{Number(payload[0].value).toFixed(2)} hours</p>
            </div>
        );
    }
    return null;
};

const WeeklyCodingInfo: React.FC = () => {
    const [data, setData] = useState<FormattedData[]>([]);
    const [chartHeight, setChartHeight] = useState(400);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://wakatime.com/share/@d433fbcd-a22c-46e5-a337-915af96350af/7ccee1d7-61d7-4a33-9fca-a74d015c1c81.json"
                );
                if (!response.ok) {
                    console.error("Failed to fetch data");
                    return;
                }
                const json = await response.json();

                const formattedData: FormattedData[] = json.data.map((entry: WakaTimeEntry) => {
                    const parts = entry.range.text.split(" ");
                    return {
                        name: typeof window !== "undefined" && window.innerWidth < 640 ? parts[0] : `${parts[0]} ${parts[1]} ${parts[2]}`,
                        hours: parseFloat(entry.grand_total.decimal),
                    };
                });

                setData(formattedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData().catch((error) => console.error("Unhandled fetch error:", error));
    }, []);

    useEffect(() => {
        const updateChartSize = () => {
            const width = typeof window !== "undefined" ? window.innerWidth : 1024;

            if (width < 360) {
                setChartHeight(200);
            } else if (width < 640) {
                setChartHeight(250);
            } else if (width < 1024) {
                setChartHeight(350);
            } else {
                setChartHeight(400);
            }
        };

        updateChartSize();
        if (typeof window !== "undefined") {
            window.addEventListener("resize", updateChartSize);
            return () => window.removeEventListener("resize", updateChartSize);
        }
    }, []);

    return (
        <div className="flex justify-center items-center w-full pt-0 md:pt-2 lg:pt-4">
            <div className="flex flex-col items-center w-full max-w-5xl px-2 xs:px-3 sm:px-6">
                <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center">
                    Code & Conquer: My Weekly Dev Stats
                </h2>
                <p className="text-xs xs:text-sm sm:text-lg text-gray-700 mb-4 text-center">
                    Analyzing my coding hours—because every keystroke counts!
                </p>
                <div className="w-full">
                    <ResponsiveContainer width="100%" height={chartHeight}>
                        <AreaChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-400" />
                            <XAxis dataKey="name" className="text-gray-700 text-xs xs:text-sm" />
                            <YAxis
                                label={{
                                    value: "Hours",
                                    angle: -90,
                                    position: "insideLeft",
                                    style: { fontSize: "12px" },
                                }}
                                domain={[0, "auto"]}
                                allowDecimals={false}
                                className="text-gray-700 text-xs xs:text-sm"
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area type="monotone" dataKey="hours" stroke="#F4A261" fill="#4C7F7E" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default WeeklyCodingInfo;
