"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import {
    CaretLeftIcon,
    CaretRightIcon,
    ShoppingCartIcon,
    XIcon,
} from "@phosphor-icons/react";
import { seasons, type Product } from "@/data/seasons";
import { useCart } from "@/context/CartContext";

function ProductDetail({
    product,
    isNew,
    onClose,
}: {
    product: Product;
    isNew: boolean;
    onClose: () => void;
}) {
    const { addItem } = useCart();
    const aromas = product.note.split(" · ");

    useEffect(() => {
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.documentElement.style.overflow = "";
        };
    }, []);

    return createPortal(
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.35, 1] }}
            className="fixed inset-0 z-60 overflow-y-auto overscroll-contain bg-bg md:hidden"
        >
            <button
                onClick={onClose}
                aria-label="Cerrar"
                className="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-bg/80 p-2 text-ink"
            >
                <XIcon size={24} weight="light" />
            </button>

            <img
                src={product.image}
                alt={product.name}
                className="h-[50dvh] w-full object-cover"
            />

            <div className="px-6 pt-6 pb-10">
                <h3 className="font-display text-xl font-semibold text-accent">
                    {product.name}
                </h3>

                <p className="mt-3 font-display text-xs uppercase tracking-widest text-muted">
                    Aromas
                </p>

                <ul className="mt-2 flex min-h-29 flex-col gap-1">
                    {aromas.map((aroma) => (
                        <li key={aroma} className="font-body text-sm text-ink">
                            {aroma}
                        </li>
                    ))}
                </ul>

                <p className="mt-5 font-display text-xl text-ink">
                    ${product.price}
                </p>

                <p
                    aria-hidden={isNew}
                    className={`mt-1 font-body text-xs italic text-muted ${isNew ? "invisible" : ""}`}
                >
                    Tarda de 7 a 9 días en hacerse
                </p>

                <motion.button
                    onClick={() => {
                        addItem(product);
                        onClose();
                    }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand px-6 py-2.5 font-display text-xs uppercase tracking-wider text-bg"
                >
                    Agregar al carrito
                    <ShoppingCartIcon size={14} weight="bold" />
                </motion.button>
            </div>
        </motion.div>,
        document.body,
    );
}

