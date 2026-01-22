"use client";

import { ReactNode } from "react";
import TypeWriter from "./TypeWriter";
import ScrollIndicator from "./ScrollIndicator";

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
    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // Align to top like Tacto
                alignItems: "flex-start",
                paddingTop: "calc(var(--header-height) + 100px)",
                paddingLeft: "var(--page-padding-x)",
                paddingRight: "var(--page-padding-x)",
                paddingBottom: "60px",
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
            <ScrollIndicator show={showScrollIndicator} />
        </section>
    );
}

