import { notFound } from 'next/navigation';
import { ArtistCard } from '@/components/shared/artist-card';
import { NoticeCard } from '@/components/shared/notice-card';
import { PageHero } from '@/components/shared/page-hero';
import { isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { listArtists } from '@/lib/data';
import { isSupabaseConfigured } from '@/lib/supabase/config';

export default async function ArtistsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const artists = await listArtists();

  return (
    <div className="container-shell py-8 md:py-12">
      <PageHero eyebrow="Artists" title={dictionary.artists.title} subtitle={dictionary.artists.subtitle} />

      {!isSupabaseConfigured ? (
        <div className="mt-6">
          <NoticeCard title={dictionary.system.supabaseMissingTitle} text={dictionary.system.supabaseMissingText} variant="warning" />
        </div>
      ) : null}

      <section className="mt-8 grid-shell md:grid-cols-3">
        {artists.map((artist) => (
<<<<<<< HEAD
          <ArtistCard key={artist.id} artist={artist} locale={locale} />        ))}
=======
          <ArtistCard key={artist.id ?? artist.display_name ?? artist.name} artist={artist} locale={locale} />
        ))}
>>>>>>> 79a5ba6cf827965ae447b20eac7da888d9156c3f
      </section>
    </div>
  );
}
