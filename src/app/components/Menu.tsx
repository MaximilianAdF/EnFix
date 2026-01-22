"use client";

import { useState } from "react";
import Link from "next/link";
import StrikethroughLink from "./StrikethroughLink";
import EmailLink from "./EmailLink";
import SectionLabel from "./SectionLabel";
import { NAV_LINKS, SOCIAL_LINKS } from "../lib/constants";

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
                    paddingInline: "var(--page-padding-x)",
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
                    padding: "var(--header-height) 0 60px",
                    paddingInline: "var(--page-padding-x)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                {/* Contact Info */}
                <div>
                    <SectionLabel>Get in touch</SectionLabel>
                    <EmailLink large />

                    <div style={{ marginTop: "2rem" }}>
                        <SectionLabel>Follow us</SectionLabel>
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
                    padding: "var(--header-height) 0 60px",
                    paddingInline: "var(--page-padding-x)",
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
                    />
                ))}
            </nav>
        </div>
    );
}
