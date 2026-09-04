"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ListIcon, XIcon, ShoppingCartIcon } from "@phosphor-icons/react";

const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Destacados", href: "#destacados" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
];

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
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-colors duration-300 ${scrolled ? "border-b border-border bg-bg" : "bg-transparent"
                }`}
        >
            <nav
                className={`mx-auto grid grid-cols-3 items-center px-5 transition-all duration-300 md:px-10 ${scrolled ? "md:py-2" : "md:py-5"
                    }`}
            >
                <div className="flex items-center">
                    <motion.button
                        onClick={openMenu}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.5,
                        }}
                        className="cursor-pointer md:hidden"
                    >
                        <ListIcon size={30} weight="light" />
                    </motion.button>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                        className="hidden gap-5 font-semibold md:flex"
                    >
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
                    </motion.ul>
                </div>

                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1.5,
                    }}
                >
                    <a href="#inicio">
                        <Image
                            className={`transition-all duration-300 hover:-translate-y-1 ${scrolled ? "md:w-24" : ""
                                }`}
                            src="/logo.png"
                            alt="Nai — Velas artesanales"
                            width={140}
                            height={68}
                            loading="eager"
                        />
                    </a>
                </motion.div>

                <div className="flex items-center justify-end text-sm">
                    <motion.button
                        onClick={openCart}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.5,
                        }}
                        className="cursor-pointer transition-colors hover:text-accent"
                    >
                        <ShoppingCartIcon size={30} weight="light" />
                    </motion.button>
                </div>
            </nav>

            {(menuOpen || cartOpen) && (
                <div
                    onClick={menuOpen ? closeMenu : closeCart}
                    className={`fixed inset-0 z-40 bg-ink/50 ${menuOpen ? "md:hidden" : ""}`}
                />
            )}

            <div
                className={`fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-bg px-8 py-20 transition-transform duration-500 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <button
                    onClick={closeMenu}
                    className="absolute top-6 left-6 cursor-pointer"
                >
                    <XIcon size={26} weight="light" />
                </button>

                <motion.ul
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.25,
                            },
                        },
                    }}
                    animate={menuOpen ? "show" : "hidden"}
                    className="flex flex-col gap-5"
                >
                    {links.map((link) => (
                        <motion.li
                            key={link.href}
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        duration: 0.45,
                                        ease: "easeInOut",
                                    },
                                },
                            }}
                        >
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
                className={`fixed top-0 right-0 bottom-0 z-50 flex w-80 flex-col border-border bg-bg transition-transform duration-500 ease-in-out ${cartOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex h-34 items-center justify-between px-6 md:h-28">
                    <motion.h2
                        initial={false}
                        animate={
                            cartOpen
                                ? { opacity: 1 }
                                : { opacity: 0 }
                        }
                        transition={{
                            duration: 0.45,
                            delay: cartOpen ? 0.25 : 0,
                            ease: "easeInOut",
                        }}
                        className="text-sm font-semibold uppercase tracking-wide text-ink"
                    >
                        Carrito
                    </motion.h2>

                    <button
                        onClick={closeCart}
                        className="cursor-pointer transition-colors hover:text-accent"
                    >
                        <XIcon size={26} weight="light" />
                    </button>
                </div>

                <motion.p
                    initial={false}
                    animate={
                        cartOpen ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{
                        duration: 0.45,
                        delay: cartOpen ? 0.25 : 0,
                        ease: "easeInOut",
                    }}
                    className="px-6 py-10 font-body text-sm text-muted"
                >
                    Tu carrito está vacío.
                </motion.p>
            </div>
        </header>
    );
}
