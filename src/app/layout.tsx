import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizzler",
  description: "AI-powered quizzes .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={
        cn(inter.className, "antialiased min-h-screen pt-10" 
        )
      }>
        <Providers>
        <Navbar/>
        {children}
        </Providers>
        </body>
    </html>
  );
}
