import Link from 'next/link';

export function AdminShortcuts({ locale }: { locale: string }) {
  const items = [
    {
      href: `/${locale}/admin`,
      title: locale === 'ru' ? 'Модерация работ' : 'Artwork moderation',
      text: locale === 'ru' ? 'Очередь заявок пользователей и публикация approved-работ.' : 'Moderation queue for user submissions and publishing approved works.',
    },
    {
      href: `/${locale}/admin/history`,
      title: locale === 'ru' ? 'История' : 'History',
      text: locale === 'ru' ? 'Управление таймлайном и образовательными блоками.' : 'Manage the timeline and educational blocks.',
    },
    {
      href: `/${locale}/admin/news`,
      title: locale === 'ru' ? 'Новости' : 'News',
      text: locale === 'ru' ? 'Редакционные материалы и публикации.' : 'Editorial posts and published articles.',
    },
    {
      href: `/${locale}/admin/events`,
      title: locale === 'ru' ? 'События' : 'Events',
      text: locale === 'ru' ? 'Фестивали, дискуссии и календарь платформы.' : 'Festivals, talks, and the platform calendar.',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="group panel p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20">
          <p className="font-display text-4xl tracking-[0.06em]">{item.title}</p>
          <p className="mt-4 text-sm leading-7 text-white/68">{item.text}</p>
          <span className="mt-5 inline-flex text-xs uppercase tracking-[0.16em] text-white/60 transition group-hover:text-white">Open section →</span>
        </Link>
      ))}
    </div>
  );
}
