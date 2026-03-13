import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArtworkCard } from '@/components/shared/artwork-card';
import { NoticeCard } from '@/components/shared/notice-card';
import { PageHero } from '@/components/shared/page-hero';
import { isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { listApprovedArtworks, listArchiveStyles } from '@/lib/data';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import { getSingleSearchParam } from '@/lib/utils';

export default async function ArchivePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const sp = await searchParams;
  const activeStyle = getSingleSearchParam(sp.style)?.trim() || '';
  const query = getSingleSearchParam(sp.q)?.trim() || '';

  const [artworks, styles] = await Promise.all([
    listApprovedArtworks({ style: activeStyle || undefined, query: query || undefined, limit: 24 }),
    listArchiveStyles(),
  ]);

  return (
    <div className="container-shell py-8 md:py-12">
      <PageHero eyebrow="Archive" title={dictionary.archive.title} subtitle={dictionary.archive.subtitle} />

      {!isSupabaseConfigured ? (
        <div className="mt-6">
          <NoticeCard title={dictionary.system.supabaseMissingTitle} text={dictionary.system.supabaseMissingText} variant="warning" />
        </div>
      ) : null}

      <section className="panel mt-8 p-5 md:p-6">
        <div className="flex flex-col gap-5">
          <form className="grid gap-4 md:grid-cols-[1fr_auto]" action={`/${locale}/archive`}>
            <label className="field-label">
              <span>{locale === 'ru' ? 'Поиск по архиву' : 'Archive search'}</span>
              <input
                className="field"
                type="text"
                name="q"
                defaultValue={query}
                placeholder={locale === 'ru' ? 'Название, автор, место, описание…' : 'Title, artist, location, description…'}
              />
            </label>
            {activeStyle ? <input type="hidden" name="style" value={activeStyle} /> : null}
            <div className="flex items-end gap-3">
              <button className="button-primary" type="submit">
                {locale === 'ru' ? 'Искать' : 'Search'}
              </button>
              {(query || activeStyle) ? (
                <Link href={`/${locale}/archive`} className="button-secondary">
                  {locale === 'ru' ? 'Сбросить' : 'Reset'}
                </Link>
              ) : null}
            </div>
          </form>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/archive${query ? `?q=${encodeURIComponent(query)}` : ''}`}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                !activeStyle ? 'border-white/20 bg-white/8 text-white' : 'border-white/10 text-white/72 hover:bg-white/5'
              }`}
            >
              {locale === 'ru' ? 'Все стили' : 'All styles'}
            </Link>
            {styles.map((tag) => {
              const href = `/${locale}/archive?style=${encodeURIComponent(tag)}${query ? `&q=${encodeURIComponent(query)}` : ''}`;
              const selected = activeStyle.toLowerCase() === tag.toLowerCase();
              return (
                <Link
                  key={tag}
                  href={href}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                    selected ? 'border-white/20 bg-white/8 text-white' : 'border-white/10 text-white/72 hover:bg-white/5'
                  }`}
                >
                  {tag}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-white/52">
            {locale === 'ru' ? 'Публичный каталог' : 'Public catalog'}
          </p>
          <p className="mt-2 text-sm leading-7 text-white/72">
            {artworks.length > 0
              ? locale === 'ru'
                ? `Найдено работ: ${artworks.length}. В публичной части отображаются только одобренные записи.`
                : `Found works: ${artworks.length}. Only approved records are visible publicly.`
              : locale === 'ru'
                ? 'По текущему фильтру ничего не найдено.'
                : 'No works found for the current filters.'}
          </p>
        </div>
      </section>

      {artworks.length > 0 ? (
        <section className="mt-8 grid-shell md:grid-cols-3">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id ?? artwork.title} artwork={artwork} locale={locale} />
          ))}
        </section>
      ) : (
        <section className="mt-8">
          <NoticeCard
            title={locale === 'ru' ? 'Пока нет совпадений' : 'No matching works yet'}
            text={
              locale === 'ru'
                ? 'Попробуй убрать часть фильтров или сначала одобрить несколько работ через админку.'
                : 'Try clearing some filters or approve a few works in the admin panel first.'
            }
            variant="info"
          />
        </section>
      )}
    </div>
  );
}
