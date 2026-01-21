"use client";

import { useState, FormEvent } from "react";
import FullPageHero from "../components/FullPageHero";
import FadeIn from "../components/FadeIn";
import EmailLink from "../components/EmailLink";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        description: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const labelStyles: React.CSSProperties = {
        display: "block",
        fontSize: "0.75rem",
        fontWeight: 500,
        marginBottom: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "var(--text-secondary)",
    };

    return (
        <div>
            {/* Full Page Hero */}
            <FullPageHero
                title="contact."
                subtitle="Have a project that needs fixing? Tell us about it and we'll get back to you within 24 hours."
            >
                <p style={{ marginTop: "2rem" }}>
                    <EmailLink large />
                </p>
            </FullPageHero>

            {/* Contact Form Section */}
            <section
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    padding: "var(--section-padding) clamp(20px, 5vw, 60px)",
                    borderTop: "1px solid var(--border)",
                }}
            >
                <div
                    style={{
                        maxWidth: "var(--content-max-width)",
                        margin: "0 auto",
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                        gap: "4rem",
                    }}
                >
                    {/* Left - Info */}
                    <FadeIn>
                        <div>
                            <h2
                                style={{
                                    fontSize: "2rem",
                                    fontWeight: 600,
                                    marginBottom: "2rem",
                                    textTransform: "lowercase",
                                }}
                            >
                                reach us directly.
                            </h2>

                            <div style={{ marginBottom: "2.5rem" }}>
                                <p style={{ ...labelStyles, marginBottom: "0.5rem" }}>Email</p>
                                <EmailLink />
                            </div>

                            <div style={{ marginBottom: "2.5rem" }}>
                                <p style={{ ...labelStyles, marginBottom: "0.5rem" }}>Response Time</p>
                                <p style={{ fontSize: "1.125rem" }}>Within 24 hours</p>
                            </div>

                            <div
                                style={{
                                    padding: "2rem",
                                    background: "transparent",
                                    border: "1px solid var(--text-primary)",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "1rem",
                                        fontWeight: 600,
                                        marginBottom: "1.5rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    What to include
                                </h3>
                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        display: "grid",
                                        gap: "1rem",
                                    }}
                                >
                                    {[
                                        "Description of the issue",
                                        "What AI tool generated the code",
                                        "Link to your repository",
                                        "Expected vs. actual behavior",
                                        "Your timeline and budget",
                                    ].map((item, i) => (
                                        <li
                                            key={i}
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "0.75rem",
                                                color: "var(--text-secondary)",
                                                fontSize: "0.9375rem",
                                            }}
                                        >
                                            <span style={{ color: "var(--accent)", fontWeight: 500 }}>→</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right - Form */}
                    <FadeIn delay={200}>
                        {isSubmitted ? (
                            <div
                                style={{
                                    padding: "4rem",
                                    background: "transparent",
                                    border: "1px solid var(--text-primary)",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minHeight: "400px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        border: "2px solid var(--accent)",
                                        color: "var(--accent)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.5rem",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    ✓
                                </div>
                                <h3
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: 600,
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Message Sent!
                                </h3>
                                <p style={{ color: "var(--text-secondary)", maxWidth: "300px" }}>
                                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div style={{ display: "grid", gap: "2rem" }}>
                                    {/* Name */}
                                    <div>
                                        <label style={labelStyles}>Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) =>
                                                setFormState({ ...formState, name: e.target.value })
                                            }
                                            className="form-input"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label style={labelStyles}>Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) =>
                                                setFormState({ ...formState, email: e.target.value })
                                            }
                                            className="form-input"
                                        />
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <label style={labelStyles}>Company (optional)</label>
                                        <input
                                            type="text"
                                            value={formState.company}
                                            onChange={(e) =>
                                                setFormState({ ...formState, company: e.target.value })
                                            }
                                            className="form-input"
                                        />
                                    </div>

                                    {/* Project Type */}
                                    <div>
                                        <label style={labelStyles}>Project Type</label>
                                        <select
                                            value={formState.projectType}
                                            onChange={(e) =>
                                                setFormState({ ...formState, projectType: e.target.value })
                                            }
                                            className="form-input form-select"
                                        >
                                            <option value="">Select a type...</option>
                                            <option value="debugging">Bug Fixing / Debugging</option>
                                            <option value="refactoring">Code Refactoring</option>
                                            <option value="optimization">Performance Optimization</option>
                                            <option value="rescue">Project Rescue</option>
                                            <option value="review">Code Review</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label style={labelStyles}>Tell us about your project *</label>
                                        <textarea
                                            required
                                            rows={6}
                                            value={formState.description}
                                            onChange={(e) =>
                                                setFormState({ ...formState, description: e.target.value })
                                            }
                                            placeholder="Describe the issue, what AI tool was used, and what you're hoping to achieve..."
                                            className="form-input form-textarea"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="form-submit"
                                        style={{
                                            opacity: isSubmitting ? 0.6 : 1,
                                            cursor: isSubmitting ? "not-allowed" : "pointer",
                                        }}
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message →"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
