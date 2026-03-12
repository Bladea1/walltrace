export function NoticeCard({
  title,
  text,
  variant = 'info',
}: {
  title: string;
  text: string;
  variant?: 'info' | 'warning' | 'error' | 'success';
}) {
  return (
    <div className={`notice notice-${variant}`}>
      <h3 className="font-display text-3xl tracking-[0.06em]">{title}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-white/80">{text}</p>
    </div>
  );
}
