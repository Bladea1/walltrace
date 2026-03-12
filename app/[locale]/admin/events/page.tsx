import { notFound } from 'next/navigation';
import { AdminShortcuts } from '@/components/shared/admin-shortcuts';
import { FlashMessage } from '@/components/shared/flash-message';
import { FormButton } from '@/components/shared/form-button';
import { NoticeCard } from '@/components/shared/notice-card';
import { PageHero } from '@/components/shared/page-hero';
import { getAuthState } from '@/lib/auth';
import { listAdminEventItems } from '@/lib/data';
import { isValidLocale } from '@/i18n/config';
import { formatDateTime, getSingleSearchParam } from '@/lib/utils';
import { createEventAction, deleteEventAction, toggleEventPublishedAction } from './actions';

export default async function AdminEventsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const authState = await getAuthState();
  const events = await listAdminEventItems();
  const sp = await searchParams;
  const success = getSingleSearchParam(sp.success);
  const error = getSingleSearchParam(sp.error);

  if (authState.profile?.role !== 'admin') {
    return (
      <div className="container-shell py-8 md:py-12">
        <PageHero eyebrow="Admin" title={locale === 'ru' ? 'События' : 'Events'} subtitle={locale === 'ru' ? 'Календарь платформы.' : 'The platform calendar.'} />
        <div className="mt-8">
          <NoticeCard title={locale === 'ru' ? 'Только для администратора' : 'Admin only'} text={locale === 'ru' ? 'Эта секция доступна только после назначения роли admin.' : 'This section is only available after assigning the admin role.'} variant="warning" />
        </div>
      </div>
    );
  }

  return (
    <div className="container-shell py-8 md:py-12">
      <PageHero eyebrow="Admin" title={locale === 'ru' ? 'События' : 'Events'} subtitle={locale === 'ru' ? 'Календарь платформы.' : 'The platform calendar.'} />
      <div className="mt-8"><AdminShortcuts locale={locale} /></div>
      <div className="mt-6 grid gap-4">
        <FlashMessage message={success} variant="success" />
        <FlashMessage message={error} variant="error" />
      </div>
      <section className="mt-8 grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <article className="panel p-6 md:p-8">
          <h2 className="font-display text-5xl tracking-[0.08em]">{locale === 'ru' ? 'Новое событие' : 'New event'}</h2>
          <form className="mt-6 grid gap-4" action={createEventAction.bind(null, locale)}>
            <label className="field-label"><span>Locale</span><select name="locale" className="field"><option value="ru">RU</option><option value="en">EN</option></select></label>
            <label className="field-label"><span>{locale === 'ru' ? 'Название' : 'Title'}</span><input className="field" name="title" required /></label>
            <label className="field-label"><span>{locale === 'ru' ? 'Город' : 'City'}</span><input className="field" name="city" required /></label>
            <label className="field-label"><span>{locale === 'ru' ? 'Площадка' : 'Venue'}</span><input className="field" name="venue" /></label>
            <label className="field-label"><span>{locale === 'ru' ? 'Дата и время' : 'Date and time'}</span><input className="field" name="starts_at" type="datetime-local" required /></label>
            <label className="field-label"><span>{locale === 'ru' ? 'Краткое описание' : 'Summary'}</span><textarea className="field" name="summary" required /></label>
            <label className="field-label"><span>{locale === 'ru' ? 'Текст' : 'Body'}</span><textarea className="field textarea" name="body" required /></label>
            <FormButton pendingLabel="...">{locale === 'ru' ? 'Опубликовать' : 'Publish'}</FormButton>
          </form>
        </article>
        <article className="panel p-6 md:p-8">
          <h2 className="font-display text-5xl tracking-[0.08em]">{locale === 'ru' ? 'Текущие события' : 'Current events'}</h2>
          <div className="mt-6 space-y-4">
            {events.map((item) => (
              <div key={item.id} className="rounded-3xl border border-white/10 bg-white/3 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-white/52">{item.locale.toUpperCase()} • {formatDateTime(item.starts_at, locale)}</p>
                    <h3 className="mt-2 font-display text-4xl tracking-[0.06em]">{item.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <form action={toggleEventPublishedAction.bind(null, locale, item.id, !item.is_published)}>
                      <FormButton pendingLabel="..." variant={item.is_published ? 'secondary' : 'primary'}>
                        {item.is_published ? (locale === 'ru' ? 'Снять с публикации' : 'Unpublish') : (locale === 'ru' ? 'Опубликовать' : 'Publish')}
                      </FormButton>
                    </form>
                    <form action={deleteEventAction.bind(null, locale, item.id)}>
                      <FormButton pendingLabel="..." variant="danger">
                        {locale === 'ru' ? 'Удалить' : 'Delete'}
                      </FormButton>
                    </form>
                  </div>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/52">{item.city}{item.venue ? ` / ${item.venue}` : ''}</p>
                <p className="mt-4 text-sm leading-7 text-white/68">{item.summary}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