function ProductCard({
    product,
    isNew,
}: {
    product: Product;
    isNew: boolean;
}) {
    const { addItem } = useCart();
    const [detailOpen, setDetailOpen] = useState(false);
    const aromas = product.note.split(" · ");

    const openDetail = () => {
        if (window.matchMedia("(max-width: 767px)").matches) {
            setDetailOpen(true);
        }
    };

    return (
        <li
            className={`${isNew ? "w-full" : "w-1/2"} shrink-0 px-3 md:w-1/3 lg:w-1/4`}
        >
            <div onClick={openDetail} className="cursor-pointer md:cursor-auto">
                <div className="group relative overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className={`${isNew ? "aspect-square" : "aspect-3/4"} w-full object-cover md:aspect-square`}
                    />
                    <div className="absolute inset-0 hidden flex-col items-center justify-center bg-ink/60 px-3 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:flex">
                        <p className="font-display text-xs uppercase tracking-widest text-bg/70">
                            Aromas
                        </p>

                        <ul className="mt-3 flex flex-col gap-1">
                            {aromas.map((aroma) => (
                                <li
                                    key={aroma}
                                    className="font-body text-[11px] text-bg"
                                >
                                    {aroma}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <p
                    title={product.name}
                    className={`mt-3 truncate font-display font-semibold text-accent ${isNew ? "text-xl md:text-base" : ""}`}
                >
                    {product.name}
                </p>

                {product.description && (
                    <p
                        title={product.description}
                        className={`mt-1 truncate font-body leading-snug text-ink ${isNew ? "text-base md:text-sm" : "text-sm"}`}
                    >
                        {product.description}
                    </p>
                )}

                <p className="mt-1 font-display text-ink">${product.price}</p>

                {!isNew && (
                    <p className="mt-1 font-body text-xs italic text-muted">
                        Tarda de 7 a 9 días en hacerse
                    </p>
                )}
            </div>

            <motion.button
                onClick={() => addItem(product)}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="group/cart mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-brand bg-brand px-3 py-1.5 font-display text-[9px] uppercase tracking-wider text-bg transition-colors duration-300 md:border-border md:bg-transparent md:text-[10px] md:text-brand md:hover:border-brand md:hover:bg-brand md:hover:text-bg"
            >
                Agregar al carrito
                <ShoppingCartIcon
                    size={11}
                    weight="bold"
                    className="transition-transform duration-300 group-hover/cart:translate-x-0.5"
                />
            </motion.button>

            <AnimatePresence>
                {detailOpen && (
                    <ProductDetail
                        product={product}
                        isNew={isNew}
                        onClose={() => setDetailOpen(false)}
                    />
                )}
            </AnimatePresence>
        </li>
    );
}

function ProductCarousel({
    products,
    isNew,
}: {
    products: Product[];
    isNew: boolean;
}) {
    const [perView, setPerView] = useState(3);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const tablet = window.matchMedia("(min-width: 768px)");
        const desktop = window.matchMedia("(min-width: 1024px)");
        const sync = () =>
            setPerView(
                desktop.matches ? 4 : tablet.matches ? 3 : isNew ? 1 : 2,
            );
        sync();
        tablet.addEventListener("change", sync);
        desktop.addEventListener("change", sync);
        return () => {
            tablet.removeEventListener("change", sync);
            desktop.removeEventListener("change", sync);
        };
    }, [isNew]);

    const maxIndex = Math.max(0, products.length - perView);

    const safeIndex = Math.min(index, maxIndex);

    return (
        <div>
            <div className="-mx-3 overflow-hidden">
                <motion.ul
                    animate={{ x: `-${safeIndex * (100 / perView)}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`flex ${isNew ? "flex-col gap-10 md:flex-row md:gap-0" : ""}`}
                >
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isNew={isNew}
                        />
                    ))}
                </motion.ul>
            </div>

            <div
                className={`mt-6 items-center justify-center gap-2 ${isNew ? "hidden md:flex" : "flex"}`}
            >
                <button
                    onClick={() => setIndex(safeIndex - 1)}
                    disabled={!(safeIndex > 0)}
                    tabIndex={-1}
                    aria-hidden="true"
                    className={`cursor-pointer font-display text-xs uppercase tracking-widest text-brand transition-colors hover:text-brand-deep ${safeIndex > 0 ? "" : "invisible"}`}
                >
                    Ver más
                </button>
                <button
                    onClick={() => setIndex(safeIndex - 1)}
                    disabled={safeIndex === 0}
                    aria-label="Ver anteriores"
                    className={`rounded-full border p-2.5 transition-colors ${safeIndex > 0
                        ? "cursor-pointer border-brand bg-brand text-bg hover:border-brand-deep hover:bg-brand-deep"
                        : "cursor-default border-border text-border"
                        }`}
                >
                    <CaretLeftIcon size={20} weight="bold" />
                </button>
                <button
                    onClick={() => setIndex(safeIndex + 1)}
                    disabled={safeIndex === maxIndex}
                    aria-label="Ver siguientes"
                    className={`rounded-full border p-2.5 transition-colors ${safeIndex < maxIndex
                        ? "cursor-pointer border-brand bg-brand text-bg hover:border-brand-deep hover:bg-brand-deep"
                        : "cursor-default border-border text-border"
                        }`}
                >
                    <CaretRightIcon size={20} weight="bold" />
                </button>
                <button
                    onClick={() => setIndex(safeIndex + 1)}
                    disabled={!(safeIndex < maxIndex)}
                    tabIndex={-1}
                    aria-hidden="true"
                    className={`cursor-pointer font-display text-xs uppercase tracking-widest text-brand transition-colors hover:text-brand-deep ${safeIndex < maxIndex ? "" : "invisible"}`}
                >
                    Ver más
                </button>
            </div>
        </div>
    );
}

export default function Catalog() {
    return (
        <section
            id="catalogo"
            aria-labelledby="catalogo-titulo"
            className="scroll-mt-30 bg-bg pt-10 pb-10 md:scroll-mt-10 md:pt-28 md:pb-14"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <motion.h2
                    id="catalogo-titulo"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, ease: [0.25, 1, 0.35, 1] }}
                    className="text-center font-display text-4xl font-light tracking-tight text-ink lg:text-5xl"
                >
                    Catálogo
                </motion.h2>

                <motion.nav
                    aria-label="Temporadas"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                delayChildren: 0.2,
                                staggerChildren: 0.08,
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="-mx-6 mt-8 flex gap-3 overflow-x-auto px-6 pb-4 md:mt-10 md:justify-center"
                >
                    {seasons.map((season) => (
                        <motion.a
                            key={season.id}
                            href={`#${season.id}`}
                            variants={{
                                hidden: { opacity: 0, y: 12 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: [0.25, 1, 0.35, 1],
                                    },
                                },
                            }}
                            className="shrink-0 rounded-full border border-border px-7 py-2 md:px-5 font-display text-xs uppercase tracking-widest text-ink transition-colors hover:border-brand hover:text-brand"
                        >
                            {season.name}
                        </motion.a>
                    ))}
                </motion.nav>
            </div>

            {seasons.map((season) => (
                <section
                    key={season.id}
                    id={season.id}
                    aria-labelledby={`${season.id}-titulo`}
                    className="mt-16 scroll-mt-38 md:mt-24 md:-scroll-mt-44.5 lg:-scroll-mt-68.5"
                >
                    <div className="relative h-72 w-full overflow-hidden lg:h-96">
                        <img
                            src={season.banner}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-ink to-transparent to-70%" />

                        <div className="absolute right-6 bottom-8 left-6 lg:right-10 lg:bottom-10 lg:left-10">
                            <div className="mx-auto max-w-7xl">
                                <h3
                                    id={`${season.id}-titulo`}
                                    className="font-display text-3xl uppercase tracking-wide text-bg lg:text-5xl"
                                >
                                    {season.name}
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-10">
                        <ProductCarousel
                            products={season.products}
                            isNew={season.isNew ?? false}
                        />
                    </div>
                </section>
            ))}
        </section>
    );
}
