import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArtworkCard } from '@/components/shared/artwork-card';
import { AvatarCircle } from '@/components/shared/avatar-circle';
import { FlashMessage } from '@/components/shared/flash-message';
import { FormButton } from '@/components/shared/form-button';
import { NoticeCard } from '@/components/shared/notice-card';
import { PageHero } from '@/components/shared/page-hero';
import { StatusBadge } from '@/components/shared/status-badge';
import { isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { getAuthState } from '@/lib/auth';
import { ensureProfile } from '@/lib/profiles';
import { listFavoriteArtworks } from '@/lib/data';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { getSingleSearchParam } from '@/lib/utils';
import { logoutAction, updateProfileAction } from './actions';

export default async function ProfilePage({
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
  const message = getSingleSearchParam(sp.message);
  const success = getSingleSearchParam(sp.success);
  const error = getSingleSearchParam(sp.error);

  if (!authState.configured) {
    return (
      <div className="container-shell py-8 md:py-12">
        <PageHero eyebrow="Profile" title={dictionary.profile.title} subtitle={dictionary.profile.subtitle} />
        <div className="mt-8">
          <NoticeCard title={dictionary.system.supabaseMissingTitle} text={dictionary.system.supabaseMissingText} variant="warning" />
        </div>
      </div>
    );
  }

  if (!authState.user) {
    return (
      <div className="container-shell py-8 md:py-12">
        <PageHero eyebrow="Profile" title={dictionary.profile.title} subtitle={dictionary.profile.subtitle} />
        <div className="mt-8 grid gap-4">
          <NoticeCard title={dictionary.system.needLoginTitle} text={dictionary.system.needLoginText} variant="info" />
          <div>
            <Link href={`/${locale}/login`} className="button-primary">
              {dictionary.nav.login}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const ensuredProfile = await ensureProfile(authState.user);
  const supabase = await createServerSupabaseClient();

  const [{ data: artworks }, favoriteArtworks] = await Promise.all([
    supabase!
      .from('artworks')
      .select('*')
      .eq('user_id', authState.user.id)
      .order('created_at', { ascending: false }),
    listFavoriteArtworks(authState.user.id),
  ]);

  const profile = ensuredProfile ?? {
    display_name: authState.profile?.display_name ?? authState.user.email?.split('@')[0] ?? 'Writer',
    username: '',
    city: '',
    country: '',
    style: '',
    bio: '',
    avatar_url: '',
    role: authState.profile?.role ?? 'user',
  };

  const total = artworks?.length ?? 0;
  const approved = artworks?.filter((item) => item.status === 'approved').length ?? 0;
  const pending = artworks?.filter((item) => item.status === 'pending').length ?? 0;

  return (
    <div className="container-shell py-8 md:py-12">
      <PageHero eyebrow="Dashboard" title={dictionary.profile.title} subtitle={dictionary.profile.subtitle} />

      <div className="mt-6 grid gap-4">
        <FlashMessage message={message} variant="success" />
        <FlashMessage message={success} variant="success" />
        <FlashMessage message={error} variant="error" />
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-[340px_1fr]">
        <article className="panel p-6">
          <AvatarCircle src={profile.avatar_url ?? null} name={profile.display_name} size="xl" />
          <h2 className="mt-5 font-display text-5xl tracking-[0.08em]">{profile.display_name}</h2>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/55">
            {profile.city || '—'} / {profile.style || 'Graffiti'}
          </p>
          <p className="mt-5 text-sm leading-7 text-white/70">{profile.bio || 'Добавь описание автора и аватар, чтобы профиль стал полноценной авторской страницей.'}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {profile.role === 'admin' ? (
              <Link href={`/${locale}/admin`} className="button-secondary">
                {dictionary.profile.actions.admin}
              </Link>
            ) : null}
            <form action={logoutAction.bind(null, locale)}>
              <FormButton pendingLabel="Выходим…" variant="secondary">
                {dictionary.profile.actions.logout}
              </FormButton>
            </form>
          </div>
        </article>

        <div className="grid gap-4">
          <article className="panel grid gap-4 p-6 md:grid-cols-3">
            {[
              [String(total), dictionary.profile.stats.total],
              [String(approved), dictionary.profile.stats.approved],
              [String(pending), dictionary.profile.stats.pending],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/3 p-5 text-center">
                <p className="font-display text-5xl tracking-[0.08em]">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/55">{label}</p>
              </div>
            ))}
          </article>

          <article className="panel p-6 md:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <span className="pill">Profile</span>
                <h3 className="mt-3 font-display text-4xl tracking-[0.08em]">{dictionary.profile.sections.edit}</h3>
              </div>
            </div>

            <form className="grid gap-4 md:grid-cols-2" action={updateProfileAction.bind(null, locale)}>
              <div className="md:col-span-2 grid gap-4 rounded-3xl border border-white/10 bg-white/3 p-4 md:grid-cols-[120px_1fr] md:items-center">
                <AvatarCircle src={profile.avatar_url ?? null} name={profile.display_name} size="lg" />
                <label className="field-label">
                  <span>{locale === 'ru' ? 'Аватар' : 'Avatar'}</span>
                  <input className="field" type="file" name="avatar" accept="image/png,image/jpeg,image/webp" />
                  <small className="text-xs leading-6 text-white/50">
                    {locale === 'ru' ? 'JPG / PNG / WEBP, максимум 4 MB.' : 'JPG / PNG / WEBP, maximum 4 MB.'}
                  </small>
                </label>
              </div>

              <label className="field-label">
                <span>{dictionary.profile.fields.displayName}</span>
                <input className="field" type="text" name="display_name" defaultValue={profile.display_name ?? ''} required />
              </label>
              <label className="field-label">
                <span>{dictionary.profile.fields.username}</span>
                <input className="field" type="text" name="username" defaultValue={profile.username ?? ''} placeholder="walltrace_writer" />
              </label>
              <label className="field-label">
                <span>{dictionary.profile.fields.city}</span>
                <input className="field" type="text" name="city" defaultValue={profile.city ?? ''} />
              </label>
              <label className="field-label">
                <span>{dictionary.profile.fields.country}</span>
                <input className="field" type="text" name="country" defaultValue={profile.country ?? ''} />
              </label>
              <label className="field-label md:col-span-2">
                <span>{dictionary.profile.fields.style}</span>
                <input className="field" type="text" name="style" defaultValue={profile.style ?? ''} placeholder="Wildstyle / Character / Mural" />
              </label>
              <label className="field-label md:col-span-2">
                <span>{dictionary.profile.fields.bio}</span>
                <textarea className="field textarea" name="bio" defaultValue={profile.bio ?? ''} />
              </label>
              <div className="md:col-span-2">
                <FormButton pendingLabel="Сохраняем…">{dictionary.profile.actions.save}</FormButton>
              </div>
            </form>
          </article>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4">
          <span className="pill">Saved</span>
          <h2 className="mt-4 font-display text-5xl tracking-[0.08em] md:text-6xl">{locale === 'ru' ? 'Избранные работы' : 'Favorite works'}</h2>
        </div>

        {favoriteArtworks.length > 0 ? (
          <div className="grid-shell md:grid-cols-3">
            {favoriteArtworks.map((artwork) => (
              <ArtworkCard key={`favorite-${artwork.id}`} artwork={artwork} locale={locale} />
            ))}
          </div>
        ) : (
          <NoticeCard
            title={locale === 'ru' ? 'Пока нет избранного' : 'No favorites yet'}
            text={
              locale === 'ru'
                ? 'Сохраняй понравившиеся работы из публичного архива — они появятся здесь.'
                : 'Save works you like from the public archive and they will appear here.'
            }
            variant="info"
          />
        )}
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <span className="pill">Works</span>
            <h2 className="mt-4 font-display text-5xl tracking-[0.08em] md:text-6xl">{dictionary.profile.sections.myWorks}</h2>
          </div>
          <Link href={`/${locale}/submit`} className="button-primary">
            {dictionary.nav.submit}
          </Link>
        </div>

        {artworks && artworks.length > 0 ? (
          <div className="grid-shell md:grid-cols-3">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="space-y-3">
                <ArtworkCard artwork={artwork} locale={artwork.status === 'approved' ? locale : undefined} showStatus />
                <StatusBadge status={artwork.status} />
              </div>
            ))}
          </div>
        ) : (
          <NoticeCard title={dictionary.system.emptyState} text="После отправки работы сюда автоматически подтянутся статусы публикаций." variant="info" />
        )}
      </section>
    </div>
  );
}
