import { notFound } from 'next/navigation';
import { EventCard } from '@/components/shared/event-card';
import { NoticeCard } from '@/components/shared/notice-card';
import { PageHero } from '@/components/shared/page-hero';
import { isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { listEventItems } from '@/lib/data';
import { formatDate } from '@/lib/utils';

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const eventItems = await listEventItems(locale, 12);

  return (
    <div className="container-shell py-8 md:py-12">
      <PageHero eyebrow="Calendar" title={dictionary.events.title} subtitle={dictionary.events.subtitle} />
      <section className="mt-8 grid gap-4">
        {eventItems.length > 0 ? (
          eventItems.map((item) => (
            <EventCard key={item.id} event={item} locale={locale} dateLabel={formatDate(item.starts_at, locale)} />
          ))
        ) : (
          <NoticeCard
            title={locale === 'ru' ? 'События пока не добавлены' : 'No events yet'}
            text={locale === 'ru' ? 'Создай первый анонс через админку.' : 'Create the first event via the admin panel.'}
            variant="info"
          />
        )}
      </section>
    </div>
  );
}
