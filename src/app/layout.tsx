import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "EnFix | We Fix What AI Couldn't",
    description:
        "EnFix is a tech consulting firm specializing in debugging, refactoring, and fixing AI-generated code. One fix. Done right.",
    keywords: [
        "AI code fixing",
        "code debugging",
        "refactoring",
        "AI consulting",
        "software repair",
        "code optimization",
    ],
    authors: [{ name: "EnFix" }],
    openGraph: {
        title: "EnFix | We Fix What AI Couldn't",
        description:
            "Tech consulting firm specializing in debugging and fixing AI-generated code.",
        url: "https://enfix.dev",
        siteName: "EnFix",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "EnFix | We Fix What AI Couldn't",
        description:
            "Tech consulting firm specializing in debugging and fixing AI-generated code.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <Header />
                <main>
                    <PageTransition>{children}</PageTransition>
                </main>
                <Footer />
            </body>
        </html>
    );
}
