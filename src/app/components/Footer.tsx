"use client";

import LogoLink from "./LogoLink";
import StrikethroughLink from "./StrikethroughLink";
import { SOCIAL_LINKS } from "../lib/constants";

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
                    <div style={{ marginBottom: "1rem" }}>
                        <LogoLink />
                    </div>
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
                        <StrikethroughLink href="/whatwedo" fontSize="0.9375rem">
                            what we do
                        </StrikethroughLink>
                        <StrikethroughLink href="/howitworks" fontSize="0.9375rem">
                            how it works
                        </StrikethroughLink>
                        <StrikethroughLink href="/contact" fontSize="0.9375rem">
                            contact
                        </StrikethroughLink>
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
                    <StrikethroughLink href="mailto:hello@enfix.dev" external fontSize="0.9375rem">
                        hello@enfix.dev
                    </StrikethroughLink>
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
                        {SOCIAL_LINKS.map((link) => (
                            <StrikethroughLink
                                key={link.label}
                                href={link.href}
                                external
                                fontSize="0.9375rem"
                            >
                                {link.label}
                            </StrikethroughLink>
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
                <StrikethroughLink href="#top" fontSize="0.9375rem">
                    Back to top ↑
                </StrikethroughLink>
            </div>
        </footer>
    );
}
