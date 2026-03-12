import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArtworkCard } from '@/components/shared/artwork-card';
import { AvatarCircle } from '@/components/shared/avatar-circle';
import { FlashMessage } from '@/components/shared/flash-message';
import { FormButton } from '@/components/shared/form-button';
import { NoticeCard } from '@/components/shared/notice-card';
import { isValidLocale } from '@/i18n/config';
import { getAuthState } from '@/lib/auth';
import { getArtistById, getArtistFollowState, listArtistArtworks } from '@/lib/data';
import { toggleFollowAction } from './actions';

export default async function ArtistRecordPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale, id } = await params;
  if (!isValidLocale(locale)) notFound();

  const artist = await getArtistById(id);
  if (!artist) notFound();

  const [auth, artworks, followState, sp] = await Promise.all([
    getAuthState(),
    listArtistArtworks(id),
    getArtistFollowState(id),
    searchParams,
  ]);

  const error = typeof sp.error === 'string' ? sp.error : undefined;
  const displayName = artist.display_name ?? 'Unknown artist';

  const canFollow = Boolean(auth.user && auth.user.id !== id);
  const isFollowing = Boolean(followState.viewerFollows);

  return (
    <div className="container-shell py-8 md:py-12">
      <div className="mb-6">
        <Link href={`/${locale}/artists`} className="button-secondary">
          {locale === 'ru' ? 'Назад к художникам' : 'Back to artists'}
        </Link>
      </div>

      <div className="mb-6">
        <FlashMessage message={error} variant="error" />
      </div>

      <section className="panel panel-glow grid gap-8 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-8">
        <div>
          <span className="pill">Artist record</span>
          <div className="mt-5 flex items-start gap-5">
            <AvatarCircle src={artist.avatar_url} name={displayName} size="xl" className="shrink-0" />
            <div>
              <h1 className="font-display text-6xl leading-none tracking-[0.08em] md:text-8xl">{displayName}</h1>
              <p className="mt-4 text-sm uppercase tracking-[0.16em] text-white/60">
                {[artist.city, artist.country].filter(Boolean).join(', ') || '—'} / {artist.style || 'Graffiti'}
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/76 md:text-lg">
            {artist.bio || (locale === 'ru' ? 'Автор пока не добавил описание профиля.' : 'The artist has not added a profile description yet.')}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {canFollow ? (
              <form action={toggleFollowAction.bind(null, locale, id)}>
                <FormButton pendingLabel={locale === 'ru' ? 'Сохраняем…' : 'Saving…'}>
                  {isFollowing ? (locale === 'ru' ? 'Отписаться' : 'Unfollow') : locale === 'ru' ? 'Подписаться' : 'Follow'}
                </FormButton>
              </form>
            ) : null}
            <Link href={`/${locale}/archive?q=${encodeURIComponent(displayName)}`} className="button-secondary">
              {locale === 'ru' ? 'Работы автора в архиве' : 'Find in archive'}
            </Link>
          </div>
        </div>

        <aside className="grid gap-4 md:grid-cols-3 md:content-start">
          {[
            [String(artist.approved_count ?? 0), locale === 'ru' ? 'Опубликовано' : 'Published'],
            [String(artist.pending_count ?? 0), locale === 'ru' ? 'На модерации' : 'Pending'],
            [String(artist.followers_count ?? followState.followersCount ?? 0), locale === 'ru' ? 'Подписчики' : 'Followers'],
          ].map(([value, label]) => (
            <article key={label} className="rounded-3xl border border-white/10 bg-white/3 p-5 text-center">
              <p className="font-display text-5xl tracking-[0.08em]">{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/55">{label}</p>
            </article>
          ))}
        </aside>
      </section>

      <section className="mt-8">
        <div className="mb-4">
          <span className="pill">Works</span>
          <h2 className="mt-4 font-display text-5xl tracking-[0.08em] md:text-6xl">
            {locale === 'ru' ? 'Опубликованные работы автора' : 'Published works'}
          </h2>
        </div>

        {artworks.length > 0 ? (
          <div className="grid-shell md:grid-cols-3">
            {artworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} locale={locale} />
            ))}
          </div>
        ) : (
          <NoticeCard
            title={locale === 'ru' ? 'Пока нет опубликованных работ' : 'No published works yet'}
            text={
              locale === 'ru'
                ? 'После одобрения работ в модерации они появятся на этой странице автоматически.'
                : 'Approved works will appear on this page automatically after moderation.'
            }
            variant="info"
          />
        )}
      </section>
    </div>
  );
}
