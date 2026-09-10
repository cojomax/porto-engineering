/// <reference types="astro/client" />

// Making use of interface declaration merging.

interface ImportMetaEnv {
	readonly PUBLIC_SITE?: import('./config/site').Site;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
