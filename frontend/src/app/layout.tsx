import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { Toaster } from "sonner";

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://twoje-portfolio.pl";

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    title: {
        default: 'Maciej Korsakowski | Full Stack Developer',
        template: '%s | Maciej Korsakowski',
    },

    description: 'Portfolio Frontend Developera specjalizującego się w React i Next.js. Sprawdź moje projekty, doświadczenie zawodowe, umiejętności techniczne oraz skontaktuj się ze mną.',

    keywords: [
        'Frontend Developer',
        'Web Developer',
        'Next.js',
        'React',
        'Typescript',
        'JavaScript',
        'Portfolio',
        'Programista',
        'SCSS',
        'TailwindCSS'
    ],

    authors: [{ name: 'Maciej Korsakowski', url: BASE_URL }],

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },

    openGraph: {
        title: 'Maciej Korsakowski | Full Stack Developer',
        description: 'Zobacz moje projekty i doświadczenie.',
        url: BASE_URL,
        siteName: 'Maciej Korsakowski Portfolio',
        images: [
            {
                url: '/kitty.webp',
                width: 564,
                height: 564,
            },
        ],
        locale: 'pl_PL',
        type: 'website',
    },
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
                    {children}
                    <Toaster richColors />
                </ThemeProvider>
            </body>
        </html>
    );
}