"use client";

import {
    createContext,
    startTransition,
    useContext,
    useEffect,
    useState,
} from "react";
import type { ReactNode } from "react";
import { seasons, type Product } from "@/data/seasons";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

type CartValue = {
    items: CartItem[];
    count: number;
    total: number;
    cartOpen: boolean;
    addItem: (product: Product) => void;
    increase: (id: string) => void;
    decrease: (id: string) => void;
    openCart: () => void;
    closeCart: () => void;
};

const STORAGE_KEY = "nai-carrito";
const MAX_QUANTITY = 99;
const MAX_AGE = 7 * 24 * 60 * 60 * 1000;

const catalog = seasons.flatMap((season) => season.products);

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let restored: CartItem[] = [];

        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            const saved = raw ? JSON.parse(raw) : null;
            const fresh =
                typeof saved?.savedAt === "number" &&
                Date.now() - saved.savedAt < MAX_AGE;

            if (fresh && Array.isArray(saved.items)) {
                for (const entry of saved.items) {
                    const product = catalog.find(
                        (candidate) => candidate.id === entry?.id,
                    );
                    const quantity = Number(entry?.quantity);

                    if (
                        !product ||
                        !Number.isInteger(quantity) ||
                        quantity < 1
                    ) {
                        continue;
                    }

                    restored.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        quantity: Math.min(quantity, MAX_QUANTITY),
                    });
                }
            }
        } catch {
            restored = [];
        }

        startTransition(() => {
            setItems(restored);
            setLoaded(true);
        });
    }, []);

    useEffect(() => {
        if (!loaded) {
            return;
        }

        try {
            window.localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    items: items.map((item) => ({
                        id: item.id,
                        quantity: item.quantity,
                    })),
                    savedAt: Date.now(),
                }),
            );
        } catch {
            return;
        }
    }, [items, loaded]);

    const addItem = (product: Product) => {
        setItems((current) => {
            if (current.some((item) => item.id === product.id)) {
                return current;
            }

            return [
                ...current,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                },
            ];
        });

        setCartOpen(true);
    };

    const increase = (id: string) => {
        setItems((current) =>
            current.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: Math.min(item.quantity + 1, MAX_QUANTITY),
                      }
                    : item,
            ),
        );
    };

    const decrease = (id: string) => {
        setItems((current) =>
            current
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item,
                )
                .filter((item) => item.quantity > 0),
        );
    };

    return (
        <CartContext.Provider
            value={{
                items,
                count: items.reduce((sum, item) => sum + item.quantity, 0),
                total: items.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0,
                ),
                cartOpen,
                addItem,
                increase,
                decrease,
                openCart: () => setCartOpen(true),
                closeCart: () => setCartOpen(false),
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart necesita estar dentro de CartProvider");
    }

    return context;
}
