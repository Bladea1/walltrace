import {
  artists as mockArtists,
  eventItems as mockEvents,
  featuredArtworks,
  historyEntries as mockHistoryEntries,
  newsPosts as mockNewsPosts,
} from './mock-data';
import { createServerSupabaseClient } from './supabase/server';

export type ArtworkRecord = {
  id: string;
  user_id?: string | null;
  slug: string;
  title: string;
  author_name: string | null;
  location_name: string | null;
  created_year: string | null;
  style: string | null;
  description: string | null;
  image_url: string | null;
  image_path?: string | null;
  status: string | null;
  tags?: string[] | null;
  locale?: string | null;
  moderation_note?: string | null;
  created_at?: string | null;
};

export type ArtistRecord = {
  id: string;
  display_name: string | null;
  username?: string | null;
  city: string | null;
  country?: string | null;
  style: string | null;
  bio: string | null;
  avatar_url?: string | null;
  role?: string | null;
  created_at?: string | null;
  approved_count?: number;
  pending_count?: number;
  followers_count?: number;
};

export type CommentRecord = {
  id: string;
  artwork_id: string;
  user_id: string;
  body: string;
  created_at: string;
  author_name: string;
};

export type ArtworkEngagement = {
  likesCount: number;
  favoritesCount: number;
  commentsCount: number;
  viewerHasLiked: boolean;
  viewerHasFavorited: boolean;
};

export type HistoryEntryRecord = {
  id: string;
  locale: string;
  era_label: string | null;
  year_label: string;
  title: string;
  body: string;
  accent: string | null;
  sort_order: number;
  is_published: boolean;
  created_at?: string | null;
};

export type NewsPostRecord = {
  id: string;
  locale: string;
  slug: string;
  category: string | null;
  title: string;
  excerpt: string | null;
  body: string;
  cover_image_url: string | null;
  is_published: boolean;
  published_at: string | null;
  created_at?: string | null;
};

export type EventRecord = {
  id: string;
  locale: string;
  slug: string;
  title: string;
  city: string | null;
  venue: string | null;
  summary: string | null;
  body: string | null;
  starts_at: string;
  ends_at?: string | null;
  is_published: boolean;
  created_at?: string | null;
};

export async function listApprovedArtworks(options?: {
  style?: string;
  query?: string;
  limit?: number;
}) {
  const { style, query, limit = 12 } = options ?? {};
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return filterMockArtworks({ style, query }).slice(0, limit);
  }

  let request = supabase
    .from('artworks')
    .select('*')
    .eq('status', 'approved')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (style) {
    request = request.ilike('style', `%${style}%`);
  }

  if (query) {
    const safe = escapeLike(query);
    request = request.or(
      `title.ilike.%${safe}%,author_name.ilike.%${safe}%,location_name.ilike.%${safe}%,description.ilike.%${safe}%`
    );
  }

  const { data, error } = await request;

  if (error || !data) {
    return filterMockArtworks({ style, query }).slice(0, limit);
  }

  if (data.length === 0) {
    return [];
  }

  return data as ArtworkRecord[];
}

export async function getArtworkBySlug(slug: string) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return featuredArtworks.find((item) => item.slug === slug) ?? null;
  }

  const { data, error } = await supabase
    .from('artworks')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'approved')
    .maybeSingle();

  if (error) {
    return featuredArtworks.find((item) => item.slug === slug) ?? null;
  }

  return (data as ArtworkRecord | null) ?? null;
}

export async function listRelatedArtworks(current: ArtworkRecord, limit = 3) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return featuredArtworks.filter((item) => item.slug !== current.slug).slice(0, limit);
  }

  let request = supabase
    .from('artworks')
    .select('*')
    .eq('status', 'approved')
    .neq('slug', current.slug)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (current.style) {
    request = request.ilike('style', `%${current.style}%`);
  }

  const { data, error } = await request;

  if (error || !data || data.length === 0) {
    return featuredArtworks.filter((item) => item.slug !== current.slug).slice(0, limit);
  }

  return data as ArtworkRecord[];
}

