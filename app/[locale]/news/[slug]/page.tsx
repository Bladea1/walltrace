import Link from 'next/link';
import { notFound } from 'next/navigation';
import { NoticeCard } from '@/components/shared/notice-card';
import { PageHero } from '@/components/shared/page-hero';
import { UpdateCard } from '@/components/shared/update-card';
import { isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { getNewsPostBySlug, listNewsPosts } from '@/lib/data';
import { formatDate } from '@/lib/utils';

export default async function NewsPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const post = await getNewsPostBySlug(locale, slug);
  if (!post) notFound();
  const related = (await listNewsPosts(locale, 4)).filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <div className="container-shell py-8 md:py-12">
      <PageHero eyebrow={post.category ?? 'Editorial'} title={post.title} subtitle={post.excerpt ?? post.body.slice(0, 140)} />
      <section className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.55fr]">
        <article className="panel p-6 md:p-8">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-white/52">
            {post.published_at ? <span>{formatDate(post.published_at, locale)}</span> : null}
            <span>• {locale.toUpperCase()}</span>
          </div>
          <div className="mt-6 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,90,54,0.16),rgba(255,255,255,0.03))] p-8">
            <p className="max-w-4xl text-base leading-8 text-white/80 whitespace-pre-line">{post.body}</p>
          </div>
        </article>
        <aside className="grid gap-4 h-fit">
          <NoticeCard
            title={locale === 'ru' ? 'Редакционный материал' : 'Editorial item'}
            text={locale === 'ru' ? 'Здесь можно собирать новости, аналитические тексты и анонсы по теме граффити.' : 'Use this section for news, analysis, and announcements related to graffiti culture.'}
            variant="info"
          />
          {related.map((item) => (
            <UpdateCard
              key={item.id}
              item={{
                category: item.category,
                title: item.title,
                excerpt: item.excerpt,
                href: `/${locale}/news/${item.slug}`,
                meta: item.published_at ? formatDate(item.published_at, locale) : undefined,
              }}
            />
          ))}
          <Link href={`/${locale}/news`} className="button-secondary justify-center">
            {dictionary.common.viewAll}
          </Link>
        </aside>
      </section>
    </div>
  );
}
