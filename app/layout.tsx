import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import BodyWrapper from "./components/BodyWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const blosta = localFont({
  src: "./fonts/BLOSTA.otf",
  variable: "--font-blosta",
});

const giRegular = localFont({
  src: "./fonts/GI-R.otf",
  variable: "--font-gi",
});

const gatheraz = localFont({
  src: "./fonts/Gatheraz.otf",
  variable: "--font-gatheraz",
});

export const metadata: Metadata = {
  title: "Alee Creation's - Crystal Mobile Accessories",
  description: "Crystal elegance for your device - Handcrafted crystal accessories by Alee Creation's",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${blosta.variable} ${giRegular.variable} ${gatheraz.variable} font-poppins antialiased`}
      >
        <BodyWrapper className="min-h-screen">
          {children}
        </BodyWrapper>
      </body>
    </html>
  );
}
