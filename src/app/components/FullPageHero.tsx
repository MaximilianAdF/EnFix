"use client";

import { ReactNode, useState, useEffect } from "react";
import TypeWriter from "./TypeWriter";

interface FullPageHeroProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    showScrollIndicator?: boolean;
}

export default function FullPageHero({
    title,
    subtitle,
    children,
    showScrollIndicator = true,
}: FullPageHeroProps) {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // Align to top like Tacto
                alignItems: "flex-start",
                padding: "calc(var(--header-height) + 100px) clamp(20px, 5vw, 60px) 60px",
                position: "relative",
            }}
        >
            <div style={{ maxWidth: "var(--content-max-width)", margin: "0 auto", width: "100%" }}>
                {/* Main Title with Typing Effect */}
                <h1 className="hero-text" style={{ marginBottom: "2rem" }}>
                    <TypeWriter text={title} speed={120} delay={400} />
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p
                        className="body-large"
                        style={{
                            color: "var(--text-secondary)",
                            maxWidth: "600px",
                        }}
                    >
                        {subtitle}
                    </p>
                )}

                {/* Additional content */}
                {children}
            </div>

            {/* Scroll Indicator - fades out on scroll */}
            {showScrollIndicator && (
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
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        Scroll
                    </span>
                    <span style={{ 
                        fontSize: "1.25rem",
                        animation: hasScrolled ? "none" : "bounce 2s infinite",
                    }}>↓</span>
                </div>
            )}
        </section>
    );
}
