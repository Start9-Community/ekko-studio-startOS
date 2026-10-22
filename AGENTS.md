# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

- `passwordBootstrap` in `startos/utils.ts` drives upstream's `reset-default-login` CLI and its `/api/auth/*` endpoints, so an image bump can break it without a type error. After any bump, run **Set Admin Password** on a box and confirm the new password logs in and both the previous one and upstream's default are rejected.
