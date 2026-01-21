"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();
    const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
    const [displayChildren, setDisplayChildren] = useState(children);
    const isFirstRender = useRef(true);

    useEffect(() => {
        // Skip animation on first render
        if (isFirstRender.current) {
            isFirstRender.current = false;
            setDisplayChildren(children);
            return;
        }

        // Phase 1: Exit - old content fades out
        setPhase("exit");

        const exitTimer = setTimeout(() => {
            // Update to new content
            setDisplayChildren(children);
            // Phase 2: Enter - new content slides up from below
            setPhase("enter");

            const enterTimer = setTimeout(() => {
                setPhase("idle");
            }, 600);

            return () => clearTimeout(enterTimer);
        }, 300);

        return () => clearTimeout(exitTimer);
    }, [pathname, children]);

    const getStyles = (): React.CSSProperties => {
        switch (phase) {
            case "exit":
                return {
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                };
            case "enter":
                return {
                    animation: "slideUpFromBelow 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                };
            default:
                return {
                    opacity: 1,
                    transform: "translateY(0)",
                };
        }
    };

    return (
        <div style={getStyles()}>
            {displayChildren}
        </div>
    );
}
