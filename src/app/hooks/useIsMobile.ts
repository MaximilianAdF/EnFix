"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the viewport is mobile-sized.
 * Uses the same breakpoint as CSS (768px).
 * Returns undefined during SSR to avoid hydration mismatch.
 */
export function useIsMobile(breakpoint: number = 768): boolean | undefined {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
        
        const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
            setIsMobile(e.matches);
        };

        // Set initial value
        handleChange(mediaQuery);

        // Listen for changes
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [breakpoint]);

    return isMobile;
}
