import type { Metadata } from "next";
import { Jost, Lora } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const jost = Jost({
    subsets: ["latin"],
    variable: "--font-jost",
    display: "swap",
});

const lora = Lora({
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-lora",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Nai — Velas artesanales",
    description: "Velas artesanales hechas a mano en Chihuahua.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className={`${jost.variable} ${lora.variable}`}>
            <body className="font-display">
                <CartProvider>{children}</CartProvider>
            </body>
        </html>
    );
}