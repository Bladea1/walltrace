import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { FlashMessage } from '@/components/shared/flash-message';
import { FormButton } from '@/components/shared/form-button';
import { NoticeCard } from '@/components/shared/notice-card';
import { PageHero } from '@/components/shared/page-hero';
import { getAuthState } from '@/lib/auth';
import { isValidLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { getSingleSearchParam } from '@/lib/utils';
import { loginAction } from './actions';

export default async function LoginPage({
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

  if (authState.user) {
    redirect(`/${locale}/profile`);
  }

  const sp = await searchParams;
  const message = getSingleSearchParam(sp.message);
  const error = getSingleSearchParam(sp.error);

  return (
    <div className="container-shell py-8 md:py-12">
      <div className="mx-auto w-full max-w-[900px]">
        <PageHero eyebrow="Auth" title={dictionary.auth.loginTitle} subtitle={dictionary.auth.loginHint} />

        <div className="mt-6 grid gap-4">
          <FlashMessage message={message} variant="success" />
          <FlashMessage message={error} variant="error" />
          {!authState.configured ? (
            <NoticeCard title={dictionary.system.supabaseMissingTitle} text={dictionary.system.supabaseMissingText} variant="warning" />
          ) : null}
        </div>

        <section className="panel mt-8 p-6 md:p-8">
          <form className="grid gap-4" action={loginAction.bind(null, locale)}>
            <label className="field-label">
              <span>{dictionary.auth.email}</span>
              <input className="field" type="email" name="email" placeholder="mail@example.com" required />
            </label>
            <label className="field-label">
              <span>{dictionary.auth.password}</span>
              <input className="field" type="password" name="password" placeholder="••••••••" required minLength={6} />
            </label>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <FormButton pendingLabel="Входим…">{dictionary.auth.buttonLogin}</FormButton>
              <Link href={`/${locale}/register`} className="button-secondary">
                {dictionary.auth.goToRegister}
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
