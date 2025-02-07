import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const Louis = localFont({
  src: [
    {
      path: "../../public/fonts/Louis/Louis George Cafe Bold.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Louis/Louis George Cafe Light.ttf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../../public/fonts/organetto/organetto-semiexplight-webfont.woff",
    //   weight: "300",
    //   style: "normal",
    // },
    // {
    //   path: "../../public/fonts/organetto/organetto-extregular-webfont.woff",
    //   // path: "../../public/fonts/organetto/organetto-semiexpregular-webfont.woff",
    //   weight: "400",
    //   style: "normal",
    // },
    // {
    //   path: "../../public/fonts/organetto/organetto-semiexpbold-webfont.woff",
    //   weight: "700",
    //   style: "normal",
    // },

    // {
    //   // path: "../../public/fonts/organetto/organetto-semiextultrabold-webfont.woff",
    //   path: "../../public/fonts/organetto/organetto-semiexpultrabold-webfont.woff",
    //   weight: "800",
    //   style: "normal",
    // },
  ],
  variable: "--font-Louis",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${bebasNeue.variable} ${Louis.variable}`}
      >
        <AosProvider>
          <Navbar />
          {children}
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
