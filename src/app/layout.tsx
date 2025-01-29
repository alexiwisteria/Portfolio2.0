import "./globals.css";
import { Space_Mono } from "next/font/google"; // Import Space Mono
import { Layout } from "@/components";
import TableOfContents from "@/components/TableOfContents";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal"],
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${spaceMono.className} h-full`}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
            <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
        </head>
        <body className="min-h-screen flex flex-col w-full bg-gray-50">
        <Layout>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:p-6 lg:p-8">
                {children}
            </div>
        </Layout>
        </body>
        </html>
    );
}
