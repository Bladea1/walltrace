export function FlashMessage({
  message,
  variant = 'info',
}: {
  message?: string;
  variant?: 'info' | 'success' | 'error' | 'warning';
}) {
  if (!message) return null;

  return (
    <div className={`notice notice-${variant}`}>
      <p className="text-sm leading-7 text-white/88">{message}</p>
    </div>
  );
}
