import {ReactNode} from "react";
import Footer from "@/components/templates/Footer";
import {Manrope} from "next/font/google";
import type {Metadata} from "next";
import "../globals.css";

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


export default function ProductFlowLayout({children,}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={`${manrope.variable} antialiased`}>
        <section className="w-full relative bg-accent">
            {children}
            <Footer/>
        </section>
        </body>
        </html>
    )
}
