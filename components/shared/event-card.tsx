import Link from 'next/link';

type EventCardProps = {
  event: {
    slug?: string;
    title: string;
    city?: string | null;
    venue?: string | null;
    summary?: string | null;
    starts_at: string;
  };
  locale: string;
  dateLabel: string;
};

export function EventCard({ event, locale, dateLabel }: EventCardProps) {
  return (
    <Link
      href={`/${locale}/events/${event.slug}`}
      className="group panel grid gap-5 p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20 md:grid-cols-[180px_1fr] md:p-6"
    >
      <div className="flex items-center justify-center rounded-3xl border border-white/10 bg-white/3 p-6">
        <span className="font-display text-4xl tracking-[0.08em] text-center">{dateLabel}</span>
      </div>
      <div>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-white/52">
          <span>{event.city || 'City TBA'}</span>
          {event.venue ? <span>• {event.venue}</span> : null}
        </div>
        <h3 className="mt-3 font-display text-5xl leading-none tracking-[0.08em]">{event.title}</h3>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">{event.summary || 'Event summary will appear here.'}</p>
        <span className="mt-5 inline-flex text-xs uppercase tracking-[0.16em] text-white/60 transition group-hover:text-white">Open event →</span>
      </div>
    </Link>
  );
}
