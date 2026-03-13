import { getAuthState } from '@/lib/auth';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

export async function SiteShell({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  const authState = await getAuthState();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader
        locale={locale}
        dictionary={dictionary}
        isAuthenticated={Boolean(authState.user)}
        isAdmin={authState.profile?.role === 'admin'}
        profileName={authState.profile?.display_name ?? authState.profile?.username ?? null}
        profileAvatarUrl={authState.profile?.avatar_url ?? null}
      />
      <main className="overflow-x-hidden">{children}</main>
      <SiteFooter locale={locale} dictionary={dictionary} />
    </div>
  );
}