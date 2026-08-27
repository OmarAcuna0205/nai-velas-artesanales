"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { ListIcon, XIcon, ShoppingCartIcon } from "@phosphor-icons/react";

const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Destacados", href: "#destacados" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
];

const listVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const linkVariants: Variants = {
    hidden: { opacity: 0, x: -16 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: [0.25, 1, 0.35, 1] },
    },
};

const ease = [0.25, 1, 0.35, 1] as const;

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const openMenu = () => {
        setCartOpen(false);
        setMenuOpen(true);
    };
    const closeMenu = () => setMenuOpen(false);

    const openCart = () => {
        setMenuOpen(false);
        setCartOpen(true);
    };
    const closeCart = () => setCartOpen(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-colors duration-300 ${scrolled ? "border-b border-border bg-bg" : "bg-transparent"
                }`}
        >
            <nav className="grid grid-cols-3 items-center px-5 md:py-5 md:px-10">
                <div className="flex items-center">
                    <button
                        onClick={openMenu}
                        aria-label="Abrir menú"
                        aria-expanded={menuOpen}
                        aria-controls="menu-movil"
                        className="cursor-pointer md:hidden"
                    >
                        <ListIcon size={30} weight="light" />
                    </button>

                    <ul className="hidden gap-5 font-semibold md:flex">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-ink hover:text-accent"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.5, ease }}
                >
                    <a href="#inicio">
                        <Image
                            className="transition-all duration-100 hover:-translate-y-1"
                            src="/logo.png"
                            alt="Nai — Velas artesanales"
                            width={140}
                            height={68}
                            loading="eager"
                        />
                    </a>
                </motion.div>

                <div className="flex items-center justify-end gap-4 text-sm">
                    <button
                        onClick={openCart}
                        aria-label="Abrir carrito"
                        aria-expanded={cartOpen}
                        aria-controls="carrito"
                        className="cursor-pointer transition-colors hover:text-accent"
                    >
                        <ShoppingCartIcon size={30} weight="light" />
                    </button>
                </div>
            </nav>

            {(menuOpen || cartOpen) && (
                <div
                    onClick={menuOpen ? closeMenu : closeCart}
                    aria-hidden="true"
                    className="fixed inset-0 z-40 bg-[rgba(43,42,38,0.45)]"
                />
            )}

            <div
                id="menu-movil"
                inert={!menuOpen}
                className={`fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-bg px-8 py-20 transition-transform duration-500 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <button
                    onClick={closeMenu}
                    aria-label="Cerrar menú"
                    className="absolute top-6 right-6 cursor-pointer"
                >
                    <XIcon size={26} weight="light" />
                </button>

                <motion.ul
                    variants={listVariants}
                    initial={false}
                    animate={menuOpen ? "show" : "hidden"}
                    className="flex flex-col gap-5"
                >
                    {links.map((link) => (
                        <motion.li key={link.href} variants={linkVariants}>
                            <a
                                href={link.href}
                                onClick={closeMenu}
                                className="font-semibold text-ink transition-colors hover:text-accent"
                            >
                                {link.label}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>

            <div
                id="carrito"
                aria-label="Carrito"
                inert={!cartOpen}
                className={`fixed top-0 right-0 bottom-0 z-50 flex w-80 flex-col border-l border-border bg-bg transition-transform duration-500 ease-in-out ${cartOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between border-b border-border px-6 py-5">
                    <motion.h2
                        initial={false}
                        animate={
                            cartOpen
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 16 }
                        }
                        transition={{
                            duration: 0.45,
                            delay: cartOpen ? 0.25 : 0,
                            ease,
                        }}
                        className="text-sm font-semibold uppercase tracking-[0.2em] text-ink"
                    >
                        Carrito
                    </motion.h2>

                    <button
                        onClick={closeCart}
                        aria-label="Cerrar carrito"
                        className="cursor-pointer transition-colors hover:text-accent"
                    >
                        <XIcon size={26} weight="light" />
                    </button>
                </div>

                <motion.p
                    initial={false}
                    animate={
                        cartOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{
                        duration: 0.45,
                        delay: cartOpen ? 0.38 : 0,
                        ease,
                    }}
                    className="px-6 py-10 font-body text-sm text-muted"
                >
                    Tu carrito está vacío.
                </motion.p>
            </div>
        </header>
    );
}
