import { notFound } from 'next/navigation';
import { NoticeCard } from '@/components/shared/notice-card';
import { PageHero } from '@/components/shared/page-hero';
import { UpdateCard } from '@/components/shared/update-card';
import { isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { listNewsPosts } from '@/lib/data';
import { formatDate } from '@/lib/utils';

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const posts = await listNewsPosts(locale, 12);

  return (
    <div className="container-shell py-8 md:py-12">
      <PageHero eyebrow="Editorial" title={dictionary.news.title} subtitle={dictionary.news.subtitle} />
      <section className="mt-8 grid-shell md:grid-cols-2 xl:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((item) => (
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
          ))
        ) : (
          <div className="md:col-span-2 xl:col-span-3">
            <NoticeCard
              title={locale === 'ru' ? 'Новости пока не добавлены' : 'No news posts yet'}
              text={locale === 'ru' ? 'Создай первую публикацию через админку.' : 'Create the first post through the admin panel.'}
              variant="info"
            />
          </div>
        )}
      </section>
    </div>
  );
}
