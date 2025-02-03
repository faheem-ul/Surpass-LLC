import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Bebas_Neue } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import AosProvider from "@/providers/AosProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebasNeue",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Surpass LLC",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <AosProvider>
          <Navbar />
          {children}
        </AosProvider>
      </body>
    </html>
  );
}
