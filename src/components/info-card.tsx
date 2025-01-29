import React from "react";

interface InfoCardProps {
    icon: React.ElementType;
    title: string;
    date: string;
    children: React.ReactNode;
}

export function InfoCard({ icon: Icon, title, date, children }: InfoCardProps) {
    return (
        <div className="border border-gray-200 rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs font-bold text-gray-400">{date}</p>
                    <h5 className="text-lg font-semibold text-gray-700">{title}</h5>
                </div>
                <Icon className="h-5 w-5 text-gray-500" />
            </div>
            <div className="mt-3 text-sm text-gray-600">{children}</div>
        </div>
    );
}

export default InfoCard;
