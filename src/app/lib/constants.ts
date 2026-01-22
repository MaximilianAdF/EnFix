/**
 * Shared constants used across the site.
 */

export const SOCIAL_LINKS = [
    { href: "https://github.com/enfix", label: "GitHub" },
    { href: "https://linkedin.com/company/enfix", label: "LinkedIn" },
    { href: "https://twitter.com/enfix_dev", label: "X" },
] as const;

export const NAV_LINKS = [
    {
        href: "/",
        label: "home",
        description: null
    },
    {
        href: "/whatwedo",
        label: "what we do",
        description: "Debugging, refactoring, and fixing AI-generated code"
    },
    {
        href: "/howitworks",
        label: "how it works",
        description: "Submit → Diagnose → Fix → Deploy"
    },
    {
        href: "/whoweare",
        label: "who we are",
        description: "Meet the engineers behind EnFix"
    },
    {
        href: "/contact",
        label: "contact",
        description: "Get in touch for a quote"
    },
] as const;

export const EMAIL = "hello@enfix.dev";
