import "./globals.css";
import { Space_Mono } from "next/font/google"; // Import Space Mono
import { Layout } from "@/components";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: [ "400", "700"],
    style: ["normal"],
    display: "swap",
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${spaceMono.className}`}>
        <head>

            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </head>
        <body>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    );
}
