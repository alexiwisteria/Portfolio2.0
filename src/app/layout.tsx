import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const notoSansMono = Noto_Sans_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={notoSansMono.className}>
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
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
