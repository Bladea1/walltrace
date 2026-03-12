import Link from 'next/link';

type Update = {
  category?: string | null;
  type?: string | null;
  title: string;
  excerpt?: string | null;
  text?: string | null;
  href?: string;
  meta?: string;
};

export function UpdateCard({ item }: { item: Update }) {
  const content = (
    <>
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-white/52">
        <span className="pill">{item.category ?? item.type ?? 'Update'}</span>
        {item.meta ? <span>{item.meta}</span> : null}
      </div>
      <h3 className="mt-5 font-display text-4xl leading-none tracking-[0.06em]">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/70">{item.excerpt ?? item.text ?? ''}</p>
      {item.href ? <span className="mt-5 inline-flex text-xs uppercase tracking-[0.16em] text-white/60 transition group-hover:text-white">Open article →</span> : null}
    </>
  );

  return item.href ? (
    <Link href={item.href} className="group panel block p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20">
      {content}
    </Link>
  ) : (
    <article className="panel p-5">{content}</article>
  );
}
