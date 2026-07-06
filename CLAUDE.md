# CLAUDE.md

This repository (`xhalo-buddhist-landing`) is part of the xHalo product suite: ~16 repos developed in parallel by multiple AI coding agents (Claude Code, OpenAI Codex, Google Gemini — see `codex/*`/`gemini/*` branch names across the suite), each pushing directly to GitHub. Local clones on this machine have been found stale by 1–248 commits behind `origin` — never assume a clean `git status` means this repo or branch is current.

## Before planning or implementing anything

1. **Verify freshness first.** Run `git fetch origin --quiet`, then compare the current branch to its remote (`git rev-list --left-right --count HEAD...origin/<branch>`). If behind, resolve that before planning.
2. **Read `AGENT_SKILL.md`** in this repo's root for ownership boundaries (added 2026-07-06 — this repo had none before).
3. **This is a pure static Pages deployment** (no build step, no D1/R2/KV/Worker bindings). Don't add backend logic here without checking whether it belongs in `xhalo-buddhist-api` instead.
4. **If the task could affect another repo**, check the global cross-repo registry at `C:\Users\ranbe\Documents\Github\xhalo-ai-workflow\docs\global-architecture\`. Treat it as a snapshot, not a live source.

## Known relationships for this repo
None confirmed as of 2026-07-06 — no live calls to `xhalo-buddhist-api` or `xhalo-buddhist-data` found in source.

## After the change
Update this repo's `AGENT_SKILL.md` and the global registry above if ownership, deployment, or Cloudflare mapping changed.
