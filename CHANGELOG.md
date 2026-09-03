# @heygaia/ui

## 0.4.0

### Minor Changes

- [#23](https://github.com/theexperiencecompany/gaia-ui/pull/23) [`ada6bb3`](https://github.com/theexperiencecompany/gaia-ui/commit/ada6bb386f4393ce6cab030624424dc3b80b5c6a) Thanks [@aryanranderiya](https://github.com/aryanranderiya)! - Add `iphone-mockup` and `chat-demo` components.

  - `iphone-mockup`: a pixel-perfect iPhone Pro mockup with a Dynamic Island,
    side buttons, status bar (cellular / wifi / battery icons) and home
    indicator.
  - `chat-demo`: a single platform-aware component that renders authentic
    iMessage, WhatsApp, Slack, Discord and Telegram chat UIs — bubbles,
    headers, composers and hover states. Designed to drop inside
    `iphone-mockup`.

## 0.3.4

### Patch Changes

- [#15](https://github.com/theexperiencecompany/gaia-ui/pull/15) [`048f610`](https://github.com/theexperiencecompany/gaia-ui/commit/048f610ab24c29277814ae9606ffbcbebc6f7e49) Thanks [@aryanranderiya](https://github.com/aryanranderiya)! - Fix Cloudflare deploy: install `@opennextjs/cloudflare` and `wrangler`, and guard the dev init hook in `next.config.ts` so it no longer crashes `next build` in CI.

- [#17](https://github.com/theexperiencecompany/gaia-ui/pull/17) [`0bd1a10`](https://github.com/theexperiencecompany/gaia-ui/commit/0bd1a10da205906ce9058de5ecadb92236df2aad) Thanks [@aryanranderiya](https://github.com/aryanranderiya)! - Fix broken repository links in the README — the badges, contributors graph, and star-history chart all pointed to `theexperiencecompany/ui` instead of the correct repo `theexperiencecompany/gaia-ui`.
