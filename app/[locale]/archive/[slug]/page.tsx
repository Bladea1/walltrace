import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArtworkCard } from '@/components/shared/artwork-card';
import { FlashMessage } from '@/components/shared/flash-message';
import { FormButton } from '@/components/shared/form-button';
import { NoticeCard } from '@/components/shared/notice-card';
import { isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import {
  getArtworkBySlug,
  getArtworkEngagement,
  listArtworkComments,
  listRelatedArtworks,
} from '@/lib/data';
import { getAuthState } from '@/lib/auth';
import { formatDate, getSingleSearchParam } from '@/lib/utils';
import { createCommentAction, toggleFavoriteAction, toggleLikeAction } from './actions';

export default async function ArtworkRecordPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const artwork = await getArtworkBySlug(slug);

  if (!artwork) {
    notFound();
  }

  const [related, engagement, comments, authState, sp] = await Promise.all([
    listRelatedArtworks(artwork, 3),
    getArtworkEngagement(artwork.id),
    listArtworkComments(artwork.id),
    getAuthState(),
    searchParams,
  ]);

  const error = getSingleSearchParam(sp.error);
  const authorId = 'user_id' in artwork ? artwork.user_id : null;
<<<<<<< HEAD
const authorHref = authorId ? `/${locale}/artists/${authorId}` : null;
=======
  const authorHref = authorId ? `/${locale}/artists/${authorId}` : null;
>>>>>>> 79a5ba6cf827965ae447b20eac7da888d9156c3f
  return (
    <div className="container-shell py-8 md:py-12">
      <div className="mb-6">
        <Link href={`/${locale}/archive`} className="button-secondary">
          {dictionary.common.back}
        </Link>
      </div>

      <div className="mb-6">
        <FlashMessage message={error} variant="error" />
      </div>

      <section className="panel panel-glow overflow-hidden">
        {artwork.image_url ? (
          <div className="h-[320px] bg-cover bg-center md:h-[520px]" style={{ backgroundImage: `url(${artwork.image_url})` }} />
        ) : (
          <div className="h-[320px] bg-[linear-gradient(135deg,rgba(255,90,54,0.24),rgba(255,255,255,0.04))] md:h-[520px]" />
        )}

        <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-white/55">
              <span>{artwork.created_year || '—'}</span>
              <span>•</span>
              <span>{artwork.style || 'Graffiti'}</span>
              {artwork.created_at ? (
                <>
                  <span>•</span>
                  <span>{formatDate(artwork.created_at)}</span>
                </>
              ) : null}
            </div>

            <h1 className="mt-5 font-display text-6xl leading-none tracking-[0.08em] md:text-8xl">{artwork.title}</h1>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/62">
              {authorHref ? <Link href={authorHref} className="underline decoration-white/20 underline-offset-4">{artwork.author_name || 'Unknown author'}</Link> : artwork.author_name || 'Unknown author'} / {artwork.location_name || 'Unknown location'}
            </p>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/76 md:text-lg">
              {artwork.description || (locale === 'ru' ? 'Описание пока не добавлено.' : 'Description is not available yet.')}
            </p>

            {artwork.tags && artwork.tags.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {artwork.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/${locale}/archive?style=${encodeURIComponent(tag)}`}
                    className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/74 transition hover:bg-white/5"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="space-y-4">
            <article className="rounded-[24px] border border-white/10 bg-white/3 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-white/50">
                {locale === 'ru' ? 'Архивная карточка' : 'Archive record'}
              </p>
              <dl className="mt-4 grid gap-4 text-sm leading-7 text-white/72">
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-white/46">{locale === 'ru' ? 'Автор' : 'Author'}</dt>
                  <dd>{artwork.author_name || '—'}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-white/46">{locale === 'ru' ? 'Место' : 'Location'}</dt>
                  <dd>{artwork.location_name || '—'}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-white/46">{locale === 'ru' ? 'Год' : 'Year'}</dt>
                  <dd>{artwork.created_year || '—'}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-white/46">{locale === 'ru' ? 'Стиль' : 'Style'}</dt>
                  <dd>{artwork.style || 'Graffiti'}</dd>
                </div>
              </dl>
            </article>

            <article className="rounded-[24px] border border-white/10 bg-white/3 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-white/50">
                {locale === 'ru' ? 'Активность' : 'Engagement'}
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  [String(engagement.likesCount), locale === 'ru' ? 'Лайки' : 'Likes'],
                  [String(engagement.favoritesCount), locale === 'ru' ? 'Избранное' : 'Favorites'],
                  [String(engagement.commentsCount), locale === 'ru' ? 'Комментарии' : 'Comments'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/4 p-4 text-center">
                    <p className="font-display text-4xl tracking-[0.08em]">{value}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/55">{label}</p>
                  </div>
                ))}
              </div>

              {authState.user ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <form action={toggleLikeAction.bind(null, locale, slug, artwork.id)}>
                    <FormButton pendingLabel={locale === 'ru' ? 'Сохраняем…' : 'Saving…'} variant="secondary">
                      {engagement.viewerHasLiked ? (locale === 'ru' ? 'Убрать лайк' : 'Unlike') : locale === 'ru' ? 'Поставить лайк' : 'Like'}
                    </FormButton>
                  </form>
                  <form action={toggleFavoriteAction.bind(null, locale, slug, artwork.id)}>
                    <FormButton pendingLabel={locale === 'ru' ? 'Сохраняем…' : 'Saving…'} variant="secondary">
                      {engagement.viewerHasFavorited
                        ? locale === 'ru'
                          ? 'Убрать из избранного'
                          : 'Remove favorite'
                        : locale === 'ru'
                          ? 'В избранное'
                          : 'Add favorite'}
                    </FormButton>
                  </form>
                </div>
              ) : (
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {locale === 'ru'
                    ? 'Войди в аккаунт, чтобы ставить лайки, сохранять работу и оставлять комментарии.'
                    : 'Log in to like, favorite, and comment on this work.'}
                </p>
              )}
            </article>

            <NoticeCard
              title={locale === 'ru' ? 'Публичный статус' : 'Public status'}
              text={
                locale === 'ru'
                  ? 'Эта работа уже прошла модерацию и отображается в публичном архиве WALLTRACE.'
                  : 'This work has passed moderation and is now visible in the public WALLTRACE archive.'
              }
              variant="success"
            />
          </aside>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <article className="panel p-6 md:p-8">
          <span className="pill">Dialogue</span>
          <h2 className="mt-4 font-display text-5xl tracking-[0.08em] md:text-6xl">
            {locale === 'ru' ? 'Комментарии' : 'Comments'}
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/70">
            {locale === 'ru'
              ? 'Обсуждение помогает превратить архив в живую платформу, где опытные художники и новички видят реакцию на работу.'
              : 'Discussion turns the archive into a living platform where experienced artists and newcomers can react to the work.'}
          </p>

          {authState.user ? (
            <form className="mt-6 grid gap-4" action={createCommentAction.bind(null, locale, slug, artwork.id)}>
              <label className="field-label">
                <span>{locale === 'ru' ? 'Текст комментария' : 'Comment text'}</span>
                <textarea className="field textarea" name="body" placeholder={locale === 'ru' ? 'Поделись мнением о работе…' : 'Share your thoughts about the work…'} required />
              </label>
              <div>
                <FormButton pendingLabel={locale === 'ru' ? 'Отправляем…' : 'Sending…'}>
                  {locale === 'ru' ? 'Оставить комментарий' : 'Post comment'}
                </FormButton>
              </div>
            </form>
          ) : null}
        </article>

        <div className="grid gap-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <article key={comment.id} className="panel p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm uppercase tracking-[0.16em] text-white/55">{comment.author_name}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-white/42">{formatDate(comment.created_at)}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/76">{comment.body}</p>
              </article>
            ))
          ) : (
            <NoticeCard
              title={locale === 'ru' ? 'Пока без обсуждения' : 'No discussion yet'}
              text={
                locale === 'ru'
                  ? 'Стань первым, кто оставит комментарий и добавит живое взаимодействие вокруг работы.'
                  : 'Be the first to comment and add live interaction around the work.'
              }
              variant="info"
            />
          )}
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4">
          <span className="pill">Related</span>
          <h2 className="mt-4 font-display text-5xl tracking-[0.08em] md:text-6xl">
            {locale === 'ru' ? 'Похожие работы' : 'Related works'}
          </h2>
        </div>

        {related.length > 0 ? (
          <div className="grid-shell md:grid-cols-3">
            {related.map((item) => (
              <ArtworkCard key={item.id ?? item.title} artwork={item} locale={locale} />
            ))}
          </div>
        ) : (
          <NoticeCard
            title={locale === 'ru' ? 'Пока без подборки' : 'No related selection yet'}
            text={
              locale === 'ru'
                ? 'После наполнения архива здесь появятся похожие записи по стилю и времени.'
                : 'Once the archive grows, similar records by style and period will appear here.'
            }
            variant="info"
          />
        )}
      </section>
    </div>
  );
}
