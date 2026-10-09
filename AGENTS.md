# AGENTS.md — mourning-therapy

## Project overview
Next.js 15 App Router (React 18), Bilingual (Persian RTL default + English LTR) therapy/embodiment website. No TypeScript — plain JSX. No tests, no CI.

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
- `src/lib/blog.js` — fetches blog data from FastAPI backend (`/blogs/`, `/blogs/by-slug/{slug}`); exports `getAllPosts(count?)` and `getPostBySlug(slug)`; ISR with `revalidate: 3600`; content is markdown

## Routes
| Path | Type | Container |
|---|---|---|
| `/` | Home | `src/containers/Home` |
| `/about` | Static | `src/containers/About` |
| `/services?type=individual\|couples\|family` | Client (+ searchParams) | `src/containers/Services` |
| `/blog` | ISR | Inline in page (no container) |
| `/blog/[slug]` | ISR | Inline in page |
| `/contact` | Static | `src/containers/contact` |

## Tailwind quirks
- Custom colors: `milk`, `brown`, `black`, `white`, `cardbg`, `darkBrown`, `line`, `textWhite`, `side`, `textmuted`, `mobilebg`, `sand`
- Font families: `font-Yeseva`, `font-jakarta`, `font-vazir` — all mapped to same local font variable (`--font-vazir-matn`)
- `md` breakpoint overridden to **998px** (not the default 768px)
- Background utilities: `bg-1` through `bg-6`, `footer-bg` (defined in `globals.css` via Tailwind `@layer utilities`)

## Important gotchas
- `services` pages reads `searchParams` as `async` (Next.js 15 convention) — use `const { type } = await searchParams`
- Blog posts are **not** in `contonts/` (that dir is unused/deprecated); content fetched from `API_URL` (set in `.env.local`) via `src/lib/blog.js`
- `install.bat` installs "runflare" CLI — unrelated to the Next.js app (infra tool)
- ESLint uses `next/core-web-vitals` config only; `eslint-config-next` 13.4.19 (may be outdated vs Next 15)
- Contact form uses Formik + Yup with Iranian phone validation (`/^(\+98|0098|98|0)?9[0-9]{9}$/`)
- No CSS modules; all styles via Tailwind + `globals.css`
- Blog content is markdown rendered with `react-markdown` + `remark-gfm` (XSS-safe, no raw HTML passed through)
- `next.config.js` has `images.remotePatterns` pointing to `API_URL` host for banner images
- Home page passes `count=4` to API (`getAllPosts(4)`), blog pages get all posts (`getAllPosts()`)

## i18n (fa / en)
- Persian is the default and lives at `/…`; English lives at `/en/…`. `src/middleware.js` rewrites `/x` → `/fa/x` and 308-redirects `/fa/x` → `/x`. All pages are under `src/app/[locale]/`.
- Strings live in `src/i18n/dictionaries/{fa,en}.js` (same shape — add keys to both). Server components call `getDictionary(locale)` (pass `locale` down as a prop); client components use `useI18n()` → `{ locale, t, path, rtl }`. Never import `dictionaries.js` from a client component.
- Build internal links with `path("/x")` (client) or `localePath(locale, "/x")` (server) from `src/i18n/config.js`.
- Layout is direction-aware: use logical Tailwind classes (`ms-`, `ps-`, `start-`, `end-`, `border-s`, `text-start`), not `mr-`/`pr-`/`right-`/`text-right`.
- Blog API calls take a locale (`getAllPosts(count, locale)`, `getPostBySlug(slug, locale)`) and send `?lang=`. English lists only show articles that have an English translation; `/en/blog/<slug>` redirects to `/en/blog` when there is none.
- Home testimonials come from the API (`getTestimonials(locale)` in `src/lib/testimonials.js`, editable in the admin); the copy in the dictionaries is only a fallback when the API returns none.
