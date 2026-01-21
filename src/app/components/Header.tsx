"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";

interface HeaderLinkProps {
    href: string;
    children: React.ReactNode;
    isAccent?: boolean;
}

function HeaderLink({ href, children, isAccent = false }: HeaderLinkProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: isAccent ? "var(--accent)" : "inherit",
                position: "relative",
                display: "inline-block",
            }}
        >
            {children}
            {/* Strikethrough line */}
            <span
                style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    width: isHovered ? "100%" : "0%",
                    height: "1px",
                    background: isAccent ? "var(--accent)" : "var(--text-primary)",
                    transition: "width 0.4s ease",
                    transformOrigin: "left",
                }}
            />
        </Link>
    );
}

// Logo with strikethrough hover
function LogoLink() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href="/"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "lowercase",
                position: "relative",
                display: "inline-block",
            }}
        >
            enfix.
            <span
                style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    width: isHovered ? "100%" : "0%",
                    height: "2px",
                    background: "var(--accent)",
                    transition: "width 0.4s ease",
                }}
            />
        </Link>
    );
}

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuHovered, setIsMenuHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                    background: isScrolled
                        ? "rgba(232, 232, 228, 0.9)"
                        : "transparent",
                    backdropFilter: isScrolled ? "blur(10px)" : "none",
                    transition: "background 0.4s ease, backdrop-filter 0.4s ease",
                }}
            >
                {/* Logo */}
                <LogoLink />

                {/* Center - Contact (Blue with strikethrough) */}
                <HeaderLink href="/contact" isAccent>
                    Contact
                </HeaderLink>

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
                    {/* Strikethrough on hover */}
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
