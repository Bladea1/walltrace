import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EventCard } from '@/components/shared/event-card';
import { NoticeCard } from '@/components/shared/notice-card';
import { PageHero } from '@/components/shared/page-hero';
import { isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { getEventBySlug, listEventItems } from '@/lib/data';
import { formatDate, formatDateTime } from '@/lib/utils';

export default async function EventPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const event = await getEventBySlug(locale, slug);
  if (!event) notFound();
  const related = (await listEventItems(locale, 4)).filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <div className="container-shell py-8 md:py-12">
      <PageHero eyebrow="Calendar" title={event.title} subtitle={event.summary ?? (locale === 'ru' ? 'Событие платформы WALLTRACE.' : 'A WALLTRACE platform event.')} />
      <section className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.55fr]">
        <article className="panel p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/3 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-white/52">{locale === 'ru' ? 'Дата' : 'Date'}</p>
              <p className="mt-2 font-display text-3xl tracking-[0.06em]">{formatDateTime(event.starts_at, locale)}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/3 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-white/52">{locale === 'ru' ? 'Локация' : 'Location'}</p>
              <p className="mt-2 font-display text-3xl tracking-[0.06em]">{event.city || 'TBA'}{event.venue ? ` / ${event.venue}` : ''}</p>
            </div>
          </div>
          <div className="mt-6 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,90,54,0.16),rgba(255,255,255,0.03))] p-8">
            <p className="max-w-4xl text-base leading-8 text-white/80 whitespace-pre-line">{event.body ?? event.summary ?? ''}</p>
          </div>
        </article>
        <aside className="grid gap-4 h-fit">
          <NoticeCard
            title={locale === 'ru' ? 'Формат раздела' : 'Section format'}
            text={locale === 'ru' ? 'Раздел событий помогает показать, что WALLTRACE — не только архив, но и живая культурная платформа.' : 'The events section shows that WALLTRACE is not only an archive, but also a living cultural platform.'}
            variant="info"
          />
          {related.map((item) => (
            <EventCard key={item.id} event={item} locale={locale} dateLabel={formatDate(item.starts_at, locale)} />
          ))}
          <Link href={`/${locale}/events`} className="button-secondary justify-center">
            {dictionary.common.viewAll}
          </Link>
        </aside>
      </section>
    </div>
  );
}
