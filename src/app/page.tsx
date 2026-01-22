"use client";

import { useState } from "react";
import Link from "next/link";
import TypeWriter from "./components/TypeWriter";
import RotatingWords from "./components/RotatingWords";
import FadeIn from "./components/FadeIn";
import StrikethroughLink from "./components/StrikethroughLink";
import CTASection from "./components/CTASection";
import ScrollIndicator from "./components/ScrollIndicator";
import { NAV_LINKS } from "./lib/constants";

const rotatingWords = ["fix", "debug", "refactor", "repair", "optimize", "rescue"];

// Filter out the home link and ensure non-null description
const navSections = NAV_LINKS.filter(link => link.href !== "/").map(link => ({
  ...link,
  title: link.label,
  description: link.description || ""
}));

const newsItems = [
  {
    date: "2026.01.21",
    isNew: true,
    title: "EnFix launches official website",
    link: null,
  },
  {
    date: "2026.01.15",
    isNew: false,
    title: "Now accepting projects for Q1 2026",
    link: "/contact",
  },
];

// Navigation link component with strikethrough hover
function NavSectionLink({ href, title, description }: { href: string; title: string; description: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "block",
        padding: "3rem 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <h2 className="nav-link-large" style={{ position: "relative", display: "inline-block" }}>
          {title}
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: isHovered ? "100%" : "0%",
              height: "2px",
              background: "var(--accent)",
              transition: "width 0.4s ease",
            }}
          />
        </h2>
        <span
          style={{
            fontSize: "1rem",
            color: isHovered ? "var(--accent)" : "var(--text-secondary)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "color 0.3s ease",
          }}
        >
          {description}
          <span style={{
            transition: "transform 0.2s ease",
            transform: isHovered ? "translateX(4px)" : "translateX(0)"
          }}>→</span>
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div id="top">
      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: 0,
          paddingBottom: "60px",
          paddingInline: "var(--page-padding-x)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "var(--content-max-width)", margin: "0 auto", width: "100%" }}>
          {/* Main Hero Text */}
          <h1 className="hero-text" style={{ marginBottom: "2rem" }}>
            <TypeWriter text="enfix." speed={180} delay={500} />
          </h1>

          {/* Subtitle with rotating words */}
          <p
            className="body-large"
            style={{
              maxWidth: "600px",
              color: "var(--text-secondary)",
            }}
          >
            we{" "}
            <RotatingWords words={rotatingWords} interval={2500} />
            {" "}what AI couldn&apos;t.
          </p>

          {/* Secondary tagline */}
          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1rem",
              color: "var(--text-light)",
              fontStyle: "italic",
            }}
          >
            one fix. done right.
          </p>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* Divider */}
      <div className="divider" style={{ marginInline: "var(--page-padding-x)" }} />

      {/* Navigation Sections */}
      <section style={{ paddingInline: "var(--page-padding-x)" }}>
        <div style={{ maxWidth: "var(--content-max-width)", margin: "0 auto" }}>
          {navSections.map((section, index) => (
            <FadeIn key={section.href} delay={index * 100}>
              <NavSectionLink
                href={section.href}
                title={section.title}
                description={section.description}
              />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        style={{
          paddingTop: "var(--section-padding)",
          paddingBottom: "var(--section-padding)",
          paddingInline: "var(--page-padding-x)",
          background: "var(--bg-secondary)",
          marginTop: "3rem",
        }}
      >
        <div style={{ maxWidth: "var(--content-max-width)", margin: "0 auto" }}>
          <FadeIn>
            <p
              className="text-small"
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "2rem",
              }}
            >
              About EnFix
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <h2
              className="section-title"
              style={{ marginBottom: "2rem", maxWidth: "800px" }}
            >
              embedded solutions for broken code.
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <p
              className="body-large"
              style={{
                color: "var(--text-secondary)",
                maxWidth: "700px",
                marginBottom: "2rem",
              }}
            >
              EnFix is a tech consulting firm that specializes in debugging, refactoring,
              and fixing AI-generated code. When your AI-built application, website, or
              product doesn&apos;t work as expected, we step in to diagnose and repair it.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <p
              style={{
                color: "var(--text-secondary)",
                maxWidth: "700px",
              }}
            >
              Our name comes from the Swedish &quot;En Fix&quot; (one fix) and the concept of
              an &quot;infix&quot; embedding something firmly in the middle. We embed quality
              solutions into your codebase, fixing what&apos;s broken from the inside out.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div style={{ marginTop: "3rem" }}>
              <StrikethroughLink href="/whatwedo">
                Learn more about our services →
              </StrikethroughLink>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* News Section */}
      <section style={{ paddingTop: "var(--section-padding)", paddingBottom: "var(--section-padding)", paddingInline: "var(--page-padding-x)" }}>
        <div style={{ maxWidth: "var(--content-max-width)", margin: "0 auto" }}>
          <FadeIn>
            <h2 className="section-title" style={{ marginBottom: "3rem" }}>
              news
            </h2>
          </FadeIn>

          <div>
            {newsItems.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    padding: "1.5rem 0",
                    borderBottom: "1px solid var(--border)",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    minWidth: "140px",
                  }}>
                    <span className="text-small" style={{ whiteSpace: "nowrap" }}>
                      {item.date}
                    </span>
                    {item.isNew && (
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--accent)",
                          fontWeight: 500,
                          textTransform: "uppercase",
                        }}
                      >
                        new
                      </span>
                    )}
                  </div>
                  <div>
                    {item.link ? (
                      <StrikethroughLink href={item.link}>
                        {item.title} →
                      </StrikethroughLink>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="ready to fix your code?"
        subtitle="Get in touch and let's talk about your project."
      />
    </div>
  );
}
