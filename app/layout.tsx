import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { lazy } from "react";
import PortfolioAnimation from "./Components/PortfolioAnimation/PortfolioAnimation";
import WhatsAppIcon from "./Components/WhatsAppIcon/WhatsAppIcon";

const Navbar = lazy(() => import("./Components/Navbar/Navbar"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Samir Portfolio",
  description: "This is my portfolio, my goal is to get clients and reach for more freelance experience",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-main">
        <PortfolioAnimation>
          <Navbar />
          <WhatsAppIcon />
          {children}
        </PortfolioAnimation>
      </body>
    </html>
  );
}
