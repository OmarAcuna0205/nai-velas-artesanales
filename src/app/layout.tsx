import type { Metadata } from "next";
import { Jost, Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "@/context/CartContext";
import { LoaderProvider } from "@/context/LoaderContext";
import { site } from "@/data/site";
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
    // base para las URLs absolutas (vista previa al compartir, canonical, sitemap)
    metadataBase: new URL(site.url),
    title: "Naí | Velas artesanales de cera de soya en CDMX y Morelia",
    description:
        "Velas artesanales hechas a mano con cera de soya y cera de abeja. Colecciones de temporada, bouquets y regalos. Entregas en CDMX y Morelia.",
    // sin title ni url: las páginas los heredarían y al compartir todas saldrían como la home
    openGraph: {
        type: "website",
        locale: "es_MX",
        siteName: site.name,
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es-MX" className={`${jost.variable} ${lora.variable}`}>
            <body className="font-display">
                {/* sin JavaScript el loader nunca se quitaría */}
                <noscript>
                    <style>{"#site-loader{display:none}"}</style>
                </noscript>
                <LoaderProvider>
                    <CartProvider>{children}</CartProvider>
                </LoaderProvider>
                <Analytics />
            </body>
            {/* solo en producción, para que las visitas en local no ensucien los datos */}
            {process.env.NODE_ENV === "production" && site.gaId && (
                <GoogleAnalytics gaId={site.gaId} />
            )}
        </html>
    );
}
