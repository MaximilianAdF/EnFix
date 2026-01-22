"use client";

import { useHasScrolled } from "../hooks/useHasScrolled";

interface ScrollIndicatorProps {
    /** Text label to show above the arrow. If not provided, no label is shown. */
    label?: string;
    /** Whether to show the indicator. Defaults to true. */
    show?: boolean;
}

/**
 * Reusable scroll indicator that appears at the bottom of sections.
 * Fades out when the user scrolls past 50px.
 */
export default function ScrollIndicator({
    label = "Scroll",
    show = true
}: ScrollIndicatorProps) {
    const hasScrolled = useHasScrolled(50);

    if (!show) return null;

    return (
        <div
            style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: `translateX(-50%) translateY(${hasScrolled ? "10px" : "0"})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--text-light)",
                opacity: hasScrolled ? 0 : 0.6,
                transition: "opacity 0.5s ease, transform 0.5s ease",
                pointerEvents: "none",
            }}
        >
            {label && (
                <span style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em"
                }}>
                    {label}
                </span>
            )}
            <span style={{
                fontSize: "1.25rem",
                animation: hasScrolled ? "none" : "bounce 2s infinite",
            }}>↓</span>
        </div>
    );
}
