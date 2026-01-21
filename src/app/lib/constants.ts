/**
 * Shared constants used across the site.
 */

export const SOCIAL_LINKS = [
    { href: "https://github.com/enfix", label: "GitHub" },
    { href: "https://linkedin.com/company/enfix", label: "LinkedIn" },
    { href: "https://twitter.com/enfix_dev", label: "X" },
] as const;

export const NAV_LINKS = [
    { href: "/", label: "home" },
    { href: "/whatwedo", label: "what we do" },
    { href: "/howitworks", label: "how it works" },
    { href: "/contact", label: "contact" },
] as const;

export const EMAIL = "hello@enfix.dev";
