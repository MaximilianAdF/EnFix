"use client";

import FullPageHero from "../components/FullPageHero";
import FullPageSlide from "../components/FullPageSlide";
import Button from "../components/Button";
import FadeIn from "../components/FadeIn";

const services = [
    {
        number: "01",
        title: "debug.",
        description:
            "We track down and eliminate bugs in AI-generated code. From logic errors to edge cases that AI missed, we find and fix them all.",
        details: [
            "Runtime error diagnosis",
            "Logic flow analysis",
            "Edge case identification",
            "Performance profiling",
        ],
    },
    {
        number: "02",
        title: "refactor.",
        description:
            "AI code often works but isn't maintainable. We refactor for clarity, performance, and long-term sustainability.",
        details: [
            "Code structure optimization",
            "Design pattern implementation",
            "Technical debt reduction",
            "Documentation enhancement",
        ],
    },
    {
        number: "03",
        title: "optimize.",
        description:
            "Performance bottlenecks? Memory leaks? Slow queries? We optimize your code to run faster and more efficiently.",
        details: [
            "Database query optimization",
            "Memory management",
            "Load time reduction",
            "Resource efficiency",
        ],
    },
    {
        number: "04",
        title: "rescue.",
        description:
            "Projects gone off the rails? We rescue abandoned or broken AI projects and get them back on track.",
        details: [
            "Project assessment",
            "Priority triage",
            "Incremental fixes",
            "Full recovery plans",
        ],
    },
    {
        number: "05",
        title: "review.",
        description:
            "Not sure if your AI-generated code is production-ready? We provide comprehensive code reviews and recommendations.",
        details: [
            "Security audit",
            "Best practices check",
            "Scalability assessment",
            "Actionable recommendations",
        ],
    },
    {
        number: "06",
        title: "rebuild.",
        description:
            "Sometimes the best fix is a fresh start. We rebuild problematic components with clean, maintainable code.",
        details: [
            "Architecture redesign",
            "Component isolation",
            "Clean implementation",
            "Future-proof solutions",
        ],
    },
];

export default function WhatWeDo() {
    return (
        <div>
            {/* Full Page Hero */}
            <FullPageHero
                title="what we do."
                subtitle="We specialize in fixing, debugging, and improving AI-generated code. When the AI gets it almost right but not quite, we bridge the gap."
            />

            {/* Service Slides */}
            {services.map((service, index) => (
                <FullPageSlide
                    key={service.number}
                    number={service.number}
                    title={service.title}
                    isFirst={index === 0}
                    isLast={index === services.length - 1}
                >
                    <p
                        className="body-large"
                        style={{
                            color: "var(--text-secondary)",
                            maxWidth: "700px",
                            marginBottom: "3rem",
                        }}
                    >
                        {service.description}
                    </p>

                    {/* Clean box for details */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "1rem",
                            maxWidth: "800px",
                        }}
                    >
                        {service.details.map((detail, i) => (
                            <FadeIn key={i} delay={i * 100}>
                                <div
                                    style={{
                                        padding: "1.5rem",
                                        background: "var(--bg-secondary)",
                                        border: "1px solid var(--border)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                    }}
                                >
                                    <span style={{ color: "var(--accent)", fontWeight: 600 }}>→</span>
                                    <span style={{ fontSize: "0.9375rem" }}>{detail}</span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </FullPageSlide>
            ))}

            {/* CTA Section */}
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "var(--section-padding) clamp(20px, 5vw, 60px)",
                    background: "var(--bg-dark)",
                    color: "white",
                }}
            >
                <div style={{ textAlign: "center", maxWidth: "600px" }}>
                    <h2
                        className="section-title"
                        style={{ marginBottom: "1.5rem" }}
                    >
                        have a project that needs fixing?
                    </h2>
                    <p
                        className="body-large"
                        style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            marginBottom: "2.5rem",
                        }}
                    >
                        Get in touch and let&apos;s talk about what we can do for you.
                    </p>
                    <Button href="/contact" variant="dark">
                        Contact Us →
                    </Button>
                </div>
            </section>
        </div>
    );
}