export async function listArchiveStyles() {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return uniqueStyles(featuredArtworks);
  }

  const { data, error } = await supabase
    .from('artworks')
    .select('style')
    .eq('status', 'approved')
    .order('created_at', { ascending: false })
    .limit(100);

  if (error || !data || data.length === 0) {
    return uniqueStyles(featuredArtworks);
  }

  return Array.from(
    new Set(
      data
        .map((item) => item.style)
        .filter((item): item is string => Boolean(item))
        .map((item) => item.trim())
    )
  ).slice(0, 10);
}

export async function listArtists(): Promise<ArtistRecord[]> {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return mockArtists.map((artist, index) => ({
      id: artist.id,
      display_name: artist.display_name ?? null,
      city: artist.city ?? null,
      country: null,
      style: artist.style ?? null,
      bio: artist.bio ?? null,
      avatar_url: null,
      approved_count: [2, 1, 1][index] ?? 0,
      followers_count: [18, 12, 9][index] ?? 0,
      pending_count: 0,
    }));
  }

  const { data: profiles, error } = await supabase
    .from('profiles')
    .select('id, display_name, username, city, country, style, bio, avatar_url, role, created_at')
    .order('created_at', { ascending: false })
    .limit(24);

  if (error || !profiles || profiles.length === 0) {
    return mockArtists.map((artist, index) => ({
      id: artist.id,
      display_name: artist.display_name ?? null,
      city: artist.city ?? null,
      country: null,
      style: artist.style ?? null,
      bio: artist.bio ?? null,
      avatar_url: null,
      approved_count: [2, 1, 1][index] ?? 0,
      followers_count: [18, 12, 9][index] ?? 0,
      pending_count: 0,
    }));
  }

  const userIds = profiles.map((item) => item.id);
  const [artworksRes, followsRes] = await Promise.all([
    supabase.from('artworks').select('user_id, status').in('user_id', userIds),
    supabase.from('follows').select('following_id').in('following_id', userIds),
  ]);

  const approvedMap = new Map<string, number>();
  const pendingMap = new Map<string, number>();
  const followersMap = new Map<string, number>();

  (artworksRes.data ?? []).forEach((row) => {
    if (row.status === 'approved') {
      approvedMap.set(row.user_id, (approvedMap.get(row.user_id) ?? 0) + 1);
    }
    if (row.status === 'pending') {
      pendingMap.set(row.user_id, (pendingMap.get(row.user_id) ?? 0) + 1);
    }
  });

  (followsRes.data ?? []).forEach((row) => {
    followersMap.set(row.following_id, (followersMap.get(row.following_id) ?? 0) + 1);
  });

  return profiles.map((profile) => ({
    ...profile,
    approved_count: approvedMap.get(profile.id) ?? 0,
    pending_count: pendingMap.get(profile.id) ?? 0,
    followers_count: followersMap.get(profile.id) ?? 0,
  })) as ArtistRecord[];
}

export async function getArtistById(id: string): Promise<ArtistRecord | null> {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    const fallback = mockArtists.find((item) => item.id === id) as (typeof mockArtists)[number] | undefined;

    if (!fallback) return null;

    return {
      id: fallback.id,
      display_name: fallback.display_name ?? null,
      city: fallback.city ?? null,
      country: null,
      style: fallback.style ?? null,
      bio: fallback.bio ?? null,
      avatar_url: null,
      approved_count: 0,
      pending_count: 0,
      followers_count: 0,
    };
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('id, display_name, username, city, country, style, bio, avatar_url, role, created_at')
    .eq('id', id)
    .maybeSingle();

  if (error || !profile) {
    return null;
  }

  const [artworksRes, followsRes] = await Promise.all([
    supabase.from('artworks').select('user_id, status').eq('user_id', id),
    supabase.from('follows').select('following_id').eq('following_id', id),
  ]);

  const approved_count = (artworksRes.data ?? []).filter((item) => item.status === 'approved').length;
  const pending_count = (artworksRes.data ?? []).filter((item) => item.status === 'pending').length;
  const followers_count = (followsRes.data ?? []).length;

  return {
    ...(profile as ArtistRecord),
    approved_count,
    pending_count,
    followers_count,
  };
}

