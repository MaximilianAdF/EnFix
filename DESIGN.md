# EnFix Design Philosophy & Implementation Guide

> **"One fix. Done right."**

This document outlines the design principles, aesthetic choices, and technical implementation details for the EnFix website. It serves as a guide for future development to ensure consistency with the established brand identity.

## 1. Design Philosophy

The design is heavily inspired by **Tacto** — characterized by minimalism, strong typography, and deliberate negative space.

### Core Principles

*   **Radical Minimalism**: Remove non-essential elements. No decorative backgrounds, distinct borders, or shadows unless functionally required.
*   **Immersive Typography**: Text is the primary UI element. Headlines are large, lowercase, and often animated.
*   **Top-Aligned Layouts**: Unlike traditional center-aligned marketing sites, content is often anchored to the top-left, creating a structured, editorial feel.
*   **Deliberate Pacing**: Animations are slow (0.6s - 0.8s) and smooth. The site asks the user to slow down and read.
*   **Transparency**: Forms and overlays use transparency to blend with the background often employing high-contrast borders (black/white) rather than fills.

### Visual Identity

*   **Color Palette**:
    *   `--bg-primary`: `#E8E8E4` (Warm Gray) — Soft, paper-like background.
    *   `--text-primary`: `#0A0A0A` (Almost Black) — High contrast text.
    *   `--text-secondary`: `#666666` — Subtle supporting text.
    *   `--accent`: `#0000FF` (Pure Blue) — Used sparingly for links, badges, and emphasis.
*   **Typography**:
    *   **Inter**: Clean, variable sans-serif.
    *   **Lowercase**: All major headlines and navigation links are lowercase for a modern, approachable, yet technical feel.

---

## 2. Interaction Patterns

### The "TypeWriter" Effect
Every major section features a headline that types itself out.
*   **Behavior**: Slower typing speed (80-120ms) with a cursor that fades out rather than disappearing abruptly.
*   **Implementation**: Uses an invisible placeholder to reserve layout space, preventing content jumping while typing.

### Hover States
*   **Strikethrough**: Navigation links do *not* use underlines or color changes. Instead, a line strikes through the text (`line-through` effect simulated with a `span`). This subverts expectations and feels technical (like crossing off a bug list).
*   **Fill Buttons**: "Contact" buttons start outlined and fill with solid color on hover.

### Page Transitions
*   **Unlock/Lock**: Navigation feels like unlocking content. The old page fades out and the new page slides up slowly (0.6s), creating a feeling of physical sheets of paper moving.

---

## 3. Technical Implementation

The codebase is built with **Next.js 15+ (App Router)** and **TypeScript**.

### Key Components

#### `app/components/FullPageHero.tsx`
The entry point for every page.
*   **Props**: `title`, `subtitle`
*   **Features**: Top-aligned layout, auto-triggering TypeWriter, animated "Scroll ↓" indicator.

#### `app/components/FullPageSlide.tsx`
Used for multi-step content like "What We Do" and "How It Works".
*   **Behavior**: Each slide takes up `100vh`.
*   **Trigger**: Uses `IntersectionObserver` to start typing animations only when the slide enters the viewport.

#### `app/components/TypeWriter.tsx`
A custom hook-based component for the typing effect.
*   **Critical Detail**: Renders *two* spans. One invisible (for layout stability) and one visible (for the animation).

#### `app/components/FadeIn.tsx`
A wrapper component that reveals children as they scroll into view.
*   **Customization**: Supports direction (`up`, `down`, `left`, `right`) and delay.

#### `app/components/Menu.tsx`
A full-screen overlay menu.
*   **Animation**: Links stagger in one by one.
*   **Style**: Uses the same strikethrough hover effect as the header.

### Styling Strategy
*   **CSS Modules / Global CSS**: We use standard CSS variables in `globals.css` for consistent tokens (`var(--header-height)`, `var(--section-padding)`).
*   **Inline Styles**: Used for dynamic values (transitions delays) within components to keep logic co-located.

---

## 4. Future Roadmap & Guidelines

### Adding New Pages
1.  Import `FullPageHero`.
2.  Use the standard padding: `padding: "calc(var(--header-height) + 100px) clamp(20px, 5vw, 60px) 60px"`.
3.  Ensure the main title is lowercase and passed to the hero.

### Content Guidelines
*   **Tone**: Technical, direct, confident.
*   **Structure**: Use bullet points and clean boxes. Avoid walls of text.
*   **Images**: Avoid stock photos. Use code snippets, abstract geometric shapes, or typography as visuals.

### "Tacto" Feel Checklist
- [ ] Is the header lowercase?
- [ ] Is the typing animation slow enough?
- [ ] Is the layout top-aligned?
- [ ] Are hover effects strikethrough?
- [ ] Are inputs transparent with black borders?
