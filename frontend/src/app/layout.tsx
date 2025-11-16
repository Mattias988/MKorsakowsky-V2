import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
    title: "MKorsakowsky",
    description: "My personal portfolio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${rubik.variable} antialiased`}>
                <ThemeProvider>
                    {/*<Navbar />*/}
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}