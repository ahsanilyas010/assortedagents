# Assorted Group AI-Agent Hub

Static Astro site for AI agents and crawlers. Source of truth: `data/*.yaml`.

## Decisions
- Domain: `agents.assorted.group` (confirmed by Ahsan).
- Scope: apt, ablllc, abpo, acw, handpicked. Optional verticals skipped for now.
- Hard rule: no changes to existing repos, Vercel projects, or DNS records. Only one new `agents` CNAME, after approval.

## Commands
- `npm run todos` lists open placeholders in `data/`.
- `npm run build` builds, then fails if any published file contains `TODO`.
