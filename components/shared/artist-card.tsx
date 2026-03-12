import Link from 'next/link';
import { AvatarCircle } from './avatar-circle';

type Artist = {
  id?: string;
  display_name?: string | null;
  name?: string;
  city?: string | null;
  style?: string | null;
  bio?: string | null;
  avatar_url?: string | null;
  approved_count?: number;
  followers_count?: number;
};

export function ArtistCard({ artist, locale }: { artist: Artist; locale?: string }) {
  const displayName = artist.display_name ?? artist.name ?? 'Unknown artist';
  const href = locale && artist.id ? `/${locale}/artists/${artist.id}` : null;

  const content = (
    <>
      <div className="mb-5 flex items-start justify-between gap-4">
        <AvatarCircle src={artist.avatar_url} name={displayName} size="lg" />
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-white/55">
          <span>{artist.approved_count ?? 0} works</span>
          <span>•</span>
          <span>{artist.followers_count ?? 0} followers</span>
        </div>
      </div>
      <h3 className="font-display text-4xl leading-none tracking-[0.06em]">{displayName}</h3>
      <p className="mt-2 text-sm uppercase tracking-[0.15em] text-white/55">
        {artist.city || '—'} / {artist.style || 'Graffiti'}
      </p>
      <p className="mt-4 text-sm leading-7 text-white/70">{artist.bio || 'Профиль автора будет развиваться вместе с платформой.'}</p>
      {href ? <span className="mt-4 inline-flex text-xs uppercase tracking-[0.16em] text-white/60 transition group-hover:text-white">Open profile →</span> : null}
    </>
  );

  return href ? (
    <Link href={href} className="group panel block p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20">
      {content}
    </Link>
  ) : (
    <article className="panel p-5">{content}</article>
  );
}
