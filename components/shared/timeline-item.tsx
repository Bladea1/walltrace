type TimelineItemProps = {
  year: string;
  title: string;
  text: string;
  accent?: string | null;
  era?: string | null;
};

export function TimelineItem({ year, title, text, accent, era }: TimelineItemProps) {
  return (
    <article className="panel relative p-5 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-1 before:bg-[var(--accent)]">
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/50">
        <span>{year}</span>
        {era ? <span>• {era}</span> : null}
        {accent ? <span>• {accent}</span> : null}
      </div>
      <h3 className="mt-3 font-display text-4xl leading-none tracking-[0.06em]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/70">{text}</p>
    </article>
  );
}
