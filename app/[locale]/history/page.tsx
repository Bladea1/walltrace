import { notFound } from 'next/navigation';
import { isValidLocale } from '@/i18n/config';
import { listHistoryEntries } from '@/lib/data';
import { MuseumHistory } from '@/components/history/museum-history';

export default async function HistoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const entries = await listHistoryEntries(locale);

  return (
    <div className="container-shell py-8 md:py-12">
      <MuseumHistory locale={locale} entries={entries} />
    </div>
  );
}
