export type Site = 'plumbing' | 'engineering';

// Which company's site is being built, set per-deployment via the PUBLIC_SITE
// env var (see .env.example). Defaults to 'plumbing' since that's this repo's
// current site.
export const SITE: Site = import.meta.env.PUBLIC_SITE === 'engineering' ? 'engineering' : 'plumbing';
