"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import StrikethroughLink from "../components/StrikethroughLink";
import EmailLink from "../components/EmailLink";
import { NAV_LINKS, SOCIAL_LINKS } from "../lib/constants";

interface MenuLinkProps {
    href: string;
    label: string;
    index: number;
}

function MenuNavLink({ href, label, index }: MenuLinkProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="nav-link-large"
            style={{
                marginBottom: "1rem",
                opacity: 0,
                transform: "translateX(20px)",
                animation: `menuItemIn 0.5s ease ${0.3 + index * 0.08}s forwards`,
                position: "relative",
                display: "inline-block",
            }}
        >
            {label}
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

export default function MenuPage() {
    const [isCloseHovered, setIsCloseHovered] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const router = useRouter();

    // Ensure scroll is at top when menu opens
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClose = () => {
        router.back();
    };

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "var(--bg-primary)",
                display: "flex",
                flexDirection: "row",
                zIndex: 100,
                overflow: "hidden",
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
                {/* enfix. logo on left - clickable to go home */}
                <Link
                    href="/"
                    onMouseEnter={() => setIsLogoHovered(true)}
                    onMouseLeave={() => setIsLogoHovered(false)}
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
                            width: isLogoHovered ? "100%" : "0%",
                            height: "2px",
                            background: "var(--accent)",
                            transition: "width 0.4s ease",
                        }}
                    />
                </Link>

                {/* Close button on right */}
                <button
                    onClick={handleClose}
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
                    opacity: 0,
                    animation: "fadeIn 0.5s ease 0.3s forwards",
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
                    <EmailLink large />

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
                            {SOCIAL_LINKS.map((link) => (
                                <StrikethroughLink
                                    key={link.label}
                                    href={link.href}
                                    external
                                    fontSize="0.875rem"
                                    lineColor="var(--text-primary)"
                                >
                                    {link.label}
                                </StrikethroughLink>
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
                {NAV_LINKS.map((link, index) => (
                    <MenuNavLink
                        key={link.href}
                        href={link.href}
                        label={link.label}
                        index={index}
                    />
                ))}
            </nav>
        </div>
    );
}
