import type { Metadata } from "next";
import {
    Geist,
    Geist_Mono,
    Noto_Sans,
    Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Provider from "@/providers/Provider";
import { cn } from "@/lib/utils";
import { metadatas } from "@/metadatas";

const playfairDisplayHeading = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-heading",
});

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// metadata
export const metadata: Metadata = metadatas.rootLayout;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "h-full",
                "antialiased",
                geistSans.variable,
                geistMono.variable,
                "font-sans",
                notoSans.variable,
                playfairDisplayHeading.variable,
            )}
        >
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
