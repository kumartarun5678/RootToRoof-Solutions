# RootToRoof Solutions

Next.js 14 (App Router), TypeScript, Tailwind CSS. No separate backend: the contact form posts to a Next.js API route (`src/app/api/inquiries/route.ts`) that validates and emails the inquiry.

## Run locally (Node 18.17+)
```
cd frontend && cp .env.example .env.local && npm install && npm run dev
```
Fill in `.env.local` with your real email, phone, location and social URLs. Anything left empty shows a placeholder or is hidden.

Without `INQUIRY_TO` / `SMTP_HOST`, inquiries are logged to the server console. To receive them by email set `INQUIRY_TO`, `INQUIRY_FROM`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`.

## Deploy
Needs a Node runtime (Vercel, a VPS, Docker, etc.) since the API route runs on the server. Set the env vars above in your host.

## Before launch
- Replace the placeholder Privacy Policy and Terms (legal review).
- Add rate limiting / CAPTCHA on `POST /api/inquiries` to reduce spam.
