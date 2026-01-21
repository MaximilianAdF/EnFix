import StrikethroughLink from "./StrikethroughLink";

interface EmailLinkProps {
    large?: boolean;
}

/**
 * Email link with strikethrough hover effect.
 * Used in Menu and Contact page.
 */
export default function EmailLink({ large = false }: EmailLinkProps) {
    return (
        <StrikethroughLink
            href="mailto:hello@enfix.dev"
            external
            color="var(--accent)"
            lineColor="var(--accent)"
            fontSize={large ? "1.5rem" : "1.25rem"}
            lineHeight={large ? 2 : 1}
        >
            hello@enfix.dev
        </StrikethroughLink>
    );
}
