<img width="170" height="170" alt="untitled" src="https://github.com/user-attachments/assets/df0f6e50-4e45-4118-8925-4f9230ac3093" />

# GAIA UI - Component Registry

[![Status](https://img.shields.io/badge/Status-Beta-00ba6d)](https://ui.heygaia.io) [![Documentation](https://img.shields.io/badge/Docs-00bbff?style=flat&logo=gitbook&logoColor=white)](https://ui.heygaia.io) [![Latest Release](https://img.shields.io/github/v/release/theexperiencecompany/ui?color=00bbff)](https://github.com/theexperiencecompany/ui/releases)

[![Contributors](https://img.shields.io/github/contributors/theexperiencecompany/ui)](https://github.com/theexperiencecompany/ui/graphs/contributors) [![Open Issues](https://img.shields.io/github/issues/theexperiencecompany/ui)](https://github.com/theexperiencecompany/ui/issues) [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

[![Discord](https://discord-live-members-count-badge.vercel.app/api/discord-members?guildId=585464664650022914&color=5c6af3&label=Discord)](https://discord.heygaia.io) [![Twitter Follow](https://img.shields.io/twitter/follow/trygaia?style=social)](https://x.com/intent/user?screen_name=trygaia)

A collection of production-ready UI components designed specifically for building AI assistants and chatbots. These are the components we use at GAIA, now available for anyone building conversational interfaces.

<a href="https://ui.heygaia.io">
<img width="170" alt="button" src="https://github.com/user-attachments/assets/792a5450-d07f-44aa-a859-38d822f95f81" />
</a>


## Why This Library?

Building a great chat or assistant interface requires more than just generic UI components. We've spent countless hours refining these components to handle the unique challenges of conversational UIs.

Instead of reinventing the wheel, use the same battle-tested components that power GAIA.

### Our Philosophy

**Quality Over Quantity** - We focus on shipping production-ready components that solve real problems. Each component is:

- ✅ Battle-tested in production at GAIA
- ✅ Designed to handle edge cases and real-world scenarios
- ✅ Accessible, responsive, and performant
- ✅ Solving problems better than existing alternatives

You won't find generic components that duplicate what's already available. If we're shipping it, it's because we use it in production and it adds genuine value to the ecosystem.

## Getting Started

All components are compatible with the `shadcn` CLI, making installation effortless:

```bash
npx shadcn@latest add https://ui.heygaia.io/r/navbar-menu.json
```

Or add individual components:

```bash
npx shadcn@latest add https://ui.heygaia.io/r/raised-button.json
```

### Base Components

This registry uses standard shadcn/ui base components. Install them separately:

```bash
npx shadcn@latest add button tooltip avatar dropdown-menu popover skeleton
```

## Documentation

- **[Component Docs](https://ui.heygaia.io)** - Live examples and API reference
- **[Contributing Guide](./REGISTRY.md)** - Complete guide for adding components
- **[Roadmap](./ROADMAP.md)** - See what's coming next

## Current Status

GAIA UI is in **beta**. We're actively migrating components from our internal GAIA codebase, replacing HeroUI with shadcn/ui for better compatibility and smaller bundle sizes. The library is stable and used in production, but APIs may change as we refine components before v1.0.

[View detailed roadmap →](./ROADMAP.md)

## Community & Support

Join our growing community of users and contributors:

- <img src="https://cdn.simpleicons.org/discord/5865F2" alt="Discord" width="16" /> &nbsp;**[Discord](https://discord.heygaia.io)** — Chat with the team and other users.
- <img src="https://cdn.simpleicons.org/x/ffffff" alt="Twitter" width="16" /> &nbsp;**[Twitter](https://twitter.com/trygaia)** — Get the latest news and updates.
- <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" width="16" /> &nbsp;**[GitHub](https://github.com/theexperiencecompany/gaia-ui)** — Report issues and contribute.

## Contributing

<a href="https://github.com/theexperiencecompany/ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=theexperiencecompany/ui" />
</a>

We welcome contributions! Whether you're fixing bugs, improving documentation, or adding new components, we'd love your help.

**[Read the Contributing Guide →](./REGISTRY.md)**

Quick start for contributors:

1. Fork the repository
2. Create your component in `registry/new-york/ui/`
3. Add entry to `registry.json` and run `pnpm run registry:build`
4. Test locally with `npx shadcn@latest add http://localhost:3000/r/[component-name].json`
5. Submit a pull request

### Development

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm run dev

# Build registry
pnpm run registry:build

# Type check
pnpm run type
```

## Built With

- **Next.js 15** - For the documentation and registry
- **Tailwind CSS v4** - For styling
- **TypeScript** - For type safety
- **Radix UI** - For accessible primitives
- **Framer Motion** - For animations
- **shadcn CLI** - For component installation

## Star History

<a href="https://www.star-history.com/#theexperiencecompany/ui&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=theexperiencecompany/ui&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=theexperiencecompany/ui&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=theexperiencecompany/ui&type=date&legend=top-left" />
 </picture>
</a>

## License

MIT License - feel free to use these components in your projects!

---

<div align="center">

Made with ❤️ by
[![The Experience Company](https://img.shields.io/badge/The%20Experience%20Company-121212?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOTE3IDI1OTYuMjIiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE2MjIuNDQsMTE0MC44MmMtMTcxLjM2LDExNi43Ny0yMTQuNzcsMTM5Ljc0LTI1MC41MSwxOTEuMTktODguNzgsMTI3Ljc4LTk2LjE4LDI3MS45LTkyLjAxLDM1OS42NiwxLjM5LDI3OC44MS00LjY3LDU1MC4xNi0zLjI4LDgyOC45NiwzNDUuNjYtMTQ0LjQ4LDc3NS40OS0zOTcuMDgsMTExNy41LTgzOS45Myw2OC4xMS04OC4xOSw3NjQuMjktOTc0LjMyLDQzNC43Ni0xNDE0LjE0QzI2OTUuMDIsODcuODYsMjQ3Mi4xNyw5LjcxLDIyNTQuMTMsMS41NCwxMzI2Ljc5LTMzLjIsNDg3Ljc3LDUyNS40NywxNTEuOTUsMTExMi4yM2MtLjY0LDEuMTEtMS41NiwyLjczLTIuNzUsNC44Mi01Ni4zNSw5OS4zOS0yMjAuNzIsMzg5LjM2LTExMy44OSw1NDUuMjIsNTMuOTUsNzguNywxNTYuNzgsOTMuNjQsMTc2LjI5LDk2LjQ3LDExMi4zOCwxNi4zMywyMDUuNDUtMzUuNjEsMzE4LjQzLTEwMC45NywxNDguMjctODUuNzcsMjIyLjYzLTEyOC4yNSwyMjMuNjYtMTI4LjkzLDExMC44LTczLjAzLDI5Mi40NS0xMzYuMzUsNDY5LjU5LTI2OS43LjI5LS4yMi01LjQ1LDMuMjctMTYuMzMsOS43OS0xNi43NiwxMC4wNC0zMDguNjksMTE2LjYzLTM5Mi42OCwxNzUuMDYtMTM4LjQ4LDk2LjM0LTUxMC40LDE2Ny44LTU3NC44NSw0OS4zNC02OS44My0xMjguMzMsMTc5Ljg1LTQ1Ni4xOSwyNTguODQtNTYwLjgyLjgxLTEuMDcsNy42Ny0xMC4wNSwxNC40Ny0xOC44NSwzMDguMDItMzk3Ljg0LDcwNC4zNS01NTAuNjgsNzc1LjgzLTU3Ny4yLDM4NC44Mi0xNDIuNzksOTM4LjgxLTE5Ny4xMiwxMDIwLjExLTIxLjE5LDc0LjQ0LDE2MS4xLTE0Mi41OSw0MjAuNDMtMzIxLjkxLDU1OC42OCIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcyNS4yNiwxNjEyLjcyYy0xMDUuMiw1NC45NC0xOTUuMTQsODguMDYtMjQ3LjQyLDEwNS42NS0xNzYuMDYsNTkuMjUtMjMxLjc3LDMxLjk2LTIzOC4xNCwxMS4xNS04LjU1LTI3LjkxLDE4NS40MS05Ny45NiwyMDkuOTItMTA3LjUxLDc0LjMyLTI4LjkzLDk5LjQ5LTM2Ljc3LDE2My41Ny02NS4wOCw0NS4zMi0yMC4wMiwxNDIuNC02Ni4xNSwyNDMuNTItMTQ0LjA1LDEwLjk1LTguNDMsMjAuMDctMTUuMzgsMzIuMjItMjUuOTIsNDAuMTEtMzQuNzcsOTAuNzItODEuMzksMTMyLjczLTE1OC4zNCwzNy44My02OS4yOSw0OS45My0xNjUuODMsNTQuMDUtMjUyLjUyLDQuMDktLjk5LDIuNjIsNy40MiwyLjk2LDExLjQ0LDcuMjYsODcuNDksMTQuODQsMjM4LjU2LDk3LjU3LDI0NS42OCw2MS42Miw1LjMxLDExMy4xNi0yNy42OSwxNjguNTQtNTMuNzcsMi4yMS0xLjA0LDcuNi00LjU5LDcuMzIsMS40Ny03Mi4wOCw0OC4wMS0xMjAuMzcsOTQuODEtMTQ5LjQ3LDEyNi40Ni0zOS4zOCw0Mi44Mi01Ny43Myw3My4yNi02OS4wMiw5NS4xOS01Ljk5LDExLjY0LTE2LjM5LDMyLjEtMjQuODIsNjAuMzctMjUuMzIsODQuOTgtMjkuMTIsMjI4LjQyLTI5LjEsMjM0LjkxLDAsMCwwLC4xNi0uMDQuMTctMS41Ni4yOS0yMy43OS0yMjQuNi04My45NC0yNDMuNzMtMTIuMjgtMy45MS0yNy44NS0uNzItMzEuNDkuNzUtMTQuMjEsNS43MS0xMTAuODIsOTAuNzYtMjM4Ljk3LDE1Ny42OFoiLz4KPC9zdmc+)](https://experience.heygaia.io)

<p>
  <a href="https://discord.heygaia.io">
    <img src="https://img.shields.io/badge/-Discord-5865F2?style=flat&logo=discord&logoColor=white" alt="Discord" />
  </a>
  <a href="https://twitter.com/trygaia">
    <img src="https://img.shields.io/twitter/follow/trygaia?style=social" alt="Twitter" />
  </a>
  <a href="https://github.com/theexperiencecompany/gaia-ui">
    <img src="https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>
</div>
