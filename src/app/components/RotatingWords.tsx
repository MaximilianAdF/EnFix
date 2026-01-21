"use client";

import { useState, useEffect } from "react";

interface RotatingWordsProps {
    words: string[];
    interval?: number;
    className?: string;
}

export default function RotatingWords({
    words,
    interval = 2500,
    className = "",
}: RotatingWordsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsAnimating(true);

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
                setIsAnimating(false);
            }, 300);
        }, interval);

        return () => clearInterval(timer);
    }, [words.length, interval]);

    return (
        <span
            className={className}
            style={{
                display: "inline-block",
                color: "var(--accent)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "translateY(-10px)" : "translateY(0)",
            }}
        >
            {words[currentIndex]}
        </span>
    );
}
