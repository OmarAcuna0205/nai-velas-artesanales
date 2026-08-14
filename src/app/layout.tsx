import type { Metadata } from "next";
import "./globals.css";

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
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}