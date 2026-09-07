# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Astro site deployed to Cloudflare Workers via `@astrojs/cloudflare`. This is currently the unmodified Astro "basics" starter template — no custom pages/components have been built yet beyond the default `Welcome` page.

Package manager is **pnpm** (see `pnpm-workspace.yaml`, `pnpm-lock.yaml`).

## Commands

```
pnpm install              # install dependencies
pnpm dev                  # start dev server at localhost:4321
pnpm build                # build production site to ./dist/ (Cloudflare Worker output)
pnpm preview               # preview the Cloudflare build locally (via wrangler)
pnpm astro check           # type-check .astro files
pnpm generate-types        # regenerate worker-configuration.d.ts from wrangler.jsonc (run after editing wrangler.jsonc)
```

When starting the dev server as an agent, use background mode instead of `pnpm dev`:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

There is no test suite or linter configured in this repo yet.

## Architecture

- **Cloudflare adapter**: `astro.config.mjs` sets `adapter: cloudflare()`, so `pnpm build` produces a Cloudflare Worker (entrypoint `@astrojs/cloudflare/entrypoints/server`), not a static site or Node server. `wrangler.jsonc` configures the Worker (name, static assets binding pointing at `./dist`, compatibility date/flags). Any Cloudflare bindings (KV, D1, R2, env vars, etc.) get added to `wrangler.jsonc`, and `pnpm generate-types` must be rerun so `worker-configuration.d.ts` (included in `tsconfig.json`) reflects them.
- **Routing**: file-based, under `src/pages/` — each `.astro` file becomes a route.
- **Layouts/components**: `src/layouts/Layout.astro` is the base HTML shell; page-level composition wraps components (e.g. `src/components/Welcome.astro`) in a layout, as in `src/pages/index.astro`.
- **Assets**: static files served as-is from `public/`; imported/processed assets (optimized by Astro) live in `src/assets/`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
- [Cloudflare adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
