import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
