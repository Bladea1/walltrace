'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/archive`, label: dictionary.nav.archive },
    { href: `/${locale}/artists`, label: dictionary.nav.artists },
    { href: `/${locale}/history`, label: dictionary.nav.history },
    { href: `/${locale}/news`, label: dictionary.nav.news },
    { href: `/${locale}/events`, label: dictionary.nav.events },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="container-shell px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 lg:gap-6">
          <div className="flex min-w-0 items-center gap-3 lg:gap-6">
            <Link href={`/${locale}`} className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
              <span className="font-display text-2xl tracking-[0.12em] sm:text-3xl">WALLTRACE</span>
              <span className="hidden text-xs uppercase tracking-[0.24em] text-white/60 xl:inline-block">
                Archive / Media / Community
              </span>
            </Link>

            <nav className="hidden items-center gap-5 xl:flex">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm uppercase tracking-[0.16em] text-white/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
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
                className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/3 px-2 py-2 text-sm text-white transition hover:bg-white/7 md:inline-flex"
              >
                <AvatarCircle src={profileAvatarUrl} name={profileName} size="sm" />
                <span className="max-w-[120px] truncate pr-2">{profileName || dictionary.nav.profile}</span>
              </Link>
            ) : (
              <Link
                href={`/${locale}/login`}
                className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5 md:inline-flex"
              >
                {dictionary.nav.login}
              </Link>
            )}

            <Link
              href={`/${locale}/submit`}
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              <span className="hidden sm:inline">{dictionary.nav.submit}</span>
              <span className="sm:hidden">+</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <Link
              href={`/${locale}/submit`}
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              +
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-black/95 px-4 py-4 backdrop-blur-xl sm:hidden">
          <div className="container-shell space-y-3">
            <div className="grid gap-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm uppercase tracking-[0.14em] text-white/85 transition hover:bg-white/7"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="grid gap-2 pt-2">
              <Link
                href={switchLocale(pathname, altLocale)}
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm uppercase tracking-[0.14em] text-white/85 transition hover:bg-white/5"
              >
                {altLocale}
              </Link>

              {isAdmin ? (
                <Link
                  href={`/${locale}/admin`}
                  onClick={closeMenu}
                  className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/85 transition hover:bg-white/5"
                >
                  {dictionary.nav.admin}
                </Link>
              ) : null}

              {isAuthenticated ? (
                <Link
                  href={`/${locale}/profile`}
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-white/90 transition hover:bg-white/7"
                >
                  <AvatarCircle src={profileAvatarUrl} name={profileName} size="sm" />
                  <span className="truncate">{profileName || dictionary.nav.profile}</span>
                </Link>
              ) : (
                <Link
                  href={`/${locale}/login`}
                  onClick={closeMenu}
                  className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/85 transition hover:bg-white/5"
                >
                  {dictionary.nav.login}
                </Link>
              )}

              <Link
                href={`/${locale}/submit`}
                onClick={closeMenu}
                className="rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                {dictionary.nav.submit}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}