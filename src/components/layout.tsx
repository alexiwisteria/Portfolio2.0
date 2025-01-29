"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
                <main className="flex-grow max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </ThemeProvider>
    );
}

export default Layout;
