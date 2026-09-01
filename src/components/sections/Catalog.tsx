"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
    CaretLeftIcon,
    CaretRightIcon,
    ShoppingCartIcon,
} from "@phosphor-icons/react";

type Product = {
    name: string;
    note: string;
    price: number;
    image: string;
    hoverImage?: string;
};

type Season = {
    id: string;
    name: string;
    banner: string;
    headline: string;
    description: string;
    products: Product[];
};

const seasons: Season[] = [
    {
        id: "primavera",
        name: "Primavera",
        banner: "/primaveraHero.png",
        headline: "Floral · Verde · Fresco",
        description: "Texto de relleno para la temporada de primavera.",
        products: [
            {
                name: "Primavera 1",
                note: "Aroma · duración",
                price: 250,
                image: "/primavera1.png",
                hoverImage: "/primavera1.1.png",
            },
            {
                name: "Primavera 2",
                note: "Aroma · duración",
                price: 250,
                image: "/primavera2.png",
            },
            {
                name: "Primavera 3",
                note: "Aroma · duración",
                price: 250,
                image: "/primavera3.png",
                hoverImage: "/primavera3.1.png",
            },
            {
                name: "Primavera 4",
                note: "Aroma · duración",
                price: 250,
                image: "/primavera4.png",
                hoverImage: "/primavera4.1.png",
            },
        ],
    },
    {
        id: "verano",
        name: "Verano",
        banner: "/veranoHero.png",
        headline: "Cítrico · Fresco · Tropical",
        description: "Texto de relleno para la temporada de verano.",
        products: [
            {
                name: "Verano 1",
                note: "Aroma · duración",
                price: 250,
                image: "/verano1.png",
                hoverImage: "/verano1.1.png",
            },
            {
                name: "Verano 2",
                note: "Aroma · duración",
                price: 250,
                image: "/verano2.png",
                hoverImage: "/verano2.1.png",
            },
            {
                name: "Verano 3",
                note: "Aroma · duración",
                price: 250,
                image: "/verano3.png",
            },
        ],
    },
    {
        id: "otono",
        name: "Otoño",
        banner: "/otoñoHero.png",
        headline: "Especias · Ámbar · Madera",
        description: "Texto de relleno para la temporada de otoño.",
        products: [
            {
                name: "Otoño 1",
                note: "Aroma · duración",
                price: 250,
                image: "/otoño1.png",
                hoverImage: "/otoño1.1.png",
            },
            {
                name: "Otoño 2",
                note: "Aroma · duración",
                price: 250,
                image: "/otoño2.png",
                hoverImage: "/otoño2.2.png",
            },
            {
                name: "Otoño 3",
                note: "Aroma · duración",
                price: 250,
                image: "/otoño3.png",
                hoverImage: "/otoño3.3.png",
            },
        ],
    },
    {
        id: "invierno",
        name: "Invierno",
        banner: "/inviernoHero.png",
        headline: "Resina · Vainilla · Humo",
        description: "Texto de relleno para la temporada de invierno.",
        products: [
            {
                name: "Invierno 1",
                note: "Aroma · duración",
                price: 250,
                image: "/invierno1.png",
                hoverImage: "/invierno1.1.png",
            },
            {
                name: "Invierno 2",
                note: "Aroma · duración",
                price: 250,
                image: "/invierno2.png",
            },
            {
                name: "Invierno 3",
                note: "Aroma · duración",
                price: 250,
                image: "/invierno3.png",
            },
        ],
    },
    {
        id: "especiales",
        name: "Ocasiones especiales",
        banner: "/especialesHero.png",
        headline: "Suave · Dulce · Floral",
        description: "Texto de relleno para las ocasiones especiales.",
        products: [
            {
                name: "Especial 1",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales1.png",
                hoverImage: "/especiales1.1.png",
            },
            {
                name: "Especial 2",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales2.png",
                hoverImage: "/especiales2.1.png",
            },
            {
                name: "Especial 3",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales3.png",
                hoverImage: "/especiales3.1.png",
            },
            {
                name: "Especial 4",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales4.png",
            },
            {
                name: "Especial 5",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales5.png",
            },
            {
                name: "Especial 6",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales6.png",
                hoverImage: "/especiales6.1.png",
            },
            {
                name: "Especial 7",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales7.png",
                hoverImage: "/especiales7.1.png",
            },
            {
                name: "Especial 8",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales8.png",
                hoverImage: "/especiales8.1.png",
            },
        ],
    },
];

