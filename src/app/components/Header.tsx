"use client";

import { useState, useEffect } from "react";
import Menu from "./Menu";
import Link from "next/link";
import StrikethroughLink from "./StrikethroughLink";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuHovered, setIsMenuHovered] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen]);

    return (
        <>
            {/* LAYER 1: Blended text layer - for EnFix and Menu (difference blend) */}
            <div
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
                    zIndex: 9999,
                    pointerEvents: "none",
                    color: "#fff",
                    mixBlendMode: "difference",
                }}
            >
                {/* Logo - blended text (hidden on hover) */}
                <Link
                    href="/"
                    onMouseEnter={() => setIsLogoHovered(true)}
                    onMouseLeave={() => setIsLogoHovered(false)}
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        textTransform: "lowercase",
                        color: "inherit",
                        pointerEvents: "auto",
                        opacity: isLogoHovered ? 0 : 1,
                        transition: "opacity 0.3s ease",
                    }}
                >
                    enfix.
                </Link>

                {/* Spacer */}
                <div style={{ flex: 1 }} />

                {/* Menu Toggle - blended text */}
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
                        transition: "opacity 0.3s ease",
                        opacity: isMenuOpen ? 0 : 1,
                        pointerEvents: isMenuOpen ? "none" : "auto",
                    }}
                >
                    Menu
                </button>
            </div>

            {/* LAYER 2: Non-blended hover layer for EnFix (blue text) */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: "clamp(20px, 5vw, 60px)",
                    height: "var(--header-height)",
                    display: "flex",
                    alignItems: "center",
                    zIndex: 10001,
                    pointerEvents: "none",
                    opacity: isLogoHovered ? 1 : 0,
                    transition: "opacity 0.3s ease",
                }}
            >
                <span
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        textTransform: "lowercase",
                        color: "var(--accent)",
                    }}
                >
                    enfix.
                </span>
            </div>

            {/* LAYER 3: Strikethroughs layer (NOT blended) */}
            <div
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
                    zIndex: 10000,
                    pointerEvents: "none",
                }}
            >
                {/* EnFix strikethrough */}
                <div style={{ position: "relative" }}>
                    <span
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            visibility: "hidden",
                        }}
                    >
                        enfix.
                    </span>
                    <span
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: 0,
                            width: isLogoHovered ? "100%" : "0%",
                            height: "2px",
                            background: "var(--accent)",
                            transition: "width 0.4s ease",
                        }}
                    />
                </div>

                {/* Spacer */}
                <div style={{ flex: 1 }} />

                {/* Menu strikethrough */}
                <div style={{ position: "relative" }}>
                    <span
                        style={{
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            visibility: "hidden",
                        }}
                    >
                        Menu
                    </span>
                    <span
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: 0,
                            width: isMenuHovered ? "100%" : "0%",
                            height: "1px",
                            background: "#000",
                            transition: "width 0.4s ease",
                        }}
                    />
                </div>
            </div>

            <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
