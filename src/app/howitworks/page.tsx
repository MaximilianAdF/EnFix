"use client";

import FullPageHero from "../components/FullPageHero";
import FullPageSlide from "../components/FullPageSlide";
import FadeIn from "../components/FadeIn";
import CTASection from "../components/CTASection";

const steps = [
    {
        number: "01",
        title: "submit.",
        description:
            "Tell us about your project. What was the AI tool used? What's broken? What should it do? Share your codebase and we'll take a look.",
        details: [
            {
                title: "Fill out our form",
                description: "Or email us directly at hello@enfix.dev",
            },
            {
                title: "Share your repository",
                description: "GitHub, GitLab, Bitbucket — we work with them all",
            },
            {
                title: "Describe the issue",
                description: "Expected vs. actual behavior, error messages, context",
            },
            {
                title: "Set your timeline",
                description: "Let us know your priorities and deadlines",
            },
        ],
    },
    {
        number: "02",
        title: "diagnose.",
        description:
            "We analyze your code to understand what went wrong. We identify bugs, architectural issues, and opportunities for improvement.",
        details: [
            {
                title: "Full code review",
                description: "We examine every aspect of your codebase",
            },
            {
                title: "Root cause analysis",
                description: "Finding the source, not just the symptoms",
            },
            {
                title: "Document findings",
                description: "Clear report of issues and recommendations",
            },
            {
                title: "Provide quote",
                description: "Transparent pricing with detailed breakdown",
            },
        ],
    },
    {
        number: "03",
        title: "fix.",
        description:
            "We implement the fixes. Whether it's debugging, refactoring, or rebuilding components, we get your code working properly.",
        details: [
            {
                title: "Targeted fixes",
                description: "Surgical precision for identified issues",
            },
            {
                title: "Clean code",
                description: "Maintainable, readable, and well-structured",
            },
            {
                title: "Add tests",
                description: "Prevent future regressions with test coverage",
            },
            {
                title: "Document changes",
                description: "Clear changelog and inline documentation",
            },
        ],
    },
    {
        number: "04",
        title: "deploy.",
        description:
            "We help you deploy the fixed code and verify everything works in production. Your app is live and running smoothly.",
        details: [
            {
                title: "Deployment assist",
                description: "We help with your CI/CD pipeline",
            },
            {
                title: "Production verify",
                description: "Testing in your real environment",
            },
            {
                title: "Handoff docs",
                description: "Complete documentation for your team",
            },
            {
                title: "Ongoing support",
                description: "We're here if you need us",
            },
        ],
    },
];

export default function HowItWorks() {
    return (
        <div>
            {/* Full Page Hero */}
            <FullPageHero
                title="how it works."
                subtitle="A simple, transparent process from broken code to working product. No surprises, no hidden fees."
            />

            {/* Step Slides */}
            {steps.map((step, index) => (
                <FullPageSlide
                    key={step.number}
                    number={step.number}
                    title={step.title}
                    isFirst={index === 0}
                    isLast={index === steps.length - 1}
                >
                    <p
                        className="body-large"
                        style={{
                            color: "var(--text-secondary)",
                            maxWidth: "700px",
                            marginBottom: "3rem",
                        }}
                    >
                        {step.description}
                    </p>

                    {/* Clean detail boxes */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.5rem",
                            maxWidth: "900px",
                        }}
                    >
                        {step.details.map((detail, i) => (
                            <FadeIn key={i} delay={i * 100}>
                                <div
                                    style={{
                                        padding: "2rem",
                                        background: "var(--bg-secondary)",
                                        border: "1px solid var(--border)",
                                        height: "100%",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.75rem",
                                            marginBottom: "0.75rem",
                                        }}
                                    >
                                        <span style={{ color: "var(--accent)", fontWeight: 600 }}>→</span>
                                        <h3 style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                                            {detail.title}
                                        </h3>
                                    </div>
                                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                                        {detail.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </FullPageSlide>
            ))}

            {/* FAQ Section */}
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "var(--section-padding) clamp(20px, 5vw, 60px)",
                    background: "var(--bg-secondary)",
                }}
            >
                <div style={{ maxWidth: "var(--content-max-width)", margin: "0 auto", width: "100%" }}>
                    <h2 className="section-title" style={{ marginBottom: "4rem" }}>
                        common questions.
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "3rem",
                        }}
                    >
                        <div>
                            <h3
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    marginBottom: "1rem",
                                }}
                            >
                                How much does it cost?
                            </h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                                Pricing depends on the scope and complexity of your project.
                                We provide a detailed quote after our initial diagnosis.
                                Small fixes start around $500, larger refactors scale from there.
                            </p>
                        </div>

                        <div>
                            <h3
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    marginBottom: "1rem",
                                }}
                            >
                                How long does it take?
                            </h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                                Small fixes can be done in 1-3 days. Larger refactors may take 1-2 weeks.
                                We&apos;ll give you a realistic timeline upfront — and we stick to it.
                            </p>
                        </div>

                        <div>
                            <h3
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    marginBottom: "1rem",
                                }}
                            >
                                What AI tools do you support?
                            </h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                                All of them. We work with code generated by ChatGPT, Claude,
                                Copilot, Cursor, Windsurf, and any other AI coding tool.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="ready to get started?"
                subtitle="Submit your project and we'll get back to you within 24 hours."
            />
        </div>
    );
}
