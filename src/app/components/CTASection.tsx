import FadeIn from "./FadeIn";
import Button from "./Button";

interface CTASectionProps {
    title: string;
    subtitle: string;
    buttonText?: string;
    buttonHref?: string;
}

/**
 * Reusable dark CTA section used at the bottom of pages.
 */
export default function CTASection({
    title,
    subtitle,
    buttonText = "Contact Us →",
    buttonHref = "/contact",
}: CTASectionProps) {
    return (
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
            <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto", width: "100%" }}>
                <FadeIn>
                    <h2
                        className="section-title"
                        style={{ marginBottom: "1.5rem" }}
                    >
                        {title}
                    </h2>
                </FadeIn>

                <FadeIn delay={100}>
                    <p
                        className="body-large"
                        style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            marginBottom: "2.5rem",
                        }}
                    >
                        {subtitle}
                    </p>
                </FadeIn>

                <FadeIn delay={200}>
                    <Button href={buttonHref} variant="dark">
                        {buttonText}
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
