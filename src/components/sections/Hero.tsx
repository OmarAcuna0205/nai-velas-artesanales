"use client";

import { getImageProps } from "next/image";
import { motion, type Variants } from "motion/react";
import heroImage from "../../../public/hero.png";
import heroMobileImage from "../../../public/hero-movil.png";

const commonImageProps = {
    alt: "Velas artesanales Nai",
    fill: true,
    sizes: "100vw",
    loading: "eager" as const,
    fetchPriority: "high" as const,
    draggable: false,
};

const {
    props: { srcSet: desktopSrcSet },
} = getImageProps({
    ...commonImageProps,
    src: heroImage,
});

const { props: mobileImageProps } = getImageProps({
    ...commonImageProps,
    src: heroMobileImage,
});

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.25, 1, 0.35, 1] },
    },
};

export default function Hero() {
    return (
        <section
            id="inicio"
            aria-label="Nai, velas artesanales"
            className="relative min-h-dvh w-full overflow-hidden bg-bg lg:h-dvh"
        >
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.25, 1, 0.35, 1] }}
                className="relative h-[55svh] min-h-96 w-full overflow-hidden will-change-transform lg:absolute lg:inset-0 lg:h-auto lg:min-h-0"
            >
                <picture>
                    <source media="(min-width: 1024px)" srcSet={desktopSrcSet} />
                    {/* getImageProps mantiene la optimización al usar art direction. */}
                    <img
                        {...mobileImageProps}
                        alt="Velas artesanales Nai"
                        className="pointer-events-none -translate-x-2 scale-[1.05] select-none object-cover object-[center_40%] lg:translate-x-0 lg:scale-100 lg:object-center"
                    />
                </picture>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/99 via-bg/30 via-15% to-transparent to-58% lg:hidden"
                />
            </motion.div>

            <div className="absolute inset-0 hidden bg-linear-to-r from-bg/95 via-bg/50 via-28% to-transparent to-58% lg:block" />

            <div className="relative z-10 bg-bg lg:absolute lg:inset-0 lg:bg-transparent">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mx-auto flex w-full max-w-7xl justify-center px-6 pt-6 pb-10 text-center lg:h-full lg:items-center lg:justify-start lg:px-10 lg:pt-28 lg:text-left"
                >
                    <div className="w-full max-w-xl">
                        <motion.h1 variants={item}>
                            <span className="block font-display text-5xl leading-[1.08] tracking-tight text-ink lg:text-7xl">
                                Hechas <span className="text-brand">100%</span>
                                <br />
                                a mano
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={item}
                            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted lg:mx-0 lg:mt-7 lg:text-lg"
                        >
                            Elaboradas con materiales naturales:
                            <br />
                            Como cera de soya y cera de abeja.
                        </motion.p>

                        <motion.div
                            variants={item}
                            className="mt-8 flex items-center justify-center gap-8 lg:mt-10 lg:justify-start"
                        >
                            <a
                                href="#catalogo"
                                className="bg-accent px-9 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-bg transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                            >
                                Ver catálogo
                            </a>
                            <a
                                href="#contacto"
                                className="group hidden items-center gap-2 border-b border-ink/25 pb-1 text-sm text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:inline-flex"
                            >
                                Pedir por WhatsApp
                                <span className="transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </motion.div>

                        <motion.p
                            variants={item}
                            className="mt-8 font-body text-sm text-muted lg:mt-10"
                        >
                            Entregas en CDMX y Morelia
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
