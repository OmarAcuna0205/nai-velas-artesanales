"use client";

import { motion } from "motion/react";
import {
    FacebookLogoIcon,
    InstagramLogoIcon,
    TiktokLogoIcon,
} from "@phosphor-icons/react";
import { seasons } from "@/data/seasons";

const navigationLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Destacados", href: "#destacados" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
    { label: "Instagram", href: "#", Icon: InstagramLogoIcon },
    { label: "Facebook", href: "#", Icon: FacebookLogoIcon },
    { label: "TikTok", href: "#", Icon: TiktokLogoIcon },
];

export default function Footer() {
    return (
        <motion.footer
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="w-full bg-accent px-6 py-10 text-bg lg:px-10 lg:py-12"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:flex lg:items-start lg:justify-between lg:gap-12">
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, x: -28 },
                            show: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.9,
                                    ease: [0.25, 1, 0.35, 1],
                                },
                            },
                        }}
                        className="text-center font-display text-4xl leading-tight font-light tracking-tight lg:text-left lg:text-6xl"
                    >
                        Hecho a{" "}
                        <span className="font-body italic text-note">mano</span>
                        <br />
                        en México.
                    </motion.p>

                    <nav
                        aria-label="Navegación del pie de página"
                        className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-4 sm:gap-x-8 xl:gap-x-12"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                        delay: 0.15,
                                        ease: [0.25, 1, 0.35, 1],
                                    },
                                },
                            }}
                            className="text-center"
                        >
                            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-note">
                                Naí
                            </h2>
                            <ul className="mt-4 grid gap-y-2">
                                {navigationLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="block whitespace-nowrap font-display text-sm text-bg transition-colors duration-300 hover:text-note focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-note"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                        delay: 0.25,
                                        ease: [0.25, 1, 0.35, 1],
                                    },
                                },
                            }}
                            className="text-center"
                        >
                            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-note">
                                Catálogo
                            </h2>
                            <ul className="mt-4 grid gap-y-2">
                                {seasons.map((season) => (
                                    <li key={season.id}>
                                        <a
                                            href={`#${season.id}`}
                                            className="block whitespace-nowrap font-display text-sm text-bg transition-colors duration-300 hover:text-note focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-note"
                                        >
                                            {season.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                        delay: 0.35,
                                        ease: [0.25, 1, 0.35, 1],
                                    },
                                },
                            }}
                            className="text-center"
                        >
                            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-note">
                                Contáctanos
                            </h2>
                            <ul className="mt-4 grid gap-y-2">
                                <li>
                                    <a
                                        href="tel:+525500000000"
                                        className="block whitespace-nowrap font-display text-sm text-bg transition-colors duration-300 hover:text-note focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-note"
                                    >
                                        55 0000 0000
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:hola@naivelas.com"
                                        className="block whitespace-nowrap font-display text-sm text-bg transition-colors duration-300 hover:text-note focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-note"
                                    >
                                        hola@naivelas.com
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                        delay: 0.45,
                                        ease: [0.25, 1, 0.35, 1],
                                    },
                                },
                            }}
                            className="text-center"
                        >
                            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-note">
                                Síguenos
                            </h2>
                            <ul className="mt-4 flex flex-col items-center gap-2.5">
                                {socialLinks.map(({ label, href, Icon }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            aria-label={label}
                                            className="flex h-9 w-9 items-center justify-center rounded-full border border-bg text-bg transition-colors duration-300 hover:border-note hover:bg-note hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-note"
                                        >
                                            <Icon size={17} weight="bold" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </nav>
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 12 },
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.7,
                                delay: 0.55,
                                ease: [0.25, 1, 0.35, 1],
                            },
                        },
                    }}
                    className="mt-10 flex flex-col gap-2 border-t border-muted pt-6 text-center font-body text-xs text-border sm:flex-row sm:items-center sm:justify-between sm:text-left"
                >
                    <p>
                        © {new Date().getFullYear()} Naí Velas Artesanales.
                        Todos los derechos reservados.
                    </p>
                    <p>
                        Diseño web por{" "}
                        <a
                            href="https://github.com/OmarAcuna0205"
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-bg underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-note hover:decoration-note focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-note"
                        >
                            Omar Acuña
                        </a>
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
}
