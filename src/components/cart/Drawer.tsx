"use client";

import { AnimatePresence, motion } from "motion/react";
import {
    XIcon,
    MinusIcon,
    PlusIcon,
    WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { useCart, type CartItem } from "@/context/CartContext";
import { buildOrderLink } from "@/lib/whatsapp";

function CartCard({ item }: { item: CartItem }) {
    const { increase, decrease } = useCart();

    return (
        <motion.li
            layout
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.35, 1] }}
            className="flex gap-4 py-4"
        >
            <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 shrink-0 object-cover"
            />

            <div className="flex flex-1 flex-col justify-between">
                <div>
                    <p className="font-display text-sm text-ink">{item.name}</p>

                    <p className="mt-1 font-body text-xs text-muted">
                        ${item.price}
                    </p>
                </div>

                <div className="mt-3 flex w-fit items-center gap-3 rounded-full border border-border px-3 py-1.5">
                    <button
                        onClick={() => decrease(item.id)}
                        aria-label={
                            item.quantity === 1
                                ? `Quitar ${item.name} del carrito`
                                : `Quitar una vela de ${item.name}`
                        }
                        className="cursor-pointer text-brand transition-colors hover:text-accent"
                    >
                        <MinusIcon size={14} weight="bold" />
                    </button>

                    <span className="min-w-4 text-center font-display text-sm text-ink">
                        {item.quantity}
                    </span>

                    <button
                        onClick={() => increase(item.id)}
                        aria-label={`Agregar una vela de ${item.name}`}
                        className="cursor-pointer text-brand transition-colors hover:text-accent"
                    >
                        <PlusIcon size={14} weight="bold" />
                    </button>
                </div>
            </div>
        </motion.li>
    );
}

export default function Drawer() {
    const { items, total, cartOpen, closeCart } = useCart();

    return (
        <div
            className={`fixed top-0 right-0 bottom-0 z-50 flex w-80 flex-col bg-bg transition-transform duration-500 ease-in-out ${cartOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex h-34 shrink-0 items-center justify-between px-6 md:h-28">
                <motion.h2
                    initial={false}
                    animate={cartOpen ? { opacity: 1 } : { opacity: 0 }}
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

            {items.length === 0 ? (
                <motion.p
                    initial={false}
                    animate={cartOpen ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                        duration: 0.45,
                        delay: cartOpen ? 0.25 : 0,
                        ease: "easeInOut",
                    }}
                    className="px-6 pt-4 font-body text-sm text-muted"
                >
                    Tu carrito está vacío.
                </motion.p>
            ) : (
                <>
                    <motion.ul
                        initial={false}
                        animate={cartOpen ? { opacity: 1 } : { opacity: 0 }}
                        transition={{
                            duration: 0.45,
                            delay: cartOpen ? 0.25 : 0,
                            ease: "easeInOut",
                        }}
                        className="flex-1 overflow-y-auto px-6 pb-2"
                    >
                        <AnimatePresence initial={false}>
                            {items.map((item) => (
                                <CartCard key={item.id} item={item} />
                            ))}
                        </AnimatePresence>
                    </motion.ul>

                    <motion.div
                        initial={false}
                        animate={cartOpen ? { opacity: 1 } : { opacity: 0 }}
                        transition={{
                            duration: 0.45,
                            delay: cartOpen ? 0.25 : 0,
                            ease: "easeInOut",
                        }}
                        className="shrink-0 border-t border-border px-6 pt-5 pb-6"
                    >
                        <div className="flex items-baseline justify-between">
                            <span className="font-display text-sm uppercase tracking-wide text-muted">
                                Total
                            </span>

                            <span className="font-display text-2xl text-ink">
                                ${total}
                            </span>
                        </div>

                        <motion.a
                            href={buildOrderLink(items, total)}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-display text-xs font-semibold uppercase tracking-widest text-bg transition-colors duration-300 hover:bg-ink"
                        >
                            Pedir por WhatsApp
                            <WhatsappLogoIcon size={16} weight="bold" />
                        </motion.a>
                    </motion.div>
                </>
            )}
        </div>
    );
}
