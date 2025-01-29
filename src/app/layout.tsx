import "./globals.css";
import {Space_Mono} from "next/font/google"; // Import Space Mono
import {Layout} from "@/components";
import TableOfContents from "@/components/TableOfContents";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
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
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
        </head>
        <body style={{backgroundColor: "#FAFAFA"}}>
        <Layout>
        {children}
        </Layout>
        </body>
        </html>
    );
}
