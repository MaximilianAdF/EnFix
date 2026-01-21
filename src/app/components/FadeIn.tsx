"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export default function FadeIn({
    children,
    delay = 0,
    className = "",
    direction = "up",
}: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    const getInitialTransform = () => {
        switch (direction) {
            case "up":
                return "translateY(30px)";
            case "down":
                return "translateY(-30px)";
            case "left":
                return "translateX(30px)";
            case "right":
                return "translateX(-30px)";
            case "none":
                return "none";
            default:
                return "translateY(30px)";
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) translateX(0)" : getInitialTransform(),
                transition: `opacity 0.8s ease, transform 0.8s ease`, // Slower
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
