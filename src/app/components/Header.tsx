"use client";

import { useState, useEffect } from "react";
import Menu from "./Menu";
import LogoLink from "./LogoLink";
import StrikethroughLink from "./StrikethroughLink";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuHovered, setIsMenuHovered] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen]);

    return (
        <>
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "var(--header-height)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 clamp(20px, 5vw, 60px)",
                    zIndex: 50,
                    background: "transparent",
                    transition: "background 0.4s ease",
                }}
            >
                {/* Logo */}
                <LogoLink />

                {/* Center - Contact (hidden on mobile) */}
                {isMobile === false && (
                    <StrikethroughLink
                        href="/contact"
                        color="var(--accent)"
                        lineColor="var(--accent)"
                        fontSize="0.875rem"
                        style={{
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                        }}
                    >
                        Contact
                    </StrikethroughLink>
                )}

                {/* Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    onMouseEnter={() => setIsMenuHovered(true)}
                    onMouseLeave={() => setIsMenuHovered(false)}
                    style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "inherit",
                        transition: "color 0.3s ease, opacity 0.3s ease",
                        position: "relative",
                        opacity: isMenuOpen ? 0 : 1,
                        pointerEvents: isMenuOpen ? "none" : "auto",
                    }}
                >
                    Menu
                    <span
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: 0,
                            width: isMenuHovered ? "100%" : "0%",
                            height: "1px",
                            background: "var(--text-primary)",
                            transition: "width 0.4s ease",
                        }}
                    />
                </button>
            </header>

            <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
