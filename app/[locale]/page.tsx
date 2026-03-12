import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArtworkCard } from '@/components/shared/artwork-card';
import { ArtistCard } from '@/components/shared/artist-card';
import { EventCard } from '@/components/shared/event-card';
import { NoticeCard } from '@/components/shared/notice-card';
import { UpdateCard } from '@/components/shared/update-card';
import { isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { listApprovedArtworks, listArtists, listEventItems, listNewsPosts } from '@/lib/data';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import { formatDate } from '@/lib/utils';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const artworks = await listApprovedArtworks();
  const artists = await listArtists();
  const newsPosts = await listNewsPosts(locale, 2);
  const eventItems = await listEventItems(locale, 2);

  return (
    <div className="container-shell py-8 md:py-12">
      <section className="panel panel-glow grid gap-10 p-6 md:grid-cols-[1.15fr_0.85fr] md:p-10">
        <div className="space-y-6">
          <span className="pill">{dictionary.home.eyebrow}</span>

          <div className="space-y-4">
            <h1 className="font-display text-6xl leading-none tracking-[0.1em] md:text-8xl">{dictionary.home.title}</h1>
            <p className="max-w-2xl text-xl leading-8 text-white/90 md:text-2xl">{dictionary.home.subtitle}</p>
            <p className="max-w-2xl text-base leading-7 text-white/68 md:text-lg">{dictionary.home.description}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href={`/${locale}/archive`} className="button-primary">
              {dictionary.home.ctaPrimary}
            </Link>
            <Link href={`/${locale}/register`} className="button-secondary">
              {dictionary.home.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="panel p-5">
            <p className="font-display text-4xl tracking-[0.08em]">Archive</p>
            <p className="mt-2 text-sm leading-6 text-white/65">Каталог работ и авторов с культурным контекстом.</p>
          </div>
          <div className="panel p-5">
            <p className="font-display text-4xl tracking-[0.08em]">History</p>
            <p className="mt-2 text-sm leading-6 text-white/65">Интерактивный маршрут по развитию граффити и street culture.</p>
          </div>
          <div className="panel p-5">
            <p className="font-display text-4xl tracking-[0.08em]">{isSupabaseConfigured ? dictionary.common.liveMode : dictionary.common.demoMode}</p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              {isSupabaseConfigured
                ? 'Auth, profile, submissions and moderation are ready to use.'
                : dictionary.system.supabaseMissingText}
            </p>
          </div>
        </div>
      </section>

      {!isSupabaseConfigured ? (
        <div className="mt-6">
          <NoticeCard
            title={dictionary.system.supabaseMissingTitle}
            text={dictionary.system.supabaseMissingText}
            variant="warning"
          />
        </div>
      ) : null}

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {dictionary.home.cards.map((item) => (
          <article key={item.title} className="panel p-6">
            <p className="font-display text-4xl tracking-[0.08em]">{item.title}</p>
            <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <span className="pill">Archive</span>
            <h2 className="mt-4 font-display text-5xl tracking-[0.08em] md:text-6xl">{dictionary.home.sections.featured}</h2>
          </div>
          <Link href={`/${locale}/archive`} className="button-secondary hidden md:inline-flex">
            {dictionary.common.viewAll}
          </Link>
        </div>

        <div className="grid-shell md:grid-cols-3">
          {artworks.slice(0, 3).map((artwork) => (
            <ArtworkCard key={artwork.id ?? artwork.title} artwork={artwork} locale={locale} />
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <article className="panel p-6 md:p-8">
          <span className="pill">Timeline</span>
          <h2 className="mt-5 font-display text-5xl tracking-[0.08em] md:text-6xl">{dictionary.home.sections.timeline}</h2>
          <p className="mt-5 text-base leading-7 text-white/68">
            WALLTRACE строится как цифровая выставка: история граффити не прячется в скучную статью, а становится частью
            самого продукта — с эпохами, визуальными переходами и образовательной ценностью.
          </p>
          <div className="mt-8 space-y-4">
            {['1960s — ранние городские надписи', '1970s — subway & tags', '1980s — global attention', '2000s+ — festivals & archives'].map((line) => (
              <div
                key={line}
                className="rounded-2xl border border-white/10 px-4 py-4 text-sm uppercase tracking-[0.12em] text-white/90"
              >
                {line}
              </div>
            ))}
          </div>
        </article>

        <article className="panel p-6 md:p-8">
          <span className="pill">Artists</span>
          <h2 className="mt-5 font-display text-5xl tracking-[0.08em] md:text-6xl">{dictionary.home.sections.artists}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {artists.slice(0, 4).map((artist) => (
              <ArtistCard key={artist.id ?? artist.display_name ?? artist.name} artist={artist} locale={locale} />
            ))}
          </div>
        </article>
      </section>

      <section className="mt-8 grid gap-4 xl:grid-cols-[1fr_1fr]">
        <article>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <span className="pill">Media</span>
              <h2 className="mt-4 font-display text-5xl tracking-[0.08em] md:text-6xl">{dictionary.home.sections.updates}</h2>
            </div>
            <Link href={`/${locale}/news`} className="button-secondary hidden md:inline-flex">
              {dictionary.common.viewAll}
            </Link>
          </div>
          <div className="grid-shell">
            {newsPosts.map((item) => (
              <UpdateCard
                key={item.id}
                item={{
                  category: item.category,
                  title: item.title,
                  excerpt: item.excerpt,
                  href: `/${locale}/news/${item.slug}`,
                  meta: item.published_at ? formatDate(item.published_at, locale) : undefined,
                }}
              />
            ))}
          </div>
        </article>

        <article>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <span className="pill">Calendar</span>
              <h2 className="mt-4 font-display text-5xl tracking-[0.08em] md:text-6xl">{dictionary.events.title}</h2>
            </div>
            <Link href={`/${locale}/events`} className="button-secondary hidden md:inline-flex">
              {dictionary.common.viewAll}
            </Link>
          </div>
          <div className="grid-shell">
            {eventItems.map((item) => (
              <EventCard
                key={item.id}
                event={item}
                locale={locale}
                dateLabel={formatDate(item.starts_at, locale)}
              />
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
