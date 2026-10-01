"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLoader } from "@/context/LoaderContext";

export default function Loader() {
    const { ready, finish } = useLoader();
    const overlayRef = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState(0);
    const [total, setTotal] = useState(1);

    const progress = Math.min(loaded / total, 1);

    useEffect(() => {
        const images = Array.from(document.images).filter(
            (img) =>
                !overlayRef.current?.contains(img) &&
                img.getClientRects().length > 0,
        );
        const pending = images.filter((img) => !img.complete);
        const done = () => setLoaded((count) => count + 1);

        startTransition(() => {
            setTotal(Math.max(images.length, 1));
            setLoaded(images.length === 0 ? 1 : images.length - pending.length);
        });

        pending.forEach((img) => {
            img.addEventListener("load", done, { once: true });
            img.addEventListener("error", done, { once: true });
            img.loading = "eager";
        });

        return () => {
            pending.forEach((img) => {
                img.removeEventListener("load", done);
                img.removeEventListener("error", done);
            });
        };
    }, []);

    useEffect(() => {
        if (progress < 1) {
            return;
        }

        const timeout = setTimeout(finish, 500);
        return () => clearTimeout(timeout);
    }, [progress, finish]);

    useEffect(() => {
        if (ready) {
            return;
        }

        document.documentElement.style.overflow = "hidden";

        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [ready]);

    return (
        <AnimatePresence>
            {!ready && (
                <motion.div
                    id="site-loader"
                    ref={overlayRef}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-8 bg-bg"
                >
                    <Image
                        src="/logo.webp"
                        alt="Nai — Velas artesanales"
                        width={180}
                        height={87}
                        loading="eager"
                        fetchPriority="high"
                        draggable={false}
                        className="select-none"
                    />

                    <div className="h-0.5 w-48 overflow-hidden bg-border">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: progress }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="h-full origin-left bg-brand"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
