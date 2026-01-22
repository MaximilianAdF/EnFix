"use client";

interface SectionLabelProps {
    children: React.ReactNode;
    color?: string;
}

export default function SectionLabel({
    children,
    color = "var(--text-secondary)"
}: SectionLabelProps) {
    return (
        <p
            style={{
                fontSize: "0.875rem",
                color: color,
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
            }}
        >
            {children}
        </p>
    );
}
