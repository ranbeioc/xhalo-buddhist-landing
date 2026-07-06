# AGENT_SKILL.md

## Skill Name
xhalo-buddhist-landing-page-skill

## Purpose
Develops the xHalo Buddhist product landing page: static Cloudflare Pages deployment with the "Rotating Halo" visual design, 17-language i18n, SEO metadata, and page-behavior analytics.

## Repository Ownership
This repository owns:

- Buddhist product landing page at `fo.xhalo.co`
- rotating halo visual design (v8) and static assets
- client-side i18n engine (`i18n.js`) and 17-language marketing copy
- SEO metadata (hreflang alternates, JSON-LD WebSite structured data)
- Microsoft Clarity page-behavior analytics integration

This repository does not own:

- Buddhist search API runtime (owned by xhalo-buddhist-api)
- Buddhist corpus data pipeline (owned by xhalo-buddhist-data)
- global auth core
- AI workflow orchestration

## Cloudflare Ownership

| Resource Type | Name | Environment | Domain/Route | Verification |
| --- | --- | --- | --- | --- |
| Pages | xhalo-buddhist-landing | production | xhalo-buddhist-landing.pages.dev, fo.xhalo.co | matched |

## Rules

- Pure static Pages deployment (Cloudflare `assets` directory = repo root) — no build step, no D1/R2/KV/Worker bindings.
- Do not add API calls to xhalo-buddhist-api or xhalo-buddhist-data from this repo without first checking whether that logic belongs here or in a shared client package.
- Do not commit secrets.
- Update global registry files in `xhalo-ai-workflow` when Cloudflare ownership changes.

## Project Notes
- Created 2026-07-05; this AGENT_SKILL.md was added 2026-07-06 during a full GitHub+Cloudflare architecture audit (this repo previously had no skill file).
- No confirmed runtime dependency on xhalo-buddhist-api or xhalo-buddhist-data as of this scan — verify before assuming otherwise if the page grows dynamic features.
