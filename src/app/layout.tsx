import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import BottomContent from "@/components/templates/BottomContent";
import Footer from "@/components/templates/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Audiophile | Azubi Ecommerce",
  description: "This is a skill test for Azubi Talent Program",
  icons: {
    icon: "/images/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {children}
        <BottomContent/>
        <Footer/>
      </body>
    </html>
  );
}
