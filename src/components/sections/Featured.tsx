"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import featured1 from "../../../public/featured1.png";
import featured2 from "../../../public/featured2.png";
import featured3 from "../../../public/featured3.png";

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
        alt: "Velas de cera escamada en forma de flor con vela cónica",
        eyebrow: "Cera Escamada",
        title: "Arte hecho luz",
        description:
            "En la tradición mexicana, las velas de cera escamada iluminan los momentos más sagrados de la vida.",
        cta: "Ver en catálogo",
        href: "#catalogo",
    },
    {
        image: featured2,
        alt: "Velas Aura y Verano en recipientes de concreto gris y negro",
        eyebrow: "Aura y Verano",
        title: "Elegante y Sobrio",
        description:
            " Aura: Un refugio de misterio y calma. Verano: La frescura de la temporada en una versión sobria.",
        cta: "Ver en catálogo",
        href: "#catalogo",
    },
    {
        image: featured3,
        alt: "Velas de cera con forma de suculenta en cajas individuales",
        eyebrow: "Colección de verano",
        title: "Rico y Fresco",
        description:
            "Aún no tienes plan de a donde ir en este verano, pero si quieres que tu casa huela deli... Tenemos varias opciones para ti!",
        cta: "Ver en catálogo",
        href: "#catalogo",
    },
];

export default function Featured() {
    return (
        <section
            id="destacados"
            aria-labelledby="destacados-titulo"
            className="scroll-mt-30 bg-bg px-6 pt-10 pb-20 md:scroll-mt-10 md:pt-28 md:pb-28 lg:px-10 xl:px-16 2xl:px-24"
        >
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    id="destacados-titulo"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.25, 1, 0.35, 1],
                    }}
                    className="text-center font-display text-4xl font-light tracking-tight text-ink lg:text-5xl"
                >
                    Destacados
                </motion.h2>

                <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
                    {items.map((item, index) => (
                        <motion.li
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
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

                            <div className="relative z-10 -mt-14 mx-5 bg-surface px-6 py-7 text-center shadow-lg transition-transform duration-500 ease-out group-hover:-translate-y-2">
                                <p className="font-display text-xs font-semibold uppercase tracking-wider text-brand">
                                    {item.eyebrow}
                                </p>

                                <h3 className="mt-3 font-display text-xl leading-snug text-ink">
                                    {item.title}
                                </h3>

                                <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                                    {item.description}
                                </p>

                                <a
                                    href={item.href}
                                    className="mt-5 inline-block border-b border-ink/30 pb-1 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
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
