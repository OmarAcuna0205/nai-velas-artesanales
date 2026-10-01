"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import featured1 from "../../../public/destacado1.webp";
import featured2 from "../../../public/destacado2.webp";
import featured3 from "../../../public/destacado3.webp";
import featured4 from "../../../public/destacado4.webp";

type Item = {
    image: StaticImageData;
    alt: string;
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
};

const items: Item[] = [
    {
        image: featured1,
        alt: "Velas de otoño con calabazas y aromas Pumpkin spice latte, Vainilla y Manzana",
        eyebrow: "",
        title: "Otoño",
        description: "Manzana, calabaza y café para tardes cálidas.",
        cta: "Ver en catálogo",
        href: "#nuevo",
    },
    {
        image: featured2,
        alt: "Colección de verano: frappés, latas de citronela y room sprays",
        eyebrow: "",
        title: "Verano",
        description: "Aromas frescos y frutales para días de calor.",
        cta: "Ver en catálogo",
        href: "#verano",
    },
    {
        image: featured3,
        alt: "Colección de primavera: bouquet de girasoles y cactus en vaso",
        eyebrow: "",
        title: "Primavera",
        description: "Flores y suculentas con colores de primavera.",
        cta: "Ver en catálogo",
        href: "#primavera",
    },
    {
        image: featured4,
        alt: "Colección de invierno: velas navideñas con pinos y regalos de cera",
        eyebrow: "",
        title: "Invierno",
        description: "Pino, frutos rojos y canela para tus fiestas.",
        cta: "Ver en catálogo",
        href: "#invierno",
    },
];

export default function Featured() {
    return (
        <section
            id="destacados"
            aria-labelledby="destacados-titulo"
            className="scroll-mt-32 bg-bg px-6 pt-10 pb-10 md:scroll-mt-22 md:pt-14 md:pb-14 lg:px-10 xl:px-16 2xl:px-24"
        >
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    id="destacados-titulo"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 1.4,
                        ease: [0.25, 1, 0.35, 1],
                    }}
                    className="text-center font-display text-4xl font-light tracking-tight text-ink lg:text-5xl"
                >
                    Destacados
                </motion.h2>

                <ul className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-4">
                    {items.map((item, index) => (
                        <motion.li
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 1.4,
                                delay: index * 0.2,
                                ease: [0.25, 1, 0.35, 1],
                            }}
                            className="group"
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    className="aspect-3/4 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            <div className="relative z-10 -mt-14 mx-5 bg-surface px-6 py-7 text-center transition-transform duration-500 ease-out group-hover:-translate-y-2">
                                {item.eyebrow && (
                                    <p className="mb-3 font-display text-xs font-semibold uppercase tracking-wider text-brand">
                                        {item.eyebrow}
                                    </p>
                                )}

                                <h3 className="font-display text-xl font-semibold leading-snug text-brand">
                                    {item.title}
                                </h3>

                                {item.description && (
                                    <p
                                        title={item.description}
                                        className="mt-3 line-clamp-3 font-body text-base leading-relaxed text-muted md:line-clamp-2 md:text-sm"
                                    >
                                        {item.description}
                                    </p>
                                )}

                                <a
                                    href={item.href}
                                    className="mt-5 inline-block border-b border-accent pb-1 text-sm text-accent transition-colors hover:border-accent hover:text-accent md:border-ink/30 md:text-ink"
                                >
                                    {item.cta}
                                </a>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