export async function listArtistArtworks(userId: string) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return featuredArtworks.slice(0, 3);
  }

  const { data, error } = await supabase
    .from('artworks')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'approved')
    .order('created_at', { ascending: false });

  if (error || !data) {
    return [];
  }

  return data as ArtworkRecord[];
}

export async function getArtworkEngagement(artworkId: string, viewerId?: string | null): Promise<ArtworkEngagement> {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return {
      likesCount: 12,
      favoritesCount: 7,
      commentsCount: 2,
      viewerHasLiked: false,
      viewerHasFavorited: false,
    };
  }

  const [likesRes, favoritesRes, commentsRes, viewerLikeRes, viewerFavRes] = await Promise.all([
    supabase.from('likes').select('artwork_id', { count: 'exact', head: true }).eq('artwork_id', artworkId),
    supabase.from('favorites').select('artwork_id', { count: 'exact', head: true }).eq('artwork_id', artworkId),
    supabase.from('comments').select('artwork_id', { count: 'exact', head: true }).eq('artwork_id', artworkId),
    viewerId
      ? supabase.from('likes').select('artwork_id').eq('artwork_id', artworkId).eq('user_id', viewerId).maybeSingle()
      : Promise.resolve({ data: null } as { data: null }),
    viewerId
      ? supabase.from('favorites').select('artwork_id').eq('artwork_id', artworkId).eq('user_id', viewerId).maybeSingle()
      : Promise.resolve({ data: null } as { data: null }),
  ]);

  return {
    likesCount: likesRes.count ?? 0,
    favoritesCount: favoritesRes.count ?? 0,
    commentsCount: commentsRes.count ?? 0,
    viewerHasLiked: Boolean((viewerLikeRes as { data?: unknown }).data),
    viewerHasFavorited: Boolean((viewerFavRes as { data?: unknown }).data),
  };
}

export async function listArtworkComments(artworkId: string) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return [
      {
        id: 'comment-1',
        artwork_id: artworkId,
        user_id: 'mock-user',
        body: 'Сильная работа и хорошая подача контекста.',
        created_at: new Date().toISOString(),
        author_name: 'Archive Visitor',
      },
    ];
  }

  const { data, error } = await supabase
    .from('comments')
    .select('id, artwork_id, user_id, body, created_at, profiles(display_name)')
    .eq('artwork_id', artworkId)
    .order('created_at', { ascending: false });

  if (error || !data) {
    return [];
  }

  return data.map((item) => ({
    id: item.id,
    artwork_id: item.artwork_id,
    user_id: item.user_id,
    body: item.body,
    created_at: item.created_at,
    author_name:
      Array.isArray(item.profiles)
        ? item.profiles[0]?.display_name ?? 'User'
        : item.profiles?.display_name ?? 'User',
  })) as CommentRecord[];
}

export async function getArtistFollowState(artistId: string, viewerId?: string | null) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return { followersCount: 12, viewerFollows: false };
  }

  const [followersRes, viewerRes] = await Promise.all([
    supabase.from('follows').select('following_id', { count: 'exact', head: true }).eq('following_id', artistId),
    viewerId
      ? supabase.from('follows').select('following_id').eq('following_id', artistId).eq('follower_id', viewerId).maybeSingle()
      : Promise.resolve({ data: null } as { data: null }),
  ]);

  return {
    followersCount: followersRes.count ?? 0,
    viewerFollows: Boolean((viewerRes as { data?: unknown }).data),
  };
}

export async function listFavoriteArtworks(userId: string) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return featuredArtworks.slice(0, 2);
  }

  const { data: favorites, error } = await supabase
    .from('favorites')
    .select('artworks(*)')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error || !favorites) {
    return [];
  }

  return favorites
    .map((item) => (Array.isArray(item.artworks) ? item.artworks[0] : item.artworks))
    .filter(Boolean) as ArtworkRecord[];
}

