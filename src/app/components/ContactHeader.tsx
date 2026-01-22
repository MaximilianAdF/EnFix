"use client";

import StrikethroughLink from "./StrikethroughLink";

export default function ContactHeader() {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "var(--header-height)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 50,
                pointerEvents: "none",
            }}
        >
            <div style={{ pointerEvents: "auto" }}>
                <StrikethroughLink
                    href="/contact"
                    color="var(--accent)"
                    lineColor="var(--accent)"
                    fontSize="0.875rem"
                    style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                    }}
                >
                    Contact
                </StrikethroughLink>
            </div>
        </div>
    );
}
