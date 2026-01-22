"use client";

import { useState } from "react";
import Link from "next/link";
import StrikethroughLink from "./StrikethroughLink";
import EmailLink from "./EmailLink";
import SectionLabel from "./SectionLabel";
import LogoLink from "./LogoLink";
import { NAV_LINKS, SOCIAL_LINKS } from "../lib/constants";
import { useIsMobile } from "../hooks/useIsMobile";

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
    isMobile?: boolean;
}

function MenuNavLink({ href, label, onClick, isOpen, index, isMobile }: MenuLinkProps) {
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
                display: isMobile ? "block" : "inline-block",
                width: isMobile ? "100%" : "auto",
                padding: isMobile ? "0.5rem 0" : undefined,
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

export default function Menu({ isOpen, onClose }: MenuProps) {
    const [isCloseHovered, setIsCloseHovered] = useState(false);
    const isMobile = useIsMobile();

    return (
        <div
            className={`menu-overlay ${isOpen ? "open" : ""}`}
            style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
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
                {/* enfix. logo on left - using LogoLink for consistency */}
                <LogoLink />

                {/* Close button on right - larger tap target on mobile */}
                <button
                    onClick={onClose}
                    onMouseEnter={() => setIsCloseHovered(true)}
                    onMouseLeave={() => setIsCloseHovered(false)}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: isMobile ? "1rem" : "0.875rem",
                        fontWeight: 500,
                        textTransform: "lowercase",
                        letterSpacing: "0.05em",
                        color: isCloseHovered ? "var(--accent)" : "var(--text-primary)",
                        transition: "color 0.3s ease",
                        padding: isMobile ? "12px" : undefined,
                        margin: isMobile ? "-12px" : undefined,
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

            {/* Navigation - First on mobile for better UX */}
            {isMobile && (
                <nav
                    style={{
                        flex: 1,
                        marginTop: "var(--header-height)",
                        paddingInline: "clamp(20px, 5vw, 60px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                    }}
                >
                    {NAV_LINKS.map((link, index) => (
                        <MenuNavLink
                            key={link.href}
                            href={link.href}
                            label={link.label}
                            onClick={onClose}
                            isOpen={isOpen}
                            index={index}
                            isMobile={isMobile}
                        />
                    ))}
                    
                    {/* Compact contact info */}
                    <div
                        style={{
                            marginTop: "2rem",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "1rem",
                            flexWrap: "wrap",
                            fontSize: "0.75rem",
                            color: "var(--text-secondary)",
                        }}
                    >
                        <StrikethroughLink
                            href="mailto:hello@enfix.dev"
                            external
                            fontSize="0.75rem"
                            lineColor="var(--text-secondary)"
                            color="var(--text-secondary)"
                        >
                            hello@enfix.dev
                        </StrikethroughLink>
                        <span style={{ color: "var(--border)" }}>·</span>
                        {SOCIAL_LINKS.map((link, index) => (
                            <span key={link.label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <StrikethroughLink
                                    href={link.href}
                                    external
                                    fontSize="0.75rem"
                                    lineColor="var(--text-secondary)"
                                    color="var(--text-secondary)"
                                >
                                    {link.label}
                                </StrikethroughLink>
                                {index < SOCIAL_LINKS.length - 1 && <span style={{ color: "var(--border)" }}>·</span>}
                            </span>
                        ))}
                    </div>
                </nav>
            )}

            {/* Contact Info - Desktop only */}
            {!isMobile && (
                <div
                    style={{
                        flex: 1,
                        padding: "var(--header-height) clamp(20px, 5vw, 60px) 60px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <div>
                        <SectionLabel>Get in touch</SectionLabel>
                        <EmailLink large />

                        <div style={{ marginTop: "2rem" }}>
                            <SectionLabel>Follow us</SectionLabel>
                            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
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
            )}

            {/* Navigation - Desktop only (right side) */}
            {!isMobile && (
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
                            onClick={onClose}
                            isOpen={isOpen}
                            index={index}
                            isMobile={false}
                        />
                    ))}
                </nav>
            )}
        </div>
    );
}
