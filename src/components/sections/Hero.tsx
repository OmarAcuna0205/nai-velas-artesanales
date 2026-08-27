"use client";

import { getImageProps } from "next/image";
import { motion } from "motion/react";
import heroImage from "../../../public/hero.png";
import heroMobileImage from "../../../public/hero-movil.png";

const commonImg = {
    alt: "Velas artesanales Nai",
    sizes: "100vw",
    loading: "eager" as const,
    fetchPriority: "high" as const,
};

export default function Hero() {
    const {
        props: { srcSet: desktopSrcSet },
    } = getImageProps({
        ...commonImg,
        src: heroImage,
        width: 1916,
        height: 821,
    });

    const { props: mobileImgProps } = getImageProps({
        ...commonImg,
        src: heroMobileImage,
        width: 941,
        height: 1672,
    });

    return (
        <section
            id="inicio"
            aria-label="Nai, velas artesanales"
            className="relative min-h-dvh w-full overflow-hidden bg-bg lg:h-dvh"
        >
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.8, ease: [0.25, 1, 0.35, 1] }}
                className="relative h-110 w-full overflow-hidden will-change-transform lg:absolute lg:inset-0 lg:h-auto lg:min-h-0"
            >
                <picture>
                    <source media="(min-width: 1024px)" srcSet={desktopSrcSet} />
                    <img
                        {...mobileImgProps}
                        alt="Velas artesanales Nai"
                        draggable={false}
                        className="pointer-events-none absolute inset-0 h-full w-full -translate-x-2 scale-[1.05] select-none object-cover object-[center_40%] lg:translate-x-0 lg:scale-100 lg:object-center"
                    />
                </picture>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg from-4% via-[rgba(250,249,245,0.45)] via-10% to-[rgba(250,249,245,0)] to-45% lg:hidden"
                />
            </motion.div>

            <div className="absolute inset-0 hidden bg-linear-to-r from-bg/95 via-bg/50 via-25% to-transparent to-50% lg:block" />

            <div className="relative z-10 bg-bg lg:absolute lg:inset-0 lg:bg-transparent">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.6,
                        delay: 0.75,
                        ease: [0.25, 1, 0.35, 1],
                    }}
                    className="flex w-full justify-center px-6 pt-4 pb-10 text-center will-change-transform lg:h-full lg:items-center lg:justify-start lg:px-10 lg:pt-28 lg:text-left xl:px-16 2xl:px-24"
                >
                    <div className="w-full max-w-xl">
                        <h1>
                            <span className="block font-display text-5xl tracking-tight text-ink lg:text-7xl">
                                Hechas <span className="text-brand">100%</span>
                                <br />
                                a mano
                            </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted lg:mx-0 lg:mt-7 lg:text-lg">
                            Elaboradas con materiales naturales:
                            <br />
                            Como cera de soya y cera de abeja.
                        </p>

                        <div className="mt-8 flex items-center justify-center gap-8 lg:mt-10 lg:justify-start">
                            <a
                                href="#catalogo"
                                className="bg-accent px-10 py-5 text-sm font-semibold uppercase tracking-[0.15em] text-bg transition-colors hover:bg-ink"
                            >
                                Ver catálogo
                            </a>
                            <a
                                href="#contacto"
                                className="group hidden items-center gap-2 border-b border-ink/25 pb-1 text-sm text-ink transition-colors hover:border-accent hover:text-accent lg:inline-flex"
                            >
                                Pedir por WhatsApp
                                <span className="transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>

                        <p className="mt-8 font-body text-sm text-muted lg:mt-10">
                            Entregas en CDMX y Morelia
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
