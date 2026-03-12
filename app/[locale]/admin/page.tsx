import { notFound } from 'next/navigation';
import { FlashMessage } from '@/components/shared/flash-message';
import { FormButton } from '@/components/shared/form-button';
import { NoticeCard } from '@/components/shared/notice-card';
import { PageHero } from '@/components/shared/page-hero';
import { StatusBadge } from '@/components/shared/status-badge';
import { getAuthState } from '@/lib/auth';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { formatDate, getSingleSearchParam } from '@/lib/utils';
import { approveArtworkAction, deleteArtworkAction, rejectArtworkAction } from './actions';
import { AdminShortcuts } from '@/components/shared/admin-shortcuts';

export default async function AdminPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const authState = await getAuthState();
  const sp = await searchParams;
  const success = getSingleSearchParam(sp.success);
  const error = getSingleSearchParam(sp.error);

  if (!authState.configured) {
    return (
      <div className="container-shell py-8 md:py-12">
        <PageHero eyebrow="Admin" title={dictionary.admin.title} subtitle={dictionary.admin.subtitle} />
        <div className="mt-8">
          <NoticeCard title={dictionary.system.supabaseMissingTitle} text={dictionary.system.supabaseMissingText} variant="warning" />
        </div>
      </div>
    );
  }

  if (authState.profile?.role !== 'admin') {
    return (
      <div className="container-shell py-8 md:py-12">
        <PageHero eyebrow="Admin" title={dictionary.admin.title} subtitle={dictionary.admin.subtitle} />
        <div className="mt-8">
          <NoticeCard title={dictionary.system.adminOnlyTitle} text={dictionary.system.adminOnlyText} variant="warning" />
        </div>
      </div>
    );
  }

  const supabase = await createServerSupabaseClient();
  const [artworksRes, newsRes, eventsRes, historyRes] = await Promise.all([
    supabase!.from('artworks').select('*').order('created_at', { ascending: false }).limit(50),
    supabase!.from('news_posts').select('id, is_published', { count: 'exact' }),
    supabase!.from('events').select('id, is_published', { count: 'exact' }),
    supabase!.from('history_entries').select('id, is_published', { count: 'exact' }),
  ]);

  const artworks = artworksRes.data ?? [];
  const pendingCount = artworks.filter((item) => item.status === 'pending').length;
  const approvedCount = artworks.filter((item) => item.status === 'approved').length;
  const rejectedCount = artworks.filter((item) => item.status === 'rejected').length;
  const stats = [
    [String(pendingCount), locale === 'ru' ? 'На модерации' : 'Pending'],
    [String(approvedCount), locale === 'ru' ? 'Опубликовано' : 'Approved'],
    [String(rejectedCount), locale === 'ru' ? 'Отклонено' : 'Rejected'],
    [String(newsRes.count ?? 0), locale === 'ru' ? 'Новостей' : 'News posts'],
    [String(eventsRes.count ?? 0), locale === 'ru' ? 'Событий' : 'Events'],
    [String(historyRes.count ?? 0), locale === 'ru' ? 'Блоков истории' : 'History entries'],
  ];

  return (
    <div className="container-shell py-8 md:py-12">
      <PageHero eyebrow="Admin" title={dictionary.admin.title} subtitle={dictionary.admin.subtitle} />

      <div className="mt-6 grid gap-4">
        <FlashMessage message={success} variant="success" />
        <FlashMessage message={error} variant="error" />
      </div>

      <section className="mt-8">
        <AdminShortcuts locale={locale} />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stats.map(([value, label]) => (
          <article key={label} className="panel p-6 text-center">
            <p className="font-display text-6xl tracking-[0.08em]">{value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/55">{label}</p>
          </article>
        ))}
      </section>

      <section className="panel mt-8 p-6 md:p-8">
        {artworks.length > 0 ? (
          <div className="table-shell">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>{dictionary.admin.table.artwork}</th>
                  <th>{dictionary.admin.table.author}</th>
                  <th>{dictionary.admin.table.created}</th>
                  <th>{dictionary.admin.table.status}</th>
                  <th>{dictionary.admin.table.actions}</th>
                </tr>
              </thead>
              <tbody>
                {artworks.map((artwork) => (
                  <tr key={artwork.id}>
                    <td>
                      <div className="space-y-2">
                        <p className="font-display text-3xl tracking-[0.06em]">{artwork.title}</p>
                        <p className="text-sm leading-6 text-white/65">{artwork.description}</p>
                      </div>
                    </td>
                    <td>
                      <p className="text-sm font-medium text-white">{artwork.author_name}</p>
                      <p className="text-xs uppercase tracking-[0.14em] text-white/45">{artwork.location_name}</p>
                    </td>
                    <td className="text-sm text-white/70">{formatDate(artwork.created_at)}</td>
                    <td>
                      <StatusBadge status={artwork.status} />
                    </td>
                    <td>
                      <div className="flex flex-wrap gap-2">
                        <form action={approveArtworkAction.bind(null, locale, artwork.id)}>
                          <FormButton pendingLabel="..." variant="secondary">
                            {dictionary.admin.actions.approve}
                          </FormButton>
                        </form>
                        <form action={rejectArtworkAction.bind(null, locale, artwork.id)}>
                          <FormButton pendingLabel="..." variant="danger">
                            {dictionary.admin.actions.reject}
                          </FormButton>
                        </form>
                        <form action={deleteArtworkAction.bind(null, locale, artwork.id)}>
                          <FormButton pendingLabel="..." variant="danger">
                            {locale === 'ru' ? 'Удалить' : 'Delete'}
                          </FormButton>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <NoticeCard title={dictionary.system.emptyState} text="После первой отправки работ здесь появится очередь модерации." variant="info" />
        )}
      </section>
    </div>
  );
}
