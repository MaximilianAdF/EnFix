"use client";

import FullPageHero from "../components/FullPageHero";
import FadeIn from "../components/FadeIn";
import StrikethroughLink from "../components/StrikethroughLink";
import CTASection from "../components/CTASection";
import TypeWriter from "../components/TypeWriter";

const teamMembers = [
    {
        name: "Felix Stenberg",
        role: "Co-Founder & Software Engineer",
        image: null,
        bio: "Observability engineer. Built monitoring infrastructure at Lynx Asset Management. Shipped data pipelines at Nasdaq. Teaches algorithms at KTH. Writes C#, Python, and infrastructure-as-code.",
        education: [
            { degree: "M.Sc. Embedded Systems (Software Track)", school: "KTH Royal Institute of Technology", year: "Expected 2027" },
            { degree: "B.Sc. Computer Science & Engineering", school: "KTH Royal Institute of Technology", year: "2022 – 2025" },
        ],
        experience: [
            { role: "Teaching Assistant", company: "KTH", period: "2023 – Present", description: "Lectures on Data Algorithms & Data Structures, one-on-one student assistance" },
            { role: "Software Engineer", company: "Lynx Asset Management", period: "2024 – 2025", description: "Built OpenTelemetry observability PoC, scaled to AWS Kubernetes; C# developer on Portfolio Management Platform" },
            { role: "Data Engineering", company: "Nasdaq", period: "2024", description: "BI & ESR team: SQL, Python, AWS, Kubernetes, Apache Airflow, Docker" },
        ],
        skills: ["C#", "Java", "C", "Zig", "Python", "SQL", ".NET", "AWS", "Kubernetes", "Docker", "OpenTelemetry", "Grafana", "Prometheus", "Loki", "Tempo", "Git"],
        projects: [
            { name: "QKV Attention with ARM SVE/SME", description: "Bachelor's thesis: ARM processor optimization for transformer models, benchmarked with gem5 simulator" },
            { name: "Obsidian Vault Topic Visualizer", description: "Python tool for note clustering with Qwen embeddings, BERTopic (UMAP + HDBSCAN), and interactive 2D maps" },
            { name: "3D Engine for ChipKIT Uno32", description: "Real-time 3D graphics engine for microcontroller, optimized for limited resources" },
        ],
        linkedin: "https://linkedin.com/in/felix-stenberg",
        github: "https://github.com/Crispigt",
        certifications: ["Advanced Mathematics – Stockholm University", "Elements of AI – Linköping University", "Leadership Training – Friluftsfrämjandet"],
    },
    {
        name: "Maximilian Alvim de Faria",
        role: "Co-Founder & Full-Stack Developer",
        image: null,
        bio: "Production systems engineer. Builds monitoring infrastructure and CI/CD pipelines. Maintains high-traffic web applications. Teaches parallel programming at KTH. Writes TypeScript, Go, and React.",
        education: [
            { degree: "M.Sc. Computer Science & Engineering", school: "KTH Royal Institute of Technology", year: "Expected 2027" },
        ],
        experience: [
            { role: "Full-Stack Developer", company: "We Know IT", period: "2025 – Present", description: "Prometheus, Grafana, AWS, Docker, GitHub Actions" },
            { role: "Frontend Developer", company: "TellusTalk AB", period: "2025 – Present", description: "React, TypeScript, TailwindCSS" },
            { role: "Teaching Assistant", company: "KTH", period: "2024 – Present", description: "Algorithms, Data Structures, Parallel Programming (Go)" },
        ],
        skills: ["C++", "C", "Python", "TypeScript", "Golang", "React", "Docker", "AWS", "PostgreSQL", "Prometheus", "Grafana", "GitHub Actions"],
        projects: [
            { name: "NoPixel Minigames 4.0", description: "Real-time multiplayer gaming platform with 1000+ users, sub-100ms response times" },
            { name: "Financial Sentiment Analysis", description: "Bachelor's thesis: ML pipeline on Google Cloud processing 10,000+ daily entries" },
        ],
        linkedin: "https://linkedin.com/in/maximilian-adf",
        github: "https://github.com/MaximilianAdF",
        coursework: ["Real-Time Systems", "Embedded Systems (C, FreeRTOS)", "Parallel Programming (Go)", "Compilers & Execution Environments"],
        languages: ["Swedish (Native)", "English (Fluent)", "Portuguese (Fluent)", "French (Conversational)"],
    },
    {
        name: "Ashkan Hanifi",
        role: "Co-Founder & Embedded Systems Engineer",
        image: null,
        bio: "Embedded systems specialist. Built internal R&D tools at Ericsson. Designs hardware from PCB to protocol implementation. Currently pursuing MSc in Embedded Systems at KTH. Writes C, Java, and low-level firmware.",
        education: [
            { degree: "M.Sc. Embedded Systems", school: "KTH Royal Institute of Technology", year: "Expected 2027" },
            { degree: "B.Sc. Computer Science", school: "KTH Royal Institute of Technology", year: "2022 – 2025" },
            { degree: "Electrical Engineering (1 year)", school: "KTH Royal Institute of Technology", year: "2021 – 2022" },
        ],
        experience: [
            { role: "R&D Summer Intern", company: "Ericsson", period: "2024", description: "Maintained and extended internal tools with Java & Spring Framework; collaborated with offices in Canada and China" },
        ],
        skills: ["Java", "C", "Python", "PostgreSQL", "FreeRTOS", "I2S Protocol", "DMA", "PCB Design", "Spring Framework"],
        projects: [
            { name: "Raspberry Pi Pico Synthesizer", description: "FM synthesizer with I2S via DMA and Programmable IO; custom PCB with PCM5102A DAC" },
            { name: "Image Processing Application", description: "Multithreaded Java image processor with diverse filters and Swing GUI" },
        ],
        linkedin: "https://linkedin.com/in/ashkan-hanifi",
        github: null,
        languages: ["Swedish (Native)", "English (Full Professional)", "Spanish (Conversational)", "Persian (Conversational)"],
    },
];

