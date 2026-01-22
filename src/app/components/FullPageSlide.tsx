"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import TypeWriter from "./TypeWriter";

interface FullPageSlideProps {
    title: string;
    number?: string;
    children: ReactNode;
    isFirst?: boolean;
    isLast?: boolean;
}

export default function FullPageSlide({
    title,
    number,
    children,
    isFirst = false,
    isLast = false,
}: FullPageSlideProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);
    const [isReady, setIsReady] = useState(false);

    // Delay observer setup to avoid triggering during page transition
    useEffect(() => {
        const readyTimer = setTimeout(() => {
            setIsReady(true);
        }, 800); // Wait for page transition to complete

        return () => clearTimeout(readyTimer);
    }, []);

    useEffect(() => {
        if (!isReady) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setIsVisible(true);
                        setHasAnimated(true);
                    }
                    // Show/hide scroll indicator based on whether this slide is mostly in view
                    setShowScrollIndicator(entry.isIntersecting && entry.intersectionRatio > 0.7);
                });
            },
            {
                threshold: [0.3, 0.7],
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated, isReady]);

    return (
        <section
            ref={ref}
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // Align to top like Tacto
                paddingTop: isFirst
                    ? "calc(var(--header-height) + 80px)"
                    : "120px",
                paddingLeft: "var(--page-padding-x)",
                paddingRight: "var(--page-padding-x)",
                paddingBottom: "60px",
                position: "relative",
                borderTop: isFirst ? "none" : "1px solid var(--border)",
            }}
        >
            <div style={{ maxWidth: "var(--content-max-width)", margin: "0 auto", width: "100%" }}>
                {/* Number badge - positioned at top */}
                {number && (
                    <div
                        style={{
                            fontSize: "clamp(4rem, 10vw, 8rem)",
                            fontWeight: 700,
                            color: "var(--accent)",
                            lineHeight: 1,
                            letterSpacing: "-0.03em",
                            marginBottom: "2rem",
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "translateY(0)" : "translateY(20px)",
                            transition: "opacity 0.8s ease, transform 0.8s ease", // Slower
                        }}
                    >
                        {number}
                    </div>
                )}

                {/* Title with typing effect when visible */}
                <h2
                    className="section-title"
                    style={{
                        marginBottom: "3rem",
                        fontSize: "clamp(2.5rem, 6vw, 4rem)",
                    }}
                >
                    {isVisible ? (
                        <TypeWriter text={title} speed={80} delay={number ? 400 : 200} />
                    ) : (
                        <span style={{ opacity: 0 }}>{title}</span>
                    )}
                </h2>

                {/* Content */}
                <div
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(30px)",
                        transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s", // Slower
                    }}
                >
                    {children}
                </div>
            </div>

            {/* Scroll indicator for non-last slides - hides when scrolling away */}
            {!isLast && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "40px",
                        left: "50%",
                        transform: `translateX(-50%) translateY(${showScrollIndicator ? "0" : "10px"})`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--text-light)",
                        opacity: showScrollIndicator ? 0.5 : 0,
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                        pointerEvents: "none",
                    }}
                >
                    <span style={{
                        fontSize: "1.25rem",
                        animation: showScrollIndicator ? "bounce 2s infinite" : "none",
                    }}>↓</span>
                </div>
            )}
        </section>
    );
}
