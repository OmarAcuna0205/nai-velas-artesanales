"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type LoaderValue = {
    ready: boolean;
    finish: () => void;
};

const LoaderContext = createContext<LoaderValue | null>(null);

export function LoaderProvider({ children }: { children: ReactNode }) {
    const [ready, setReady] = useState(false);

    return (
        <LoaderContext.Provider
            value={{ ready, finish: () => setReady(true) }}
        >
            {children}
        </LoaderContext.Provider>
    );
}

export function useLoader() {
    const context = useContext(LoaderContext);

    if (!context) {
        throw new Error("useLoader debe usarse dentro de LoaderProvider");
    }

    return context;
}
