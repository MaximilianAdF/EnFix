"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState<"idle" | "exit" | "enter">("idle");
    const isFirstRender = useRef(true);

    useEffect(() => {
        // Skip animation on first render
        if (isFirstRender.current) {
            isFirstRender.current = false;
            setDisplayChildren(children);
            return;
        }

        // Start exit animation - fade out current page
        setTransitionStage("exit");

        const exitTimer = setTimeout(() => {
            // Swap to new content
            setDisplayChildren(children);

            // Scroll to top
            window.scrollTo({ top: 0, behavior: "instant" });

            // Small delay then start enter animation
            requestAnimationFrame(() => {
                setTransitionStage("enter");

                // Reset to idle after enter completes
                setTimeout(() => {
                    setTransitionStage("idle");
                }, 400);
            });
        }, 250);

        return () => clearTimeout(exitTimer);
    }, [pathname, children]);

    const getStyles = (): React.CSSProperties => {
        switch (transitionStage) {
            case "exit":
                return {
                    opacity: 0,
                    transform: "translateY(-10px)",
                    transition: "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                };
            case "enter":
                return {
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: "opacity 0.4s cubic-bezier(0.0, 0, 0.2, 1), transform 0.4s cubic-bezier(0.0, 0, 0.2, 1)",
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
