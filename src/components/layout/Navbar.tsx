"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ListIcon, XIcon, HandbagIcon } from "@phosphor-icons/react";

const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Destacados", href: "#destacados" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const cartCount = 0;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-colors duration-300 ${scrolled ? "border-b border-border bg-bg" : "bg-transparent"}`}>
            <nav className="grid grid-cols-3 items-center px-5 py-5 md:px-10">
                <div className="flex items-center">
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Abrir menú"
                        className="md:hidden"
                    >
                        {open ? (
                            <XIcon size={30} weight="light" />
                        ) : (
                            <ListIcon size={30} weight="light" />
                        )}
                    </button>

                    <ul className="hidden gap-6 font-semibold md:flex">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-ink transition-colors hover:text-accent"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-center">
                    <a href="#inicio">
                        <Image
                            className="hover:-translate-y-1 duration-100 transition-all"
                            src="/logo.png"
                            alt="Nai — Velas artesanales"
                            width={140}
                            height={68}
                            priority
                        />
                    </a>
                </div>

                <div className="flex items-center justify-end gap-4 text-sm">
                    <span className="text-ink font-semibold hidden md:inline">
                        Carrito</span>
                    <HandbagIcon size={30} weight="regular" />
                    <span className="text-accent font-semibold hidden md:inline">{cartCount}</span>
                </div>
            </nav>
        </header>
    );
}