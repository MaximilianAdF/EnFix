"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    children: ReactNode;
    variant?: "primary" | "secondary" | "dark";
    disabled?: boolean;
    type?: "button" | "submit";
}

export default function Button({
    href,
    onClick,
    children,
    variant = "primary",
    disabled = false,
    type = "button",
}: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const getStyles = (): React.CSSProperties => {
        const baseStyles: React.CSSProperties = {
            display: "inline-block",
            padding: "1rem 2.5rem",
            fontWeight: 600,
            fontSize: "1rem",
            border: "none",
            cursor: disabled ? "not-allowed" : "pointer",
            transition: "background 0.3s ease",
            position: "relative",
        };

        switch (variant) {
            case "primary":
                return {
                    ...baseStyles,
                    background: disabled ? "var(--text-secondary)" : isHovered ? "var(--accent-hover)" : "var(--accent)",
                    color: "white",
                };
            case "secondary":
                return {
                    ...baseStyles,
                    background: isHovered ? "var(--bg-secondary)" : "transparent",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border)",
                };
            case "dark":
                return {
                    ...baseStyles,
                    background: "white",
                    color: "var(--bg-dark)",
                };
            default:
                return baseStyles;
        }
    };

    const content = (
        <>
            <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
            {/* Strikethrough line */}
            <span
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "1rem",
                    right: "1rem",
                    height: "2px",
                    background: variant === "dark" ? "var(--bg-dark)" : "white",
                    transform: "scaleX(0)",
                    transition: "transform 0.4s ease",
                    ...(isHovered && !disabled ? { transform: "scaleX(1)" } : {}),
                }}
            />
        </>
    );

    const commonProps = {
        style: getStyles(),
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
    };

    if (href) {
        return (
            <Link href={href} {...commonProps}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} {...commonProps}>
            {content}
        </button>
    );
}
