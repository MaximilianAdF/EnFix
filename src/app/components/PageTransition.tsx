"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();
    const [stage, setStage] = useState<"idle" | "darken" | "enter">("idle");
    const [snapshotHTML, setSnapshotHTML] = useState<string | null>(null);
    const [snapshotScrollY, setSnapshotScrollY] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const prevPathnameRef = useRef<string>(pathname);
    const currentScrollYRef = useRef(0);
    const timeoutsRef = useRef<number[]>([]);

    const DARKEN_DURATION = 400;
    const ENTER_DURATION = 1000;

    // Track scroll position continuously
    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateScroll = () => {
            if (stage === "idle") {
                currentScrollYRef.current = window.scrollY || 0;
            }
        };

        updateScroll();
        window.addEventListener("scroll", updateScroll, { passive: true });
        return () => window.removeEventListener("scroll", updateScroll);
    }, [stage]);

    // Capture DOM snapshot before navigation - listen to link clicks
    useEffect(() => {
        if (typeof document === "undefined") return;

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a");
            if (!link) return;

            const href = link.getAttribute("href");
            if (!href || href.startsWith("http") || href.startsWith("#") || href === pathname) return;

            // Capture current DOM as HTML snapshot before navigation
            if (contentRef.current) {
                setSnapshotHTML(contentRef.current.innerHTML);
                setSnapshotScrollY(currentScrollYRef.current);
            }
        };

        document.addEventListener("click", handleClick, { capture: true });
        return () => document.removeEventListener("click", handleClick, { capture: true });
    }, [pathname]);

    // Detect route change and trigger transition
    useEffect(() => {
        if (pathname !== prevPathnameRef.current && snapshotHTML !== null) {
            // Start darken phase
            setStage("darken");

            // Clear any existing timers
            timeoutsRef.current.forEach((id) => clearTimeout(id));
            timeoutsRef.current = [];

            // After darken, start enter phase
            const enterTimer = window.setTimeout(() => {
                if (typeof window !== "undefined") {
                    window.scrollTo({ top: 0, behavior: "instant" });
                }
                setStage("enter");
            }, DARKEN_DURATION);

            // After enter animation completes, cleanup
            const cleanupTimer = window.setTimeout(() => {
                setStage("idle");
                setSnapshotHTML(null);
            }, DARKEN_DURATION + ENTER_DURATION);

            timeoutsRef.current.push(enterTimer, cleanupTimer);
            prevPathnameRef.current = pathname;
        } else if (pathname !== prevPathnameRef.current) {
            // No snapshot (direct navigation, refresh, etc.) - just update
            prevPathnameRef.current = pathname;
        }

        return () => {
            timeoutsRef.current.forEach((id) => clearTimeout(id));
        };
    }, [pathname, snapshotHTML]);

    const showSnapshot = snapshotHTML !== null && stage !== "idle";
    const overlayOpacity = stage === "darken" || stage === "enter" ? 0.35 : 0;
    const isAnimating = stage !== "idle";

    return (
        <div style={{ position: "relative", backgroundColor: "#000000", minHeight: "100vh" }}>
            {/* Snapshot of old page (stays in background, darkens) */}
            {showSnapshot && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100vh",
                        overflow: "hidden",
                        zIndex: 10,
                        backgroundColor: "var(--bg-primary)",
                        pointerEvents: "none",
                    }}
                >
                    <div
                        style={{ transform: `translateY(-${snapshotScrollY}px)` }}
                        dangerouslySetInnerHTML={{ __html: snapshotHTML }}
                    />
                    {/* Darken overlay */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundColor: "#000000",
                            opacity: overlayOpacity,
                            transition: `opacity ${DARKEN_DURATION}ms ease`,
                        }}
                    />
                </div>
            )}

            {/* Current/New page (slides up from bottom) */}
            <div
                ref={contentRef}
                style={{
                    position: isAnimating ? "fixed" : "relative",
                    top: isAnimating ? 0 : "auto",
                    left: isAnimating ? 0 : "auto",
                    width: "100%",
                    minHeight: isAnimating ? "100vh" : "auto",
                    overflowY: isAnimating ? "auto" : "visible",
                    zIndex: 20,
                    backgroundColor: "var(--bg-primary)",
                    transform:
                        stage === "enter"
                            ? "translateY(0)"
                            : stage === "darken"
                                ? "translateY(100vh)"
                                : "translateY(0)",
                    opacity: stage === "darken" ? 0 : 1,
                    pointerEvents: stage === "idle" ? "auto" : "none",
                    transition:
                        stage === "enter"
                            ? `transform ${ENTER_DURATION}ms cubic-bezier(0.5, 0.7, 0.4, 1), opacity 200ms ease`
                            : "none",
                    willChange: stage === "enter" ? "transform" : "auto",
                }}
            >
                {children}
            </div>
        </div>
    );
}
