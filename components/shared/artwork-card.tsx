import Link from 'next/link';

type Artwork = {
  id?: string;
  slug?: string | null;
  title: string;
  author_name?: string | null;
  author?: string;
  location_name?: string | null;
  location?: string;
  created_year?: string | null;
  year?: string;
  style?: string | null;
  description?: string | null;
  image_url?: string | null;
  status?: string | null;
};

export function ArtworkCard({
  artwork,
  locale,
  showStatus = false,
}: {
  artwork: Artwork;
  locale?: string;
  showStatus?: boolean;
}) {
  const author = artwork.author_name ?? artwork.author ?? 'Unknown author';
  const location = artwork.location_name ?? artwork.location ?? 'Unknown location';
  const year = artwork.created_year ?? artwork.year ?? '—';
  const href = locale && artwork.slug ? `/${locale}/archive/${artwork.slug}` : null;

  const content = (
    <>
      {artwork.image_url ? (
        <div
          className="h-56 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(135deg, rgba(255,90,54,0.12), rgba(255,255,255,0.04)), url(${artwork.image_url})` }}
        />
      ) : (
        <div className="h-56 bg-[linear-gradient(135deg,rgba(255,90,54,0.24),rgba(255,255,255,0.04))]" />
      )}

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-white/55">
          <span>{year}</span>
          <span>•</span>
          <span>{artwork.style || 'Graffiti'}</span>
          {showStatus && artwork.status ? (
            <>
              <span>•</span>
              <span>{artwork.status}</span>
            </>
          ) : null}
        </div>

        <div>
          <h3 className="font-display text-4xl leading-none tracking-[0.06em]">{artwork.title}</h3>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/60">
            {author} / {location}
          </p>
        </div>

        <p className="text-sm leading-7 text-white/70">{artwork.description || 'Описание пока не добавлено.'}</p>

        {href ? (
          <span className="inline-flex text-xs uppercase tracking-[0.16em] text-white/60 transition group-hover:text-white">
            Open record →
          </span>
        ) : null}
      </div>
    </>
  );

  return href ? (
    <Link href={href} className="group panel block overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-white/20">
      {content}
    </Link>
  ) : (
    <article className="panel overflow-hidden">{content}</article>
  );
}
