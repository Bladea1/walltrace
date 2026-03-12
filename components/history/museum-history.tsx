'use client';

import { useEffect, useMemo, useState } from 'react';
import type { HistoryEntryRecord } from '@/lib/data';
import { museumHistory } from '@/lib/history-museum';
import { TimelineItem } from '@/components/shared/timeline-item';

function posterDataUrl(word: string, accent: string) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700" fill="none">
    <rect width="900" height="700" rx="48" fill="#0F0F0F"/>
    <rect x="28" y="28" width="844" height="644" rx="34" stroke="rgba(255,255,255,0.14)"/>
    <circle cx="735" cy="145" r="130" fill="rgba(255,90,54,0.20)"/>
    <circle cx="178" cy="560" r="160" fill="rgba(255,255,255,0.05)"/>
    <path d="M92 448C208 366 330 330 494 342C631 352 735 327 812 268" stroke="rgba(255,255,255,0.16)" stroke-width="12" stroke-linecap="round"/>
    <text x="72" y="118" fill="#F3EFE7" font-size="44" font-family="Arial, sans-serif" letter-spacing="10">WALLTRACE</text>
    <text x="72" y="246" fill="#F3EFE7" font-size="148" font-weight="700" font-family="Arial, sans-serif" letter-spacing="6">${word}</text>
    <text x="76" y="314" fill="#FF5A36" font-size="30" font-family="Arial, sans-serif" letter-spacing="8">${accent}</text>
    <text x="72" y="560" fill="rgba(255,255,255,0.74)" font-size="28" font-family="Arial, sans-serif" letter-spacing="4">DIGITAL GRAFFITI MUSEUM SECTION</text>
  </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function MuseumHistory({
  locale,
  entries,
}: {
  locale: 'ru' | 'en';
  entries: HistoryEntryRecord[];
}) {
  const content = museumHistory[locale];
  const [activeEra, setActiveEra] = useState(content.eras[0]?.id ?? '');
  const allFigures = useMemo(
    () => content.eras.flatMap((era) => era.figures.map((figure) => ({ ...figure, eraTitle: era.title }))),
    [content.eras]
  );

  useEffect(() => {
    const sections = content.eras
      .map((era) => document.getElementById(`history-era-${era.id}`))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (items) => {
        const visible = items
          .filter((item) => item.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveEra(visible.target.id.replace('history-era-', ''));
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [content.eras]);

  return (
    <div className="space-y-8">
      <section className="history-museum-hero panel panel-glow overflow-hidden p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <span className="pill">{content.hero.eyebrow}</span>
            <h1 className="mt-5 max-w-5xl font-display text-6xl leading-none tracking-[0.08em] md:text-8xl">
              {content.hero.title}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-white/82 md:text-2xl">
              {content.hero.subtitle}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">{content.hero.lead}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {content.hero.stats.map((item) => (
              <article key={item.label} className="history-stat-card">
                <p className="font-display text-5xl tracking-[0.08em] md:text-6xl">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/58">{item.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {content.pillars.map((item) => (
            <article key={item.title} className="history-glass-card p-5">
              <p className="font-display text-3xl tracking-[0.08em] md:text-4xl">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[280px_1fr] lg:items-start">
        <aside className="history-side-nav panel p-4 md:p-5 lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-[0.18em] text-white/46">{content.navTitle}</p>
          <div className="mt-4 flex flex-wrap gap-2 lg:grid">
            {content.eras.map((era) => (
              <button
                key={era.id}
                type="button"
                onClick={() => {
                  setActiveEra(era.id);
                  document.getElementById(`history-era-${era.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`history-nav-button ${activeEra === era.id ? 'history-nav-button-active' : ''}`}
              >
                <span>{era.range}</span>
                <strong>{era.navLabel}</strong>
              </button>
            ))}
          </div>
          <div className="history-reading-room mt-5 rounded-3xl border border-white/10 bg-white/4 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-white/50">{content.museumLabel}</p>
            <p className="mt-3 text-sm leading-7 text-white/74">
              {locale === 'ru'
                ? 'Переходи по эпохам, раскрывай фигуры и читай маршрут как музейный сценарий: сначала поверхность, потом стиль, затем медиа, архив и институции.'
                : 'Jump between eras, open the figure cards, and read the route like a museum script: first the surface, then style, then media, archives, and institutions.'}
            </p>
          </div>
        </aside>

        <div className="space-y-6">
          {content.eras.map((era) => (
            <section key={era.id} id={`history-era-${era.id}`} className="history-era panel overflow-hidden p-5 md:p-7">
              <div className="grid gap-6 xl:grid-cols-[0.86fr_1.14fr] xl:items-start">
                <div className="space-y-4">
                  <span className="pill">{era.range}</span>
                  <h2 className="font-display text-5xl leading-none tracking-[0.08em] md:text-7xl">{era.title}</h2>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">{era.kicker}</p>
                  <p className="max-w-2xl text-base leading-8 text-white/76">{era.summary}</p>
                  <div className="rounded-3xl border border-white/10 bg-white/4 p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/52">
                      {locale === 'ru' ? 'Почему это важно' : 'Why it matters'}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/75">{era.whyItMatters}</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-3">
                    {era.galleryNotes.map((note) => (
                      <article key={note.title} className="history-poster-card overflow-hidden rounded-3xl border border-white/10 bg-white/3">
                        <img className="h-48 w-full object-cover" src={posterDataUrl(note.word, note.title.toUpperCase())} alt={note.title} />
                        <div className="p-4">
                          <p className="text-xs uppercase tracking-[0.16em] text-white/45">{note.title}</p>
                          <p className="mt-2 text-sm leading-6 text-white/74">{note.caption}</p>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="history-list-card rounded-3xl border border-white/10 bg-white/4 p-5 md:p-6">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/50">
                      {locale === 'ru' ? 'Ключевые сдвиги' : 'Key shifts'}
                    </p>
                    <ul className="mt-4 grid gap-3">
                      {era.milestones.map((milestone) => (
                        <li key={milestone} className="history-list-row">
                          <span className="history-list-dot" />
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ))}

          <section className="panel p-6 md:p-8">
            <span className="pill">{content.figureSection.eyebrow}</span>
            <h2 className="mt-5 font-display text-5xl tracking-[0.08em] md:text-7xl">{content.figureSection.title}</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-white/72 md:text-lg">{content.figureSection.subtitle}</p>

            <div className="mt-8 grid gap-4 xl:grid-cols-2">
              {allFigures.map((figure) => (
                <details key={figure.id} className="history-figure-card rounded-3xl border border-white/10 bg-white/4 p-5 open:border-white/20 open:bg-white/5">
                  <summary className="grid cursor-pointer gap-4 list-none md:grid-cols-[190px_1fr] md:items-start">
                    <img
                      src={posterDataUrl(figure.posterWord, figure.name.toUpperCase())}
                      alt={figure.name}
                      className="h-44 w-full rounded-[24px] border border-white/10 object-cover md:h-full"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-white/48">{figure.eraTitle}</p>
                      <h3 className="mt-2 font-display text-4xl leading-none tracking-[0.08em]">{figure.name}</h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/55">{figure.years} / {figure.role}</p>
                      <p className="mt-4 text-sm leading-7 text-white/72">{figure.summary}</p>
                    </div>
                  </summary>
                  <div className="mt-5 border-t border-white/10 pt-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/48">
                      {locale === 'ru' ? 'Главный вклад' : 'Why this figure matters'}
                    </p>
                    <ul className="mt-4 grid gap-3">
                      {figure.contributions.map((item) => (
                        <li key={item} className="history-list-row">
                          <span className="history-list-dot" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="panel p-6 md:p-8">
            <span className="pill">{content.readingRoom.eyebrow}</span>
            <h2 className="mt-5 font-display text-5xl tracking-[0.08em] md:text-7xl">{content.readingRoom.title}</h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {content.readingRoom.items.map((item) => (
                <article key={item.title} className="history-reading-card rounded-3xl border border-white/10 bg-white/4 p-5 md:grid md:grid-cols-[160px_1fr] md:items-center md:gap-5">
                  <img src={posterDataUrl(item.word, item.word)} alt={item.title} className="h-36 w-full rounded-[22px] border border-white/10 object-cover" />
                  <div>
                    <p className="font-display text-3xl tracking-[0.08em] md:text-4xl">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel p-6 md:p-8">
            <span className="pill">{content.curatorSection.eyebrow}</span>
            <h2 className="mt-5 font-display text-5xl tracking-[0.08em] md:text-7xl">{content.curatorSection.title}</h2>
            {entries.length > 0 ? (
              <div className="mt-8 grid gap-4">
                {entries.map((item) => (
                  <TimelineItem
                    key={item.id}
                    year={item.year_label}
                    title={item.title}
                    text={item.body}
                    accent={item.accent}
                    era={item.era_label}
                  />
                ))}
              </div>
            ) : (
              <div className="notice notice-info mt-8">
                <h3 className="font-display text-3xl tracking-[0.08em]">{content.curatorSection.emptyTitle}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/72">{content.curatorSection.emptyText}</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </div>
  );
}
