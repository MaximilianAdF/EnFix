"use client";

import { useState } from "react";

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                padding: "2.5rem",
                background: "var(--bg-secondary)",
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.08)" : "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1.5rem" }}>
                {icon}
            </span>
            <h3
                style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    textTransform: "lowercase",
                }}
            >
                {title}
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {description}
            </p>
        </div>
    );
}