export async function listHistoryEntries(locale: string) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return filterByLocale(mockHistoryEntries, locale) as HistoryEntryRecord[];
  }

  const { data, error } = await supabase
    .from('history_entries')
    .select('*')
    .eq('locale', locale)
    .eq('is_published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true });

  if (error || !data || data.length === 0) {
    return filterByLocale(mockHistoryEntries, locale) as HistoryEntryRecord[];
  }

  return data as HistoryEntryRecord[];
}

export async function listAdminHistoryEntries() {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return mockHistoryEntries as HistoryEntryRecord[];
  }

  const { data, error } = await supabase
    .from('history_entries')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error || !data) {
    return mockHistoryEntries as HistoryEntryRecord[];
  }

  return data as HistoryEntryRecord[];
}

export async function listNewsPosts(locale: string, limit = 8) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return filterByLocale(mockNewsPosts, locale).slice(0, limit) as NewsPostRecord[];
  }

  const { data, error } = await supabase
    .from('news_posts')
    .select('*')
    .eq('locale', locale)
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error || !data || data.length === 0) {
    return filterByLocale(mockNewsPosts, locale).slice(0, limit) as NewsPostRecord[];
  }

  return data as NewsPostRecord[];
}

export async function listAdminNewsPosts() {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return mockNewsPosts as NewsPostRecord[];
  }

  const { data, error } = await supabase
    .from('news_posts')
    .select('*')
    .order('published_at', { ascending: false });

  if (error || !data) {
    return mockNewsPosts as NewsPostRecord[];
  }

  return data as NewsPostRecord[];
}

export async function getNewsPostBySlug(locale: string, slug: string) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return (filterByLocale(mockNewsPosts, locale) as NewsPostRecord[]).find((item) => item.slug === slug) ?? null;
  }

  const { data, error } = await supabase
    .from('news_posts')
    .select('*')
    .eq('locale', locale)
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle();

  if (error || !data) {
    return (filterByLocale(mockNewsPosts, locale) as NewsPostRecord[]).find((item) => item.slug === slug) ?? null;
  }

  return data as NewsPostRecord | null;
}

export async function listEventItems(locale: string, limit = 8) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return filterByLocale(mockEvents, locale).slice(0, limit) as EventRecord[];
  }

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('locale', locale)
    .eq('is_published', true)
    .order('starts_at', { ascending: true })
    .limit(limit);

  if (error || !data || data.length === 0) {
    return filterByLocale(mockEvents, locale).slice(0, limit) as EventRecord[];
  }

  return data as EventRecord[];
}

export async function listAdminEventItems() {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return mockEvents as EventRecord[];
  }

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('starts_at', { ascending: true });

  if (error || !data) {
    return mockEvents as EventRecord[];
  }

  return data as EventRecord[];
}

export async function getEventBySlug(locale: string, slug: string) {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return (filterByLocale(mockEvents, locale) as EventRecord[]).find((item) => item.slug === slug) ?? null;
  }

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('locale', locale)
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle();

  if (error || !data) {
    return (filterByLocale(mockEvents, locale) as EventRecord[]).find((item) => item.slug === slug) ?? null;
  }

  return data as EventRecord | null;
}

function uniqueStyles(items: Array<{ style?: string | null }>) {
  return Array.from(
    new Set(items.map((item) => item.style).filter((item): item is string => Boolean(item)))
  ).slice(0, 10);
}

function escapeLike(value: string) {
  return value.replace(/[%_]/g, '').trim();
}

function filterMockArtworks({ style, query }: { style?: string; query?: string }) {
  return featuredArtworks.filter((item) => {
    const styleMatch = style ? item.style?.toLowerCase().includes(style.toLowerCase()) : true;
    const queryMatch = query
      ? [item.title, item.author_name, item.location_name, item.description].some((field) =>
          field?.toLowerCase().includes(query.toLowerCase())
        )
      : true;

    return styleMatch && queryMatch;
  });
}

function filterByLocale<T extends { locale?: string | null }>(items: T[], locale: string) {
  const exact = items.filter((item) => item.locale === locale);
  return exact.length > 0 ? exact : items;
}
