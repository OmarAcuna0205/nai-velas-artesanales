import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Catalog from "@/components/sections/Catalog";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import { site } from "@/data/site";

// title y description vienen del layout raíz
export const metadata: Metadata = {
    alternates: { canonical: "/" },
};

// datos estructurados: le dicen a Google que el sitio es de Naí, que es una
// tienda de velas artesanales, dónde entrega y cuál es su Instagram
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${site.url}/#sitio`,
            name: site.name,
            alternateName: "Naí",
            url: site.url,
            inLanguage: "es-MX",
        },
        {
            "@type": "Store",
            "@id": `${site.url}/#tienda`,
            name: site.name,
            description:
                "Velas artesanales hechas a mano con cera de soya y cera de abeja. Colecciones de temporada, bouquets y regalos.",
            url: site.url,
            logo: `${site.url}/logo.webp`,
            image: `${site.url}/opengraph-image.jpg`,
            telephone: site.phone,
            email: site.email,
            areaServed: ["Ciudad de México", "Morelia"],
            // Facebook y TikTok se agregan aquí cuando tengamos sus enlaces reales
            sameAs: [site.instagram],
        },
    ],
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                // "<" escapado como recomienda Next para que el JSON no pueda romper el HTML
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
                }}
            />
            <Loader />
            <Navbar />
            <main>
                <Hero />
                <Catalog />
                <Featured />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
