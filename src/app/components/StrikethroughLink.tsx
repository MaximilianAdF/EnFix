"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";

interface StrikethroughLinkProps {
    href: string;
    children: ReactNode;
    external?: boolean;
    color?: string;
    hoverColor?: string;
    lineColor?: string;
    lineHeight?: number;
    fontSize?: string;
    fontWeight?: number;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

/**
 * Reusable link component with strikethrough hover effect.
 * Used across Header, Footer, Menu, and pages.
 */
export default function StrikethroughLink({
    href,
    children,
    external = false,
    color = "inherit",
    hoverColor,
    lineColor = "var(--accent)",
    lineHeight = 1,
    fontSize,
    fontWeight = 500,
    className = "",
    style = {},
    onClick,
}: StrikethroughLinkProps) {
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
                    height: `${lineHeight}px`,
                    background: lineColor,
                    transition: "width 0.4s ease",
                }}
            />
        </span>
    );

    const commonStyles: React.CSSProperties = {
        color: isHovered && hoverColor ? hoverColor : color,
        fontSize,
        fontWeight,
        position: "relative",
        display: "inline-block",
        transition: "color 0.3s ease",
        ...style,
    };

    const commonProps = {
        className,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        style: commonStyles,
    };

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick}
                {...commonProps}
            >
                {content}
            </a>
        );
    }

    return (
        <Link href={href} onClick={onClick} {...commonProps}>
            {content}
        </Link>
    );
}
