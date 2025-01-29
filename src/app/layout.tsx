import "./globals.css";
import { Space_Mono } from "next/font/google"; // Import Space Mono
import { Layout } from "@/components";
import React from "react";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal"],
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${spaceMono.className}`}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </head>
        <body className="bg-gray-50"> {/* Tailwind class instead of inline style */}
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    );
}
