import { notFound } from 'next/navigation';
import { FlashMessage } from '@/components/shared/flash-message';
import { FormButton } from '@/components/shared/form-button';
import { NoticeCard } from '@/components/shared/notice-card';
import { PageHero } from '@/components/shared/page-hero';
import { isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { getAuthState } from '@/lib/auth';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import { getSingleSearchParam } from '@/lib/utils';
import { submitArtworkAction } from './actions';

export default async function SubmitPage({
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
  const error = getSingleSearchParam(sp.error);
  const success = getSingleSearchParam(sp.success);

  return (
    <div className="container-shell py-8 md:py-12">
      <PageHero eyebrow="Moderation" title={dictionary.submit.title} subtitle={dictionary.submit.subtitle} />

      <div className="mt-6 grid gap-4">
        <FlashMessage message={success} variant="success" />
        <FlashMessage message={error} variant="error" />
      </div>

      {!isSupabaseConfigured ? (
        <div className="mt-8">
          <NoticeCard title={dictionary.system.supabaseMissingTitle} text={dictionary.system.supabaseMissingText} variant="warning" />
        </div>
      ) : null}

      {!authState.user ? (
        <div className="mt-8">
          <NoticeCard title={dictionary.system.needLoginTitle} text={dictionary.system.needLoginText} variant="info" />
        </div>
      ) : (
        <section className="panel mt-8 p-6 md:p-8">
          <form className="grid gap-4 md:grid-cols-2" action={submitArtworkAction.bind(null, locale)}>
            <label className="field-label">
              <span>{dictionary.submit.fields.title}</span>
              <input className="field" type="text" name="title" required />
            </label>
            <label className="field-label">
              <span>{dictionary.submit.fields.author}</span>
              <input
                className="field"
                type="text"
                name="author_name"
                defaultValue={authState.profile?.display_name ?? authState.user?.email?.split('@')[0] ?? ''}
                required
              />
            </label>
            <label className="field-label">
              <span>{dictionary.submit.fields.location}</span>
              <input className="field" type="text" name="location_name" required />
            </label>
            <label className="field-label">
              <span>{dictionary.submit.fields.year}</span>
              <input className="field" type="text" name="created_year" placeholder="2025" required />
            </label>
            <label className="field-label md:col-span-2">
              <span>{dictionary.submit.fields.style}</span>
              <input className="field" type="text" name="style" placeholder="Wildstyle / Character / Mural" required />
            </label>
            <label className="field-label md:col-span-2">
              <span>{dictionary.submit.fields.tags}</span>
              <input className="field" type="text" name="tags" placeholder="lettering, urban, archive" />
            </label>
            <label className="field-label md:col-span-2">
              <span>{dictionary.submit.fields.description}</span>
              <textarea className="field textarea" name="description" required />
            </label>
            <label className="field-label md:col-span-2">
              <span>{dictionary.submit.fields.image}</span>
              <input className="field" type="file" name="image" accept="image/png,image/jpeg,image/webp" />
            </label>
            <div className="md:col-span-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-white/64">{dictionary.submit.note}</p>
              <FormButton pendingLabel={locale === 'ru' ? 'Отправляем…' : 'Submitting…'}>{dictionary.submit.button}</FormButton>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}
