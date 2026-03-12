import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { isValidLocale, locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);

  return (
    <SiteShell locale={locale} dictionary={dictionary}>
      {children}
    </SiteShell>
  );
}
