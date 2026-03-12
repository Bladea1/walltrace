import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';

export function SiteFooter({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-display text-4xl tracking-[0.14em] text-white">WALLTRACE</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">{dictionary.footer.label}</p>
        </div>

        <div className="md:text-right">
          <p className="text-sm leading-6 text-white/65">{dictionary.footer.rights}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/52">{locale.toUpperCase()} / 2026</p>
        </div>
      </div>
    </footer>
  );
}
