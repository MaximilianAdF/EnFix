"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Logo link with strikethrough hover effect.
 * Used in Header and Footer.
 */
export default function LogoLink() {
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
