import React from "react";

interface InfoCardProps {
    icon: React.ElementType;
    title: string;
    date: string;
    children: React.ReactNode;
}

export function InfoCard({ icon: Icon, title, date, children }: InfoCardProps) {
    return (
        <div className="rounded-lg shadow-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-xs font-bold text-gray-400 font-mono">{date}</p>
                    <h5 className="text-lg font-semibold text-gray-700 font-mono">
                        {title}
                    </h5>
                </div>
                <div className="flex-shrink-0">
                    <Icon className="h-5 w-5 text-gray-500" />
                </div>
            </div>
            <div className="mt-4 text-sm text-gray-500 font-mono">{children}</div>
        </div>
    );
}

export default InfoCard;
