"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
    text: string;
    speed?: number;
    delay?: number;
    onComplete?: () => void;
    className?: string;
    showCursor?: boolean;
}

export default function TypeWriter({
    text,
    speed = 120, // Slower default
    delay = 600,   // Longer delay before starting
    onComplete,
    className = "",
    showCursor = true,
}: TypeWriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsTyping(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!isTyping) return;

        if (displayedText.length < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, speed);

            return () => clearTimeout(timeout);
        } else {
            setIsComplete(true);
            onComplete?.();
        }
    }, [displayedText, text, speed, isTyping, onComplete]);

    return (
        <span className={className} style={{ display: "inline-block", position: "relative" }}>
            {/* Use invisible placeholder to reserve space and prevent layout shift */}
            <span style={{ visibility: "hidden" }}>{text}</span>
            {/* Actual typed text - positioned absolutely over placeholder */}
            <span style={{ position: "absolute", left: 0, top: 0, whiteSpace: "nowrap" }}>
                {displayedText}
                {/* Cursor - fade out instead of disappearing */}
                {showCursor && (
                    <span
                        className="cursor"
                        style={{
                            opacity: isComplete ? 0 : 1,
                            transition: "opacity 0.5s ease",
                        }}
                    />
                )}
            </span>
        </span>
    );
}
