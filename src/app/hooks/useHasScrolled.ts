"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the user has scrolled past a threshold.
 * Reduces duplicated scroll detection logic across components.
 */
export function useHasScrolled(threshold: number = 50): boolean {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > threshold);
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return hasScrolled;
}
