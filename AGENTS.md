# AGENTS.md — mourning-therapy

## Project overview
Next.js 15 App Router (React 18), Persian RTL therapy/embodiment website. No TypeScript — plain JSX. No tests, no CI.

## Commands
| Command | Action |
|---|---|
| `npm run dev` | Dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | `next lint` (ESLint) |

## Path alias
`@/*` → `./src/*` (configured in `jsconfig.json`)

## Architecture
- `src/app/[route]/page.jsx` → imports container from `src/containers/[Route]` → composes page sections from `src/components/pages/[route]/`
- Layout (`src/app/layout.jsx`) wraps all pages with `<Header />` + `<Footer />` (both client components)
- `src/lib/blog.js` — static blog post data (6 posts, no CMS or MDX); `generateStaticParams` used for SSG

## Routes
| Path | Type | Container |
|---|---|---|
| `/` | Home | `src/containers/Home` |
| `/about` | Static | `src/containers/About` |
| `/services?type=individual\|couples\|family` | Client (+ searchParams) | `src/containers/Services` |
| `/blog` | Static | Inline in page (no container) |
| `/blog/[slug]` | SSG | Inline in page |
| `/contact` | Static | `src/containers/contact` |

## Tailwind quirks
- Custom colors: `milk`, `brown`, `black`, `white`, `cardbg`, `darkBrown`, `line`, `textWhite`, `side`, `textmuted`, `mobilebg`, `sand`
- Font families: `font-Yeseva`, `font-jakarta`, `font-vazir` — all mapped to same local font variable (`--font-vazir-matn`)
- `md` breakpoint overridden to **998px** (not the default 768px)
- Background utilities: `bg-1` through `bg-6`, `footer-bg` (defined in `globals.css` via Tailwind `@layer utilities`)

## Important gotchas
- `services` pages reads `searchParams` as `async` (Next.js 15 convention) — use `const { type } = await searchParams`
- Blog posts are **not** in `contonts/` (that dir is unused/deprecated); content lives in `src/lib/blog.js`
- `install.bat` installs "runflare" CLI — unrelated to the Next.js app (infra tool)
- ESLint uses `next/core-web-vitals` config only; `eslint-config-next` 13.4.19 (may be outdated vs Next 15)
- Contact form uses Formik + Yup with Iranian phone validation (`/^(\+98|0098|98|0)?9[0-9]{9}$/`)
- No CSS modules; all styles via Tailwind + `globals.css`

## Unused content
- `contonts/` directory (markdown files) — **not read by the app**, content is hardcoded in JS
