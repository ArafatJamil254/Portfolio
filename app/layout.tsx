import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Md. Arafat Jamil | Creative Portfolio",
    description: "B.Sc. in CSE @ AIUB. Student, Developer, Innovator.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-background text-white antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