export default function TeamPage() {
    return (
        <div>
            {/* Full Page Hero */}
            <FullPageHero
                title="who we are."
                subtitle="Three engineers from KTH with a shared mission: fix what AI breaks. We combine academic rigor with real-world production experience to deliver solutions that work."
            />

            {/* Team Members */}
            <section
                style={{
                    minHeight: "100vh",
                    paddingTop: "8rem",
                    paddingBottom: "8rem",
                    paddingInline: "var(--page-padding-x)",
                    background: "var(--background)",
                }}
            >
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 400,
                            marginBottom: "4rem",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        <TypeWriter text="the founders" speed={60} delay={300} />
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "4rem",
                        }}
                    >
                        {teamMembers.map((member, index) => (
                            <FadeIn key={member.name} delay={index * 0.15}>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr",
                                        gap: "3rem",
                                        padding: "3rem",
                                        background: "var(--background)",
                                        border: "1px solid rgba(0,0,0,0.08)",
                                        borderRadius: "2px",
                                    }}
                                >
                                    {/* Header */}
                                    <div>
                                        <h3
                                            style={{
                                                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                                                fontWeight: 500,
                                                marginBottom: "0.5rem",
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            {member.name}
                                        </h3>
                                        <p
                                            style={{
                                                fontSize: "1.1rem",
                                                color: "var(--accent)",
                                                marginBottom: "1.5rem",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {member.role}
                                        </p>
                                        <p
                                            style={{
                                                fontSize: "1.1rem",
                                                lineHeight: 1.7,
                                                color: "var(--text-secondary)",
                                                maxWidth: "800px",
                                            }}
                                        >
                                            {member.bio}
                                        </p>
                                    </div>

                                    {/* Content Grid */}
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                            gap: "2.5rem",
                                        }}
                                    >
                                        {/* Education */}
                                        <div>
                                            <h4
                                                style={{
                                                    fontSize: "0.85rem",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.1em",
                                                    color: "var(--text-secondary)",
                                                    marginBottom: "1rem",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Education
                                            </h4>
                                            {member.education.map((edu) => (
                                                <div key={edu.degree} style={{ marginBottom: "1rem" }}>
                                                    <p style={{ fontWeight: 500, marginBottom: "0.25rem" }}>
                                                        {edu.degree}
                                                    </p>
                                                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                                                        {edu.school} · {edu.year}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Experience */}
                                        <div>
                                            <h4
                                                style={{
                                                    fontSize: "0.85rem",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.1em",
                                                    color: "var(--text-secondary)",
                                                    marginBottom: "1rem",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Experience
                                            </h4>
                                            {member.experience.map((exp) => (
                                                <div key={exp.company} style={{ marginBottom: "1rem" }}>
                                                    <p style={{ fontWeight: 500, marginBottom: "0.25rem" }}>
                                                        {exp.role} <span style={{ color: "var(--text-secondary)" }}>@ {exp.company}</span>
                                                    </p>
                                                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                                                        {exp.period} · {exp.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Projects */}
                                        <div>
                                            <h4
                                                style={{
                                                    fontSize: "0.85rem",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.1em",
                                                    color: "var(--text-secondary)",
                                                    marginBottom: "1rem",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Notable Projects
                                            </h4>
                                            {member.projects.map((project) => (
                                                <div key={project.name} style={{ marginBottom: "1rem" }}>
                                                    <p style={{ fontWeight: 500, marginBottom: "0.25rem" }}>
                                                        {project.name}
                                                    </p>
                                                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                                                        {project.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <h4
                                            style={{
                                                fontSize: "0.85rem",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.1em",
                                                color: "var(--text-secondary)",
                                                marginBottom: "1rem",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Technical Skills
                                        </h4>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                            {member.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    style={{
                                                        padding: "0.4rem 0.8rem",
                                                        background: "rgba(0,0,0,0.04)",
                                                        borderRadius: "2px",
                                                        fontSize: "0.85rem",
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                                        {member.linkedin && (
                                            <StrikethroughLink
                                                href={member.linkedin}
                                                external
                                                style={{ fontSize: "1rem" }}
                                            >
                                                LinkedIn →
                                            </StrikethroughLink>
                                        )}
                                        {member.github && (
                                            <StrikethroughLink
                                                href={member.github}
                                                external
                                                style={{ fontSize: "1rem" }}
                                            >
                                                GitHub →
                                            </StrikethroughLink>
                                        )}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section
                style={{
                    padding: "8rem 2rem",
                    background: "var(--background)",
                    borderTop: "1px solid rgba(0,0,0,0.08)",
                }}
            >
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            fontWeight: 400,
                            marginBottom: "3rem",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        <TypeWriter text="why work with us?" speed={50} delay={300} />
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {[
                            {
                                title: "shipped to production",
                                description:
                                    "Lynx Asset Management. Nasdaq. High-traffic web apps. We've deployed code that runs in production. Not demos. Not prototypes.",
                            },
                            {
                                title: "observability-first",
                                description:
                                    "OpenTelemetry. Prometheus. Grafana. Loki. We don't just write code, we make sure you can see what it's doing.",
                            },
                            {
                                title: "we teach this",
                                description:
                                    "Teaching assistants at KTH. Algorithms. Data structures. Parallel programming. If we can explain it to students, we can explain it to you.",
                            },
                            {
                                title: "full stack, low level",
                                description:
                                    "React to ARM assembly. Docker to FreeRTOS. We go as deep as needed.",
                            },
                        ].map((item, index) => (
                            <FadeIn key={item.title} delay={index * 0.1}>
                                <div>
                                    <h3
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: 500,
                                            marginBottom: "0.75rem",
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        style={{
                                            color: "var(--text-secondary)",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Ready to fix your code?"
                subtitle="Let's discuss how we can help debug, refactor, and improve your AI-generated codebase."
            />
        </div>
    );
}
