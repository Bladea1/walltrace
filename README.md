# WALLTRACE v7 — final course-ready build

WALLTRACE is a bilingual graffiti archive and social platform built for a course project with room for real public use after the defense.

## What is in this version
- bilingual public platform: RU / EN
- archive of approved artworks
- artwork detail page with likes, favorites, comments, and related works
- artist catalog and artist pages with follow/unfollow
- profile editing with avatar upload
- artwork submission with moderation flow
- admin moderation dashboard with counters
- history museum page with curated eras, figures, reading room, and timeline entries from the database
- news and events sections from the database
- admin creation pages for history, news, and events
- publish / unpublish and delete actions in admin sections
- ready for free deployment on Vercel + Supabase

## Stack
- Next.js
- TypeScript
- Tailwind CSS v4
- Supabase Auth + Database + Storage
- Vercel

## Local run
```bash
npm install
npm run dev
```
Open `http://localhost:3000`

## Supabase setup
Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Then in Supabase SQL Editor run:
1. `supabase/schema.sql`
2. `supabase/storage.sql`
3. optional: `supabase/seed.sql`

## Buckets required
After `storage.sql`, the project expects these storage buckets:
- `artworks`
- `avatars`

## First admin user
After registering on the site, run this SQL in Supabase:

```sql
update public.profiles
set role = 'admin'
where email = 'YOUR_EMAIL';
```

## Important routes
### Public
- `/ru`
- `/ru/archive`
- `/ru/artists`
- `/ru/history`
- `/ru/news`
- `/ru/events`

### Auth / profile
- `/ru/login`
- `/ru/register`
- `/ru/profile`
- `/ru/submit`

### Admin
- `/ru/admin`
- `/ru/admin/history`
- `/ru/admin/news`
- `/ru/admin/events`

## Deployment on Vercel
1. push the project to GitHub
2. import the repo into Vercel
3. add the same environment variables from `.env.local`
4. in Supabase Auth URL settings add your Vercel production URL and preview URL patterns
5. redeploy

## Notes for the defense
For the best presentation, populate the project with:
- 8–12 artworks
- 4–6 artist profiles
- 6–10 history timeline entries
- 4–6 news posts
- 3–5 event items
