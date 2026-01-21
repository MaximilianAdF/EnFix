"use client";

import { useState } from "react";
import Link from "next/link";

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

interface MenuLinkProps {
    href: string;
    label: string;
    onClick: () => void;
    isOpen: boolean;
    index: number;
}

function MenuNavLink({ href, label, onClick, isOpen, index }: MenuLinkProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={href}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="nav-link-large"
            style={{
                marginBottom: "1rem",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(20px)",
                transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s ease ${index * 0.12}s`,
                position: "relative",
                display: "inline-block",
            }}
        >
            {label}
            {/* Strikethrough on hover */}
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

function SocialLink({ href, label }: { href: string; label: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                position: "relative",
            }}
        >
            {label}
            {/* Strikethrough on hover */}
            <span
                style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    width: isHovered ? "100%" : "0%",
                    height: "1px",
                    background: "var(--text-primary)",
                    transition: "width 0.4s ease",
                }}
            />
        </a>
    );
}

// Email link with strikethrough hover
function EmailLink() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href="mailto:hello@enfix.dev"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                display: "inline-block",
                color: "var(--accent)",
                position: "relative",
            }}
        >
            hello@enfix.dev
            {/* Strikethrough on hover */}
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
        </a>
    );
}

const navLinks = [
    { href: "/", label: "home" },
    { href: "/whatwedo", label: "what we do" },
    { href: "/howitworks", label: "how it works" },
    { href: "/contact", label: "contact" },
];

const socialLinks = [
    { href: "https://github.com/enfix", label: "GitHub" },
    { href: "https://linkedin.com/company/enfix", label: "LinkedIn" },
    { href: "https://twitter.com/enfix_dev", label: "X" },
];

export default function Menu({ isOpen, onClose }: MenuProps) {
    const [isCloseHovered, setIsCloseHovered] = useState(false);

    return (
        <div
            className={`menu-overlay ${isOpen ? "open" : ""}`}
            style={{
                display: "flex",
                flexDirection: "row",
            }}
        >
            {/* Header bar with enfix. and close button */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "var(--header-height)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 clamp(20px, 5vw, 60px)",
                    zIndex: 101,
                }}
            >
                {/* enfix. logo on left */}
                <span
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        textTransform: "lowercase",
                    }}
                >
                    enfix.
                </span>

                {/* Close button on right */}
                <button
                    onClick={onClose}
                    onMouseEnter={() => setIsCloseHovered(true)}
                    onMouseLeave={() => setIsCloseHovered(false)}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        textTransform: "lowercase",
                        letterSpacing: "0.05em",
                        color: isCloseHovered ? "var(--accent)" : "var(--text-primary)",
                        transition: "color 0.3s ease",
                    }}
                >
                    <span style={{ position: "relative" }}>
                        (×) close
                        {/* Strikethrough on hover */}
                        <span
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: 0,
                                width: isCloseHovered ? "100%" : "0%",
                                height: "1px",
                                background: "var(--accent)",
                                transition: "width 0.4s ease",
                            }}
                        />
                    </span>
                </button>
            </div>

            {/* Left Side - Contact Info */}
            <div
                style={{
                    flex: 1,
                    padding: "var(--header-height) clamp(20px, 5vw, 60px) 60px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                {/* Contact Info */}
                <div>
                    <p
                        style={{
                            fontSize: "0.875rem",
                            color: "var(--text-secondary)",
                            marginBottom: "1rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                        }}
                    >
                        Get in touch
                    </p>
                    <EmailLink />
                    
                    <div style={{ marginTop: "2rem" }}>
                        <p
                            style={{
                                fontSize: "0.875rem",
                                color: "var(--text-secondary)",
                                marginBottom: "1rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Follow us
                        </p>
                        <div style={{ display: "flex", gap: "1.5rem" }}>
                            {socialLinks.map((link) => (
                                <SocialLink key={link.label} href={link.href} label={link.label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Navigation (centered) */}
            <nav
                style={{
                    flex: 1,
                    padding: "var(--header-height) clamp(20px, 5vw, 60px) 60px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                }}
            >
                {navLinks.map((link, index) => (
                    <MenuNavLink
                        key={link.href}
                        href={link.href}
                        label={link.label}
                        onClick={onClose}
                        isOpen={isOpen}
                        index={index}
                    />
                ))}
            </nav>
        </div>
    );
}
