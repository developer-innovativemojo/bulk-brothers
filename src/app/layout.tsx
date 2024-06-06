import type { Metadata } from "next";

import {
  Inter,
  Plus_Jakarta_Sans,
  Montserrat,
  Rajdhani,
  Inknut_Antiqua,
  Bodoni_Moda,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const monts = Montserrat({
  subsets: ["latin"],
  variable: "--font-monts",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

const inknut = Inknut_Antiqua({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inknut",
});

const Bodoni = Bodoni_Moda({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-Bodoni",
});


export const metadata: Metadata = {
  title: "BULKBROTHERS",
  description: "MOVE WITH STRENGTH, MOVE WITH US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" />
      <body
        className={` ${inter.variable}  ${monts.variable} ${rajdhani.variable} ${inknut.variable} ${Bodoni.variable} `}
      >
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
