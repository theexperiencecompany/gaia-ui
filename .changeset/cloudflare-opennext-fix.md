---
"@heygaia/ui": patch
---

Fix Cloudflare deploy: install `@opennextjs/cloudflare` and `wrangler`, and guard the dev init hook in `next.config.ts` so it no longer crashes `next build` in CI.
