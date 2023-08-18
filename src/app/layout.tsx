import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@Components/Navbar";

import TeaserVideo from "@/components/TeaserVideo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horizon Zero Dawn",
  description: "Game Horizon Zero Dawn for PS4 and PC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TeaserVideo />
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}

