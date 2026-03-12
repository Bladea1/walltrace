create extension if not exists pgcrypto;

do $$ begin
  create type public.artwork_status as enum ('pending', 'approved', 'rejected');
exception
  when duplicate_object then null;
end $$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  display_name text,
  username text unique,
  bio text,
  city text,
  country text,
  style text,
  avatar_url text,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.artworks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  slug text not null unique,
  author_name text not null,
  location_name text not null,
  created_year text not null,
  style text not null,
  description text not null,
  tags text[] not null default '{}',
  image_path text,
  image_url text,
  status public.artwork_status not null default 'pending',
  moderation_note text,
  locale text not null default 'ru',
  approved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  artwork_id uuid not null references public.artworks(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.likes (
  user_id uuid not null references public.profiles(id) on delete cascade,
  artwork_id uuid not null references public.artworks(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, artwork_id)
);

create table if not exists public.favorites (
  user_id uuid not null references public.profiles(id) on delete cascade,
  artwork_id uuid not null references public.artworks(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, artwork_id)
);

create table if not exists public.follows (
  follower_id uuid not null references public.profiles(id) on delete cascade,
  following_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, following_id)
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1))
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

drop trigger if exists artworks_set_updated_at on public.artworks;
create trigger artworks_set_updated_at
  before update on public.artworks
  for each row execute procedure public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.artworks enable row level security;
alter table public.comments enable row level security;
alter table public.likes enable row level security;
alter table public.favorites enable row level security;
alter table public.follows enable row level security;

drop policy if exists "Profiles are public to read" on public.profiles;

create policy "Profiles are public to read"
on public.profiles
for select
using (true);

drop policy if exists "Users can update own profile" on public.profiles;

create policy "Users can update own profile"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "Users can insert own profile" on public.profiles;

create policy "Users can insert own profile"
on public.profiles
for insert
with check (auth.uid() = id);

drop policy if exists "Public can read approved artworks" on public.artworks;

create policy "Public can read approved artworks"
on public.artworks
for select
using (
  status = 'approved'
  or auth.uid() = user_id
  or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

drop policy if exists "Authenticated users can insert own artworks" on public.artworks;

create policy "Authenticated users can insert own artworks"
on public.artworks
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Owners can update pending artworks, admins can update any" on public.artworks;

create policy "Owners can update pending artworks, admins can update any"
on public.artworks
for update
to authenticated
using (
  (auth.uid() = user_id and status = 'pending')
  or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
)
with check (
  (auth.uid() = user_id)
  or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

drop policy if exists "Owners can delete pending artworks, admins can delete any" on public.artworks;

create policy "Owners can delete pending artworks, admins can delete any"
on public.artworks
for delete
to authenticated
using (
  (auth.uid() = user_id and status = 'pending')
  or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

drop policy if exists "Public can read comments on approved artworks" on public.comments;

create policy "Public can read comments on approved artworks"
on public.comments
for select
using (true);

drop policy if exists "Authenticated users can insert own comments" on public.comments;

create policy "Authenticated users can insert own comments"
on public.comments
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Public can read likes" on public.likes;

create policy "Public can read likes"
on public.likes
for select
using (true);

drop policy if exists "Authenticated users can manage own likes" on public.likes;

create policy "Authenticated users can manage own likes"
on public.likes
for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Public can read favorites" on public.favorites;

create policy "Public can read favorites"
on public.favorites
for select
using (true);

drop policy if exists "Authenticated users can manage own favorites" on public.favorites;

create policy "Authenticated users can manage own favorites"
on public.favorites
for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Public can read follows" on public.follows;

create policy "Public can read follows"
on public.follows
for select
using (true);

drop policy if exists "Authenticated users can manage own follows" on public.follows;

create policy "Authenticated users can manage own follows"
on public.follows
for all
to authenticated
using (auth.uid() = follower_id)
with check (auth.uid() = follower_id);


create table if not exists public.history_entries (
  id uuid primary key default gen_random_uuid(),
  locale text not null default 'ru' check (locale in ('ru', 'en')),
  era_label text,
  year_label text not null,
  title text not null,
  body text not null,
  accent text,
  sort_order integer not null default 1,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.news_posts (
  id uuid primary key default gen_random_uuid(),
  locale text not null default 'ru' check (locale in ('ru', 'en')),
  slug text not null unique,
  category text,
  title text not null,
  excerpt text,
  body text not null,
  cover_image_url text,
  is_published boolean not null default true,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  locale text not null default 'ru' check (locale in ('ru', 'en')),
  slug text not null unique,
  title text not null,
  city text,
  venue text,
  summary text,
  body text,
  starts_at timestamptz not null,
  ends_at timestamptz,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists history_entries_set_updated_at on public.history_entries;
create trigger history_entries_set_updated_at
  before update on public.history_entries
  for each row execute procedure public.set_updated_at();

drop trigger if exists news_posts_set_updated_at on public.news_posts;
create trigger news_posts_set_updated_at
  before update on public.news_posts
  for each row execute procedure public.set_updated_at();

drop trigger if exists events_set_updated_at on public.events;
create trigger events_set_updated_at
  before update on public.events
  for each row execute procedure public.set_updated_at();

alter table public.history_entries enable row level security;
alter table public.news_posts enable row level security;
alter table public.events enable row level security;

drop policy if exists "Public can read published history entries" on public.history_entries;
create policy "Public can read published history entries"
on public.history_entries
for select
using (
  is_published = true
  or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

drop policy if exists "Admins manage history entries" on public.history_entries;
create policy "Admins manage history entries"
on public.history_entries
for all
to authenticated
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
)
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

drop policy if exists "Public can read published news" on public.news_posts;
create policy "Public can read published news"
on public.news_posts
for select
using (
  is_published = true
  or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

drop policy if exists "Admins manage news posts" on public.news_posts;
create policy "Admins manage news posts"
on public.news_posts
for all
to authenticated
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
)
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

drop policy if exists "Public can read published events" on public.events;
create policy "Public can read published events"
on public.events
for select
using (
  is_published = true
  or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

drop policy if exists "Admins manage events" on public.events;
create policy "Admins manage events"
on public.events
for all
to authenticated
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
)
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);
