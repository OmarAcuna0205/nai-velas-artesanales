"use client";

import { useEffect, useRef, useState } from "react";
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

    const menuRef = useRef<HTMLDivElement>(null);
    const cartRef = useRef<HTMLDivElement>(null);
    const menuBtnRef = useRef<HTMLButtonElement>(null);
    const cartBtnRef = useRef<HTMLButtonElement>(null);

    const panel = menuOpen ? "menu" : cartOpen ? "cart" : null;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!panel) return;

        const node = panel === "menu" ? menuRef.current : cartRef.current;
        const trigger =
            panel === "menu" ? menuBtnRef.current : cartBtnRef.current;
        if (!node) return;

        const focusables = () =>
            node.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled])',
            );

        focusables()[0]?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeMenu();
                closeCart();
                return;
            }
            if (e.key !== "Tab") return;

            const items = focusables();
            if (items.length === 0) return;

            const first = items[0];
            const last = items[items.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        const { body } = document;
        const prevOverflow = body.style.overflow;
        const prevPadding = body.style.paddingRight;
        const gap = window.innerWidth - document.documentElement.clientWidth;
        body.style.overflow = "hidden";
        if (gap > 0) body.style.paddingRight = `${gap}px`;

        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            body.style.overflow = prevOverflow;
            body.style.paddingRight = prevPadding;
            trigger?.focus();
        };
    }, [panel]);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-colors duration-300 ${scrolled ? "border-b border-border bg-bg" : "bg-transparent"
                }`}
        >
            <nav
                className={`mx-auto grid max-w-7xl grid-cols-3 items-center px-5 transition-all duration-300 md:px-10 ${scrolled ? "md:py-2" : "md:py-5"
                    }`}
            >
                <div className="flex items-center">
                    <button
                        ref={menuBtnRef}
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

                <div className="flex items-center justify-end gap-4 text-sm">
                    <button
                        ref={cartBtnRef}
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
                    className={`fixed inset-0 z-40 bg-[rgba(43,42,38,0.45)] ${menuOpen ? "md:hidden" : ""}`}
                />
            )}

            <div
                ref={menuRef}
                id="menu-movil"
                role="dialog"
                aria-modal="true"
                aria-label="Menú"
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
                ref={cartRef}
                id="carrito"
                role="dialog"
                aria-modal="true"
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