function ProductCarousel({ products }: { products: Product[] }) {
    const [perView, setPerView] = useState(3);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const query = window.matchMedia("(min-width: 768px)");
        const sync = () => setPerView(query.matches ? 3 : 2);
        sync();
        query.addEventListener("change", sync);
        return () => query.removeEventListener("change", sync);
    }, []);

    const maxIndex = Math.max(0, products.length - perView);

    const safeIndex = Math.min(index, maxIndex);

    const arrow = (enabled: boolean) =>
        `rounded-full border p-2.5 transition-colors ${enabled
            ? "cursor-pointer border-brand bg-brand text-bg hover:border-brand-deep hover:bg-brand-deep"
            : "cursor-default border-border text-border"
        }`;

    return (
        <div>
            <div className="mb-4 flex justify-end gap-2">
                <button
                    onClick={() => setIndex(safeIndex - 1)}
                    disabled={safeIndex === 0}
                    aria-label="Ver anteriores"
                    className={arrow(safeIndex > 0)}
                >
                    <CaretLeftIcon size={20} weight="bold" />
                </button>
                <button
                    onClick={() => setIndex(safeIndex + 1)}
                    disabled={safeIndex === maxIndex}
                    aria-label="Ver siguientes"
                    className={arrow(safeIndex < maxIndex)}
                >
                    <CaretRightIcon size={20} weight="bold" />
                </button>
            </div>

            <div className="-mx-3 overflow-hidden">
                <motion.ul
                    animate={{ x: `-${safeIndex * (100 / perView)}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex"
                >
                    {products.map((product) => (
                        <li
                            key={product.name}
                            className="w-1/2 shrink-0 px-3 md:w-1/3"
                        >
                            <div className="group relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="aspect-3/4 w-full object-cover md:aspect-square"
                                />
                                {product.hoverImage && (
                                    <img
                                        src={product.hoverImage}
                                        alt=""
                                        aria-hidden="true"
                                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                )}
                            </div>

                            <p className="mt-3 font-display font-semibold text-accent">
                                {product.name}
                            </p>

                            <p className="mt-1 font-body text-xs text-muted">
                                {product.note}
                            </p>

                            <p className="mt-1 font-display text-ink">
                                ${product.price}
                            </p>

                            <motion.button
                                whileTap={{ scale: 0.96 }}
                                transition={{ duration: 0.15 }}
                                className="group/cart mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 font-display text-[10px] uppercase tracking-wider text-brand transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-bg md:text-xs"
                            >
                                Agregar al carrito
                                <ShoppingCartIcon
                                    size={13}
                                    weight="bold"
                                    className="transition-transform duration-300 group-hover/cart:translate-x-0.5"
                                />
                            </motion.button>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
}

export default function Catalog() {
    return (
        <section
            id="catalogo"
            aria-labelledby="catalogo-titulo"
            className="scroll-mt-32 bg-bg pt-10 pb-20 md:scroll-mt-22 md:pt-14 md:pb-28"
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
                            className="shrink-0 rounded-full border border-border px-5 py-2 font-display text-xs uppercase tracking-widest text-ink transition-colors hover:border-brand hover:text-brand"
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
                    className="mt-16 scroll-mt-38 md:mt-24 md:scroll-mt-32"
                >
                    <div className="relative h-72 w-full overflow-hidden lg:h-96">
                        <img
                            src={season.banner}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-ink to-transparent to-70%" />

                        <div className="absolute right-6 bottom-8 left-6 lg:right-10 lg:left-10">
                            <div className="mx-auto max-w-7xl">
                                <p className="font-display text-base uppercase tracking-widest text-accent lg:text-xl">
                                    {season.name}
                                </p>
                                <h3
                                    id={`${season.id}-titulo`}
                                    className="mt-2 font-display text-3xl text-bg lg:text-4xl"
                                >
                                    {season.headline}
                                </h3>
                                <p className="mt-3 max-w-md font-body text-sm text-bg">
                                    {season.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-10">
                        <ProductCarousel products={season.products} />
                    </div>
                </section>
            ))}
        </section>
    );
}
