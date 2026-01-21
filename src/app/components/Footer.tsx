"use client";

import { useState } from "react";
import Link from "next/link";

const socialLinks = [
    { href: "https://github.com/enfix", label: "GitHub" },
    { href: "https://linkedin.com/company/enfix", label: "LinkedIn" },
    { href: "https://twitter.com/enfix_dev", label: "X" },
];

// Footer link with strikethrough hover effect
function FooterLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    const content = (
        <span style={{ position: "relative", display: "inline-block" }}>
            {children}
            <span
                style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    width: isHovered ? "100%" : "0%",
                    height: "1px",
                    background: "var(--accent)",
                    transition: "width 0.4s ease",
                }}
            />
        </span>
    );

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ fontSize: "0.9375rem" }}
            >
                {content}
            </a>
        );
    }

    return (
        <Link
            href={href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ fontSize: "0.9375rem" }}
        >
            {content}
        </Link>
    );
}

// Logo link with strikethrough hover
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
                display: "inline-block",
                marginBottom: "1rem",
                position: "relative",
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

export default function Footer() {
    return (
        <footer
            style={{
                padding: "80px clamp(20px, 5vw, 60px)",
                borderTop: "1px solid var(--border)",
            }}
        >
            <div
                style={{
                    maxWidth: "var(--content-max-width)",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "40px",
                }}
            >
                {/* Brand */}
                <div>
                    <LogoLink />
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                        We fix what AI couldn&apos;t.
                        <br />
                        One fix. Done right.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <p
                        style={{
                            fontSize: "0.875rem",
                            color: "var(--text-secondary)",
                            marginBottom: "1rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                        }}
                    >
                        Navigation
                    </p>
                    <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <FooterLink href="/whatwedo">what we do</FooterLink>
                        <FooterLink href="/howitworks">how it works</FooterLink>
                        <FooterLink href="/contact">contact</FooterLink>
                    </nav>
                </div>

                {/* Contact */}
                <div>
                    <p
                        style={{
                            fontSize: "0.875rem",
                            color: "var(--text-secondary)",
                            marginBottom: "1rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                        }}
                    >
                        Contact
                    </p>
                    <FooterLink href="mailto:hello@enfix.dev" external>
                        hello@enfix.dev
                    </FooterLink>
                </div>

                {/* Social */}
                <div>
                    <p
                        style={{
                            fontSize: "0.875rem",
                            color: "var(--text-secondary)",
                            marginBottom: "1rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                        }}
                    >
                        Follow
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        {socialLinks.map((link) => (
                            <FooterLink key={link.label} href={link.href} external>
                                {link.label}
                            </FooterLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div
                style={{
                    maxWidth: "var(--content-max-width)",
                    margin: "60px auto 0",
                    paddingTop: "40px",
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem",
                }}
            >
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                    © {new Date().getFullYear()} EnFix. All rights reserved.
                </p>
                <FooterLink href="#top" external>
                    Back to top ↑
                </FooterLink>
            </div>
        </footer>
    );
}
