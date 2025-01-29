"use client";

import Link from "next/link";
import React from "react";
import { HomeIcon, ArrowDownIcon, PresentationChartLineIcon, IdentificationIcon} from "@heroicons/react/24/outline";

const navItems: { href: string; icon: React.ElementType; label: string }[] = [
    { href: "#hero", icon: HomeIcon, label: "Hero" },
    { href: "#weekly-coding-chart", icon: PresentationChartLineIcon, label: "Metrics" },
    { href: "#information-section", icon: IdentificationIcon, label: "Info" },
    { href: "#footer", icon: ArrowDownIcon, label: "Footer" },
];

const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

const TableOfContents: React.FC = () => {
    return (
        <aside className="fixed left-0 top-0 flex flex-col items-center bg-white text-gray-700 shadow h-screen w-16 overflow-y-auto z-50">
            {/* Navigation */}
            <ul className="w-full">
                {navItems.map((item, index) => (
                    <li key={index} className="hover:bg-gray-100 w-full">
                        <button
                            onClick={() => handleScroll(item.href.substring(1))}
                            className="h-16 flex flex-col justify-center items-center w-full focus:text-orange-500"
                        >
                            <item.icon className="h-5 w-5" />
                            <span className="text-xs mt-1">{item.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default TableOfContents;
