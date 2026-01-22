"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface TransitionContextValue {
    fromPath: string | null;
    toPath: string | null;
    startTransition: (targetPath: string, currentPath: string) => void;
    clearTransition: () => void;
}

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
    const [fromPath, setFromPath] = useState<string | null>(null);
    const [toPath, setToPath] = useState<string | null>(null);

    const startTransition = useCallback((targetPath: string, currentPath: string) => {
        setFromPath(currentPath);
        setToPath(targetPath);
    }, []);

    const clearTransition = useCallback(() => {
        setFromPath(null);
        setToPath(null);
    }, []);

    return (
        <TransitionContext.Provider value={{ fromPath, toPath, startTransition, clearTransition }}>
            {children}
        </TransitionContext.Provider>
    );
}

export function useTransition() {
    const context = useContext(TransitionContext);
    if (!context) {
        throw new Error("useTransition must be used within a TransitionProvider");
    }
    return context;
}
