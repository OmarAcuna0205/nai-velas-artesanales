"use client";

import { motion } from "motion/react";

const paragraphs = [
    "Todo empezó como un hobby: crear, aprender algo nuevo, tener en casa algo hecho por mí que además oliera delicioso. Y empecé a hacer velas de soya.",
    "Primero solo para mí, luego para la familia, luego para amigos y para amigos de amigos: los que te dicen que les gusta tu trabajo, te piden una vela y a los tres días te encargan más.",
    "Gracias a quienes me compran y me siguen comprando, a quienes pagaron un envío, a quienes supieron que viajaba a su ciudad y terminaron encargándome cuarenta velas, y a quienes comparten las fotos de mi trabajo.",
];

export default function About() {
    return (
        <section
            id="nosotros"
            aria-labelledby="nosotros-titulo"
            className="scroll-mt-32 bg-bg pt-10 pb-10 md:scroll-mt-22 md:pt-14 md:pb-14"
        >
            <div className="px-6 lg:px-10">
                <motion.h2
                    id="nosotros-titulo"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, ease: [0.25, 1, 0.35, 1] }}
                    className="text-center font-display text-4xl font-light tracking-tight text-ink lg:text-5xl"
                >
                    Sobre nosotros
                </motion.h2>
            </div>

            <div className="mt-10 grid md:grid-cols-2 lg:mt-14">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-brand px-6 py-10 sm:px-10 lg:px-16 lg:py-16"
                >
                    <div className="max-w-xl">
                        <p className="font-display text-5xl leading-none lg:text-6xl">
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, y: -40 },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.8,
                                            delay: 0,
                                            ease: [0.25, 1, 0.35, 1],
                                        },
                                    },
                                }}
                                className="block font-light text-bg"
                            >
                                Hola
                            </motion.span>
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, y: -40 },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.8,
                                            delay: 0.45,
                                            ease: [0.25, 1, 0.35, 1],
                                        },
                                    },
                                }}
                                className="block font-body font-semibold italic text-accent"
                            >
                                hola
                            </motion.span>
                        </p>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 16 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                        delay: 1.1,
                                        ease: [0.25, 1, 0.35, 1],
                                    },
                                },
                            }}
                            className="mt-6 font-display text-xl font-semibold text-bg lg:text-2xl"
                        >
                            Soy Ale y me encantan las velas.
                        </motion.p>

                        {paragraphs.map((paragraph, index) => (
                            <motion.p
                                key={paragraph}
                                variants={{
                                    hidden: { opacity: 0, y: 16 },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.7,
                                            delay: 1.35 + index * 0.2,
                                            ease: [0.25, 1, 0.35, 1],
                                        },
                                    },
                                }}
                                className="mt-4 font-body text-sm leading-relaxed text-bg"
                            >
                                {paragraph}
                            </motion.p>
                        ))}

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 16 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                        delay: 2,
                                        ease: [0.25, 1, 0.35, 1],
                                    },
                                },
                            }}
                            className="mt-8 font-body text-3xl italic text-accent lg:text-4xl"
                        >
                            — Ale
                        </motion.p>
                    </div>
                </motion.div>

                <div className="flex items-center justify-center bg-border px-6 py-14 sm:px-10 lg:py-16">
                    <motion.div
                        initial={{ opacity: 0, x: 60, rotate: -8 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: [0.25, 1, 0.35, 1] }}
                        whileHover={{ rotate: 0, scale: 1.03 }}
                        className="relative"
                    >
                        <figure className="w-72 bg-surface p-3 shadow-[0_12px_32px_rgba(43,42,38,0.22)] lg:w-80">
                            <img
                                src="/nosotros.png"
                                alt="Vela artesanal con forma de astronauta, encendida"
                                className="aspect-4/5 w-full object-cover"
                            />

                            <figcaption className="mt-4 mb-2 font-body text-xs italic text-brand">
                                Astronauta, 2023
                            </figcaption>
                        </figure>

                        <motion.p
                            initial={{ opacity: 0, y: -20, rotate: 12 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 7 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                type: "spring",
                                stiffness: 90,
                                damping: 11,
                                delay: 0.8,
                            }}
                            className="absolute -right-4 -bottom-10 w-44 bg-note px-4 py-3 font-body text-[11px] leading-relaxed text-ink shadow-[0_8px_20px_rgba(43,42,38,0.2)] sm:-right-8 sm:w-52"
                        >
                            <span
                                aria-hidden="true"
                                className="absolute -top-3 left-6 h-6 w-16 -rotate-6 bg-border"
                            />
                            Cada vela es resultado de aprendizaje, pruebas y
                            paciencia, para ofrecerte un producto artesanal de
                            calidad hecho con materiales naturales.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
