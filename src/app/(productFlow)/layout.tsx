import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import Footer from "@/components/templates/Footer";
import {ReactNode} from "react";
import BottomContent from "@/components/templates/BottomContent";

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

const ProductFlowLayout =  ({children}: Readonly<{ children: ReactNode; }>) => (
    <html lang="en">
    <body className={`box-border ${manrope.variable} antialiased`}>
    <section className="w-full relative">
        {children}
        <BottomContent/>
        <Footer/>
    </section>
    </body>
    </html>
)

export default ProductFlowLayout;