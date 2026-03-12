'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AvatarCircle } from '@/components/shared/avatar-circle';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';

function switchLocale(pathname: string, locale: Locale) {
  const normalized = pathname.replace(/^\/(ru|en)(?=\/|$)/, '');
  return normalized ? `/${locale}${normalized}` : `/${locale}`;
}

export function SiteHeader({
  locale,
  dictionary,
  isAuthenticated,
  isAdmin,
  profileName,
  profileAvatarUrl,
}: {
  locale: Locale;
  dictionary: Dictionary;
  isAuthenticated: boolean;
  isAdmin: boolean;
  profileName?: string | null;
  profileAvatarUrl?: string | null;
}) {
  const pathname = usePathname() || `/${locale}`;
  const altLocale: Locale = locale === 'ru' ? 'en' : 'ru';

  const items = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/archive`, label: dictionary.nav.archive },
    { href: `/${locale}/artists`, label: dictionary.nav.artists },
    { href: `/${locale}/history`, label: dictionary.nav.history },
    { href: `/${locale}/news`, label: dictionary.nav.news },
    { href: `/${locale}/events`, label: dictionary.nav.events },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-6 py-4">
        <div className="flex items-center gap-6">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <span className="font-display text-3xl tracking-[0.16em]">WALLTRACE</span>
            <span className="hidden text-xs uppercase tracking-[0.24em] text-white/60 md:inline-block">
              Archive / Media / Community
            </span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.16em] text-white/65 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={switchLocale(pathname, altLocale)}
            className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-white/5"
          >
            {altLocale}
          </Link>

          {isAdmin ? (
            <Link
              href={`/${locale}/admin`}
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5 lg:inline-flex"
            >
              {dictionary.nav.admin}
            </Link>
          ) : null}

          {isAuthenticated ? (
            <Link
              href={`/${locale}/profile`}
              className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/3 px-2 py-2 text-sm text-white transition hover:bg-white/7 sm:inline-flex"
            >
              <AvatarCircle src={profileAvatarUrl} name={profileName} size="sm" />
              <span className="max-w-[120px] truncate pr-2">{profileName || dictionary.nav.profile}</span>
            </Link>
          ) : (
            <Link
              href={`/${locale}/login`}
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5 sm:inline-flex"
            >
              {dictionary.nav.login}
            </Link>
          )}

          <Link
            href={`/${locale}/submit`}
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            {dictionary.nav.submit}
          </Link>
        </div>
      </div>
    </header>
  );
}
