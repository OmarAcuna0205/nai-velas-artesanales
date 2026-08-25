"use client";

import Image from "next/image";
import { motion } from "motion/react";
import heroImage from "../../../public/hero.png";

export default function Hero() {
    return (
        <section
            id="inicio"
            aria-label="Nai, velas artesanales"
            className="relative h-dvh w-full overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.25, 1, 0.35, 1] }}
                className="absolute inset-0 will-change-transform"
            >
                <Image
                    src={heroImage}
                    alt="Velas artesanales Nai"
                    fill
                    preload
                    sizes="100vw"
                    draggable={false}
                    className="pointer-events-none select-none object-cover object-[68%_center] sm:object-center"
                />
            </motion.div>
        </section >
    );
}
